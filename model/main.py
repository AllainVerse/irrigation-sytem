from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import joblib
import numpy as np
import pandas as pd

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Mengizinkan origin tertentu
    allow_credentials=True, # Mengizinkan kredensial (seperti cookies)
    allow_methods=["*"],    # Mengizinkan semua metode HTTP
    allow_headers=["*"],    # Mengizinkan semua header
)

model = joblib.load('soil_prediction.pkl')
scaler = joblib.load('scaler.pkl')
decoder = joblib.load('decoder.pkl')

class DataInput(BaseModel):
    N: int
    P: int
    K: int
    temperature: float
    humidity: float
    ph: float
    rainfall: float

@app.get("/")
def read_root():
    return {"message": "API for custom dataset is running"}

@app.post("/predict")
def predict(data: DataInput):
    try:
        # Ubah input data menjadi array 2D dengan shape (1, 7)
        input_data = np.array([[data.N, data.P, data.K, data.temperature, data.humidity, data.ph, data.rainfall]])

        # Lakukan scaling pada input data
        input_data_scaled = scaler.transform(input_data)

        # Lakukan prediksi menggunakan model
        prediction = model.predict(input_data_scaled)

        # Ubah hasil prediksi menjadi label kategorikal asli
        predicted_label = decoder.inverse_transform([prediction[0]])

        return {"prediction": predicted_label[0]}
    except Exception as e:
        return {"error": str(e)}