# backend/neural_network/flask_app.py
# -*- coding: utf-8 -*-
from flask import Flask, request, jsonify
import numpy as np
import tensorflow as tf
from flask_cors import CORS
import logging

# Load the trained model
model = tf.keras.models.load_model('neural_network_model.keras')

app = Flask(__name__)
CORS(app)

# Configure logging
logging.basicConfig(level=logging.INFO)

# Benchmark stats (normalized in the same way as in the training script)
benchmarks = np.array([0.211, 0.58, 0.137, 0.667, 0.122, 0.685, 127 / 200, 0.08, 240000 / 60000])  # duration in minutes and tempo normalized

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json['data']
    features = np.array([
        data['acousticness'],
        data['valence'],
        data['instrumentalness'],
        data['danceability'],
        data['liveness'],
        data['energy'],
        data['tempo'] / 200,  # Normalize tempo
        data['speechiness'],
        data['duration_ms'] / 60000  # Convert ms to minutes
    ]).reshape(1, -1)
    
    # Make prediction (how close to benchmarks)
    prediction = model.predict(features)
    score = float(prediction[0][0])  # Convert float32 to native Python float

    return jsonify({'score': score})

@app.route('/test-benchmark', methods=['GET'])
def test_benchmark():
    features = benchmarks.reshape(1, -1)
    
    # Make prediction (how close to benchmarks)
    prediction = model.predict(features)
    score = float(prediction[0][0])  # Convert float32 to native Python float

    return jsonify({'score': score})

if __name__ == '__main__':
    app.run(debug=True)
