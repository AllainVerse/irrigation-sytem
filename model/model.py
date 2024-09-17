import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split, cross_val_score
from xgboost import XGBClassifier
from sklearn.preprocessing import StandardScaler, LabelEncoder
from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score, roc_auc_score
import joblib

data = pd.read_csv("./dataset/soil_data.csv")

data.drop_duplicates(inplace=True)

label = LabelEncoder()
data['label'] = label.fit_transform(data['label'])

cols = data.select_dtypes(include='number').columns

for col in cols:
    Q1 = data[col].quantile(0.25)
    Q3 = data[col].quantile(0.75)
    IQR = Q3 - Q1
    upper_bound = Q3 + (1.5 * IQR)
    lower_bound = Q1 - (1.5 * IQR)
    
    data[col] = np.where(data[col] > upper_bound, upper_bound, np.where(data[col] < lower_bound, lower_bound, data[col]))

X = data.drop(['label'], axis = 1)
y = data['label']

scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

X_train, X_test, y_train, y_test = train_test_split(X_scaled, y, test_size=0.2, random_state=42)

model = XGBClassifier(objective='multi:softmax', max_depth=5, learning_rate=0.1, n_estimators=500, reg_lambda=1, subsample=0.8, colsample_bytree=0.8, min_child_weight=3, gamma=0.2)
model.fit(X_train, y_train)
y_pred= model.predict(X_test)

# Compute additional metrics
accuracy = accuracy_score(y_test, y_pred)
precision = precision_score(y_test, y_pred, average='weighted') # Use 'weighted' average for multiclass
recall = recall_score(y_test, y_pred, average='weighted') # Use 'weighted' average for multiclass
f1 = f1_score(y_test, y_pred, average='weighted') # Use 'weighted' average for multiclass

print("Accuracy:", accuracy)
print("Precision:", precision)
print("Recall:", recall)
print("F1 Score:", f1)

joblib.dump(scaler, 'scaler.pkl')
joblib.dump(model, 'soil_prediction.pkl')
joblib.dump(label, 'decoder.pkl')