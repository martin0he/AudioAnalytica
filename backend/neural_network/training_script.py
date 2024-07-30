# backend/neural_network/train_neural_network.py
import numpy as np
import pandas as pd
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, Dropout
from tensorflow.keras.optimizers import Adam
import os

# Load the CSV data
current_dir = os.path.dirname(__file__)
data_path = os.path.join(current_dir, 'features_data.csv') 
df = pd.read_csv(data_path)

# Extract features
features = df[['acousticness', 'valence', 'instrumentalness', 'danceability', 'liveness', 'energy', 'tempo', 'speechiness', 'duration_ms']].values

# Define benchmarks
benchmarks = np.array([0.211, 0.58, 0.137, 0.667, 0.122, 0.685, 127, 0.08, 240000])  # duration in milliseconds

# Normalize the duration and tempo
features[:, 8] = features[:, 8] / 60000  # Convert duration from ms to minutes
features[:, 6] = features[:, 6] / 200  # Normalize tempo if necessary

# Normalize the benchmarks in the same way
benchmarks[8] = benchmarks[8] / 60000  # Convert duration from ms to minutes
benchmarks[6] = benchmarks[6] / 200  # Normalize tempo

# Calculate labels as the similarity to benchmarks (1 - MSE)
labels = np.mean((features - benchmarks) ** 2, axis=1)
labels = 1 - labels / np.max(labels)

# Define the model
model = Sequential([
    Dense(64, input_dim=9, activation='relu', kernel_regularizer=tf.keras.regularizers.l2(0.001)),
    Dropout(0.3),
    Dense(32, activation='relu', kernel_regularizer=tf.keras.regularizers.l2(0.001)),
    Dropout(0.3),
    Dense(16, activation='relu', kernel_regularizer=tf.keras.regularizers.l2(0.001)),
    Dense(1, activation='sigmoid')  # Output layer with sigmoid to bound output between 0 and 1
])

# Compile the model
model.compile(optimizer=Adam(learning_rate=0.001), loss='mean_squared_error')

# Train the model
model.fit(features, labels, epochs=35, batch_size=32)

# Save the model
model.save('neural_network_model.keras')
