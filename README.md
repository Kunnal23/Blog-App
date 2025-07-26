# Blog App- Fullstack MERN Blog Platform


This is a full-stack Blog Web Application built with the MERN stack (MongoDB, Express.js, React, Node.js). It offers both user and admin functionality, making it suitable for personal blogging or managing a multi-author content platform.

Users can register, sign in, read blog posts, comment on articles, and manage their profiles. Admins can manage all users, posts, and comments through a dedicated dashboard interface.



## 📦 Features

- 🔐 Authentication with JWT (Signin, Signup)
- 🔗 Google Sign-In with Firebase Authentication
- 🧑‍💻 Admin + User dashboard with role-based access
- 📝 Create, update, and delete blog posts (Rich Text + Images)
- 💬 Comment system
- 🔎 Full-text Search
- ☁️ Cloudinary for image uploads
- 📊 Admin analytics (users, posts, comments)
- ⚙️ Environment-based config (dotenv)
- 🌍 Hosted with Render



## 🚀 Live Demo

👉 [Kunnal's Blog](https://blog-app-0smu.onrender.com/)

## 🛠️ Tech Stack Used

### 🎨 Frontend
![frontend](https://skillicons.dev/icons?i=react,tailwindcss,redux,vite,npm)

### 🖥️ Backend
![backend](https://skillicons.dev/icons?i=nodejs,expressjs,npm,postman)
### 📊 Database
![database](https://skillicons.dev/icons?i=mongodb)
### 🔐 Authentication
![auth](https://skillicons.dev/icons?i=firebase)

## 📁 Project Structure

```
Blog-App/
├── api/                 
│   ├── routes/
│   ├── controllers/
│   ├── models/
|   ├── utils/
│   └── index.js
├── client/                
│   ├── src/
│   ├── public/
|   ├── .env               # Frontend environment variables
|   ├── tailwind.config.js
│   ├── vite.config.js
│   └── index.html
├── .env                   # Backend environment variables         
├── package.json
└── README.md
```

## ⚙️ Environment variables
### Backend ```.env ```
```
MONGO=mongodb+srv://yourMongoURI
JWT_SECRET=yourSecretKey

```
### Frontend ```client/.env```
```
VITE_FIREBASE_API_KEY=yourFirebaseApiKey
```

## ⚙️ How to Run Locally

### 🔧 Prerequisites

- Node.js & npm installed
- MongoDB (local or Atlas)
- Firebase project 
- Git installed


### 🧑‍💻 Steps to Start

1. **🧬 Clone the repo**  
   ```
   git clone https://github.com/Kunnal23/Blog-App.git
   cd Blog-App
   ```

2. **📦 Install dependencies**

    ```
    # From root directory

    npm install
    cd client && npm install
    ```

3. **▶️ Run Backend**

    ```
    # from root
    npm run dev
    ```
4. **▶️ Run Frontend**

    ```
    # from root
    cd client
    npm run dev
    ```


## ✒️ Author
**Kunnal Kant Lal-** 
[kantkunnal2311@gmail.com](mailto:kantkunnal2311@gmail.com)


