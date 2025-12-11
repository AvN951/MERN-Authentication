---

# 🔐 MERN Authentication

<h3 align="center">A Secure & Minimal Authentication System Built with the MERN Stack</h3>

---

## 🚀 Overview

**MERN Authentication** is a clean and secure authentication boilerplate built using:
**MongoDB + Express.js + React + Node.js**.

This project includes **user registration, login, authentication, authorization, protected routes**, and a clean folder structure — making it an ideal starter kit for future MERN projects.

---

## ✨ Features

* 🔑 **User Registration** (email + password)
* 🔐 **User Login** with server validation
* 🎫 **JWT Authentication** or session-based auth (depending on your setup)
* 🚫 **Protected Routes** on the frontend
* 🌐 **CORS Enabled** API communication
* 📦 **Modular backend structure** (controllers, routes, models)
* ⚛️ **React-based modern UI**
* 🧭 **React Router** for navigation + route guarding
* 📡 **Axios** for API calls
* 🛠️ Easy to extend (add password reset, email verification, OAuth, etc.)

---

## 🛠️ Tech Stack

### **Frontend**

* React
* React Router
* Axios
* CSS / Tailwind / Your preferred style

### **Backend**

* Node.js
* Express.js
* MongoDB (Mongoose)
* JSON Web Token (JWT)
* dotenv

---

## 📁 Folder Structure

```
MERN-Authentication/
│
├── client/         # React frontend
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/         # Node + Express backend
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   ├── config/
│   └── package.json
│
└── README.md
```

---

## 📦 Installation & Setup

### 🔹 1. Clone the Repository

```bash
git clone https://github.com/AvN951/MERN-Authentication
cd MERN-Authentication
```

---

## 🖥️ Backend Setup

```bash
cd server
npm install
```

### Create a `.env` file inside `/server`:

```
MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret_key
PORT=5000
NODE_ENV=development
```

### Start Backend Server

```bash
npm start      # or npm run dev if using nodemon
```

---

## 🎨 Frontend Setup

```bash
cd ../client
npm install
npm start
```

Now open your browser and visit:
👉 **[http://localhost:5000](http://localhost:5000)**

---

## 🔧 How Authentication Works

1. User registers (POST request → MongoDB saves user).
2. User logs in (credentials validated).
3. Backend generates a **JWT token**.
4. Frontend stores the token (localStorage / cookies).
5. Protected routes check for authentication before rendering.
6. Logout clears user token.

---

## 📸 Screenshots

<img width="1366" height="768" alt="Screenshot 2025-12-04 215230" src="https://github.com/user-attachments/assets/6fec4755-02f3-4f8b-8f84-42e4b83782b5" />
<img width="1366" height="768" alt="Screenshot 2025-12-04 215534" src="https://github.com/user-attachments/assets/4cbab71b-3e57-4e3d-bd84-e50b4d2987e8" />
<img width="1366" height="768" alt="Screenshot 2025-12-05 235420" src="https://github.com/user-attachments/assets/dbba4b01-6ab0-4e33-827b-184ec60c52ae" />
<img width="1366" height="768" alt="Screenshot 2025-12-05 235428" src="https://github.com/user-attachments/assets/13086fd8-e7c4-44df-848a-d72afdffb035" />
<img width="1365" height="767" alt="Screenshot 2025-12-07 153142" src="https://github.com/user-attachments/assets/472529fc-91fa-49ca-b5e3-71c47a9f8e86" />
<img width="1365" height="767" alt="Screenshot 2025-12-07 153242" src="https://github.com/user-attachments/assets/ad30d71f-574c-472a-befc-88bf0a5481ea" />
<img width="1366" height="768" alt="Screenshot 2025-12-07 153255" src="https://github.com/user-attachments/assets/301fb9ef-b5c4-4c49-bc90-3bf6a2dbedaa" />
<img width="1366" height="768" alt="Screenshot 2025-12-07 153304" src="https://github.com/user-attachments/assets/dd750d2d-0569-4431-9398-1d3db6d1497f" />
<img width="1366" height="768" alt="Screenshot 2025-12-07 153330" src="https://github.com/user-attachments/assets/a21430ae-c1c8-4763-b2d6-268eca25ea05" />
<img width="1366" height="768" alt="Screenshot 2025-12-07 153348" src="https://github.com/user-attachments/assets/09c59ef8-502a-4a9e-a6bc-db65d67e6bd0" />
<img width="1366" height="768" alt="Screenshot 2025-12-07 153355" src="https://github.com/user-attachments/assets/915dc375-6c9b-4fd6-8dd8-4decd78152f1" />
<img width="1366" height="768" alt="Screenshot 2025-12-07 153410" src="https://github.com/user-attachments/assets/bf844c39-57cf-4c64-b79d-78d564997422" />
<img width="1366" height="768" alt="Screenshot 2025-12-07 153427" src="https://github.com/user-attachments/assets/af732b7e-1400-4a0f-ae01-5539de3d6f83" />
<img width="1366" height="768" alt="Screenshot 2025-12-07 153444" src="https://github.com/user-attachments/assets/c04a3404-f068-4421-945d-9ade15ba9f76" />
<img width="1366" height="768" alt="Screenshot 2025-12-07 153500" src="https://github.com/user-attachments/assets/6e3c3370-cd81-4caf-8536-76d14bd6ba17" />
<img width="1366" height="768" alt="Screenshot 2025-12-07 153514" src="https://github.com/user-attachments/assets/0f11bf9f-114e-43a7-b11b-88fe1d45455e" />


---

## 🤝 Contributing

Pull requests and issue reports are welcome!
If you want new features like OAuth, admin panel, etc., feel free to open an issue.

---

## 📄 License

This project is licensed under the **MIT License**.

---
