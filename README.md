# 🛡️ PhishGuard — AI-Powered Phishing Email Detection

![PhishGuard Banner](https://res.cloudinary.com/dlzb0kfc7/image/upload/q_auto/f_auto/v1781490671/Image_odxx86.webp)

A full-stack, production-deployed phishing email detection system powered by Machine Learning.
Paste any email content and get an instant AI-powered verdict with confidence scores.

🔗 **Live Demo:** [phish-guard-frontend.vercel.app](https://phish-guard-frontend.vercel.app)

---

## 🏗️ System Architecture

---

## ⚙️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React, Vite, CSS |
| Backend | Java, Spring Boot, REST API |
| ML Service | Python, Flask, scikit-learn |
| ML Model | Random Forest Classifier |
| Deployment | Vercel (frontend), Render (backend + ML) |
| Version Control | Git, GitHub |

---

## 🚀 Features

- Paste any email text and get an instant phishing verdict
- Confidence scores for Phishing vs Safe classification
- Keyword-based analysis explanation
- Three-tier microservices architecture
- Fully deployed across cloud platforms
- Cold start UX handling with user feedback

---

## 📁 Project Structure

This project is split across three repositories:

| Repo | Description |
|------|-------------|
| [phish-guard-frontend](https://github.com/jagdeep2001kainth/phish-guard-frontend) | React/Vite frontend |
| [phish-guard-backend](https://github.com/jagdeep2001kainth/phish-guard-backend) | Spring Boot REST API |
| [phish-guard-ml-service](https://github.com/jagdeep2001kainth/phish-guard-ml-service) | Flask + Random Forest ML service |

---

## 🧠 How It Works

1. User pastes email text into the React frontend
2. React sends a POST request to the Spring Boot backend
3. Spring Boot validates and forwards the request to the Flask ML service
4. Flask runs the email text through TF-IDF vectorization
5. Random Forest model predicts phishing probability
6. Result flows back through the chain to the user

---

## 🛠️ Running Locally

### ML Service (Flask)
```bash
cd phish-guard-ml-service
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python app.py
```

### Backend (Spring Boot)
```bash
cd phish-guard-backend
./mvnw spring-boot:run
```

### Frontend (React)
```bash
cd phish-guard-frontend
npm install
npm run dev
```

---

## 📊 Model Performance

| Model | Role |
|-------|------|
| Random Forest | Primary classifier trained on phishing email dataset |
| TF-IDF Vectorizer | Text feature extraction |

Threshold: > 70% probability = Phishing verdict

---

## 👨‍💻 Author

**Jagdeep Kainth**
- GitHub: [@jagdeep2001kainth](https://github.com/jagdeep2001kainth)
- LinkedIn: [kainthjagdeep](https://www.linkedin.com/in/kainthjagdeep/)
- LeetCode: [leetcode.com/u/JagdeepKainth](https://leetcode.com/u/jagdeepkainth/)
