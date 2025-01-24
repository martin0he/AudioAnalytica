import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense
import joblib

# Load dataset
data = pd.read_csv('features_data.csv')  

# Preprocess data
X = data[['acousticness', 'valence', 'instrumentalness', 'danceability', 'liveness', 'energy', 'tempo', 'speechiness', 'duration_ms']]
# Ideal values
ideal_values = {
    'acousticness': 0.211,
    'valence': 0.58,
    'instrumentalness': 0.137,
    'danceability': 0.667,
    'liveness': 0.122,
    'energy': 0.685,
    'tempo': 127,
    'speechiness': 0.08,
    'duration_ms': 4 * 60 * 1000 + 1 * 1000  # 4 minutes and 1 second in milliseconds
}

# Calculate "good taste" score (1 - normalized Euclidean distance)
def calculate_good_taste_score(row):
    distance = np.sqrt(((row - pd.Series(ideal_values))**2).sum())
    max_distance = np.sqrt(sum([(1 - value)**2 for value in ideal_values.values()]))  # Max possible distance
    score = 1 - (distance / max_distance)
    return score

y = X.apply(calculate_good_taste_score, axis=1)

scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

X_train, X_test, y_train, y_test = train_test_split(X_scaled, y, test_size=0.2, random_state=42)

# Define neural network model
model = Sequential([
    Dense(64, input_dim=X_train.shape[1], activation='relu'),
    Dense(32, activation='relu'),
    Dense(1, activation='sigmoid')
])

model.compile(optimizer='adam', loss='mean_squared_error', metrics=['mae'])

# Train model
model.fit(X_train, y_train, epochs=50, batch_size=32, validation_split=0.2)

# Evaluate model
loss, mae = model.evaluate(X_test, y_test)
print(f"Model Mean Absolute Error: {mae}")

# Save model and scaler
model.save('music_taste_model.h5')
joblib.dump(scaler, 'scaler.pkl')
