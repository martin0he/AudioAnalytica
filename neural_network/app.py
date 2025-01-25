from flask import Flask, request, jsonify
import numpy as np
from tensorflow.keras.models import load_model
import joblib
import pandas as pd
import os

app = Flask(__name__)

# Load model and scaler
model = load_model('music_taste_model.h5')
scaler = joblib.load('scaler.pkl')

@app.route('/')
def home():
    """
    Root endpoint to display a welcome message for AudioAnalytica Neural Network.
    """
    return jsonify({
        "message": "Welcome to AudioAnalytica Neural Network!",
        "description": "This API provides predictions based on user audio preferences.",
        "endpoints": {
            "/predict": "POST - Send JSON data with audio features to get a score."
        }
    })

@app.route('/predict', methods=['POST'])
def predict():
    """
    Prediction endpoint that receives JSON input and returns a score prediction.
    """
    try:
        data = request.json['data']
        features = np.array([
            data['acousticness'],
            data['valence'],
            data['instrumentalness'],
            data['danceability'],
            data['liveness'],
            data['energy'],
            data['tempo'],
            data['speechiness'],
            data['duration_ms']
        ])
        
        # Ensure the feature array is reshaped correctly and has proper names
        feature_names = ['acousticness', 'valence', 'instrumentalness', 'danceability', 'liveness', 'energy', 'tempo', 'speechiness', 'duration_ms']
        features_df = pd.DataFrame([features], columns=feature_names)
        
        # Scale features and get prediction
        features_scaled = scaler.transform(features_df)
        prediction = model.predict(features_scaled)
        result = {'score': float(prediction[0][0])}
        return jsonify(result)
    except Exception as e:
        app.logger.error(f"Error during prediction: {e}")
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port=5000)
