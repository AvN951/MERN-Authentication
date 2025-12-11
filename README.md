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
👉 **[http://localhost:3000](http://localhost:3000)**

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

*(Add your images here — login page, signup page, dashboard, etc.)*

<img width="1366" height="768" alt="Screenshot 2025-12-07 153355" src="https://github.com/user-attachments/assets/d3550580-9da4-4076-a698-e636be632718" />
<img width="1366" height="768" alt="Screenshot 2025-12-07 153348" src="https://github.com/user-attachments/assets/8a973761-9782-4ad6-a78a-7f6d4223e467" />
<img width="1366" height="768" alt="Screenshot 2025-12-07 153330" src="https://github.com/user-attachments/assets/4625027f-e38a-4843-95e4-41895adda9fa" />
<img width="1366" height="768" alt="Screenshot 2025-12-07 153304" src="https://github.com/user-attachments/assets/35ff99bc-cc9a-4776-8707-777caff0079f" />
<img width="1366" height="768" alt="Screenshot 2025-12-07 153255" src="https://github.com/user-attachments/assets/ea831d37-6b4a-407d-b974-02c9b060dfb3" />
<img width="1365" height="767" alt="Screenshot 2025-12-07 153242" src="https://github.com/user-attachments/assets/1a76f06b-0faa-4d2f-b226-a30039ae0c62" />
<img width="1365" height="767" alt="Screenshot 2025-12-07 153142" src="https://github.com/user-attachments/assets/0dafa861-2f85-4409-a371-6e17d9bf1e15" />
<img width="1366" height="768" alt="Screenshot 2025-12-05 235428" src="https://github.com/user-attachments/assets/7ca68bc0-ac43-4529-a918-17c71c62b6b6" />
<img width="1366" height="768" alt="Screenshot 2025-12-05 235420" src="https://github.com/user-attachments/assets/5d34b12e-9a87-4ebc-8473-21446fe5e423" />
<img width="1366" height="768" alt="Screenshot 2025-12-04 215534" src="https://github.com/user-attachments/assets/cb84c620-4942-4698-a653-9e088f37a3a3" />
<img width="1366" height="768" alt="Screenshot 2025-12-04 215230" src="https://github.com/user-attachments/assets/3bd925c7-b658-408e-8a3d-9f651545e1c7" />
<img width="1366" height="768" alt="Screenshot 2025-12-07 153514" src="https://github.com/user-attachments/assets/2f3ef98f-fd79-4cd2-8d13-7440bd2dc425" />
<img width="1366" height="768" alt="Screenshot 2025-12-07 153500" src="https://github.com/user-attachments/assets/6c7eeeab-7456-4621-8b17-2f1545803e8b" />
<img width="1366" height="768" alt="Screenshot 2025-12-07 153444" src="https://github.com/user-attachments/assets/ab019f83-1c2b-46ac-b412-e8f4c711d83f" />
<img width="1366" height="768" alt="Screenshot 2025-12-07 153427" src="https://github.com/user-attachments/assets/e9c53257-fad4-4b3d-b282-4c5701044264" />
<img width="1366" height="768" alt="Screenshot 2025-12-07 153410" src="https://github.com/user-attachments/assets/76d134d6-535e-4989-970a-f14ccbe625f3" />

---

## 🤝 Contributing

Pull requests and issue reports are welcome!
If you want new features like OAuth, admin panel, etc., feel free to open an issue.

---

## 📄 License

This project is licensed under the **MIT License**.

---

If you'd like, I can also generate a **professional README badge section**, API documentation, or **a logo banner** for your repo.
