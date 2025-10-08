# 🌍 Mrittikka Pay  
A full-stack payment marketplace platform built using **React (Vite)**, **Node.js (Express)**, and **TailwindCSS**.  

This app demonstrates a simple yet powerful architecture — including user login, product listings, buying operations, and a dashboard to visualize key stats.  

---

## 🧩 Tech Stack  

### **Frontend**
- React + Vite  
- TailwindCSS  
- Axios (for API calls)  
- React Router  

### **Backend**
- Node.js + Express  
- In-memory data store (can be easily extended to MongoDB/SQLite)  
- RESTful API endpoints  

---

## 🚀 Features  

### 🖥️ Frontend
- **Login Page** — Centered card with phone number input  
- **Home Page** — Responsive grid of marketplace products  
- **Dashboard Page** — Displays stats using simple cards  
- **Fully Responsive** — Works on mobile, tablet, and desktop  

### ⚙️ Backend
- `/api/auth/login` — User authentication endpoint  
- `/api/listings` — CRUD operations for listings  
- `/api/listings/:id/buy` — Simulates buying a product  

---

## 🏗️ Project Structure  
<img width="544" height="515" alt="image" src="https://github.com/user-attachments/assets/0eb4ddd8-90a8-4ae0-802a-c830e2cf4268" />


---

## ⚡️ Quick Start  

### 1) Clone Repository  
```bash
git clone https://github.com/yourusername/mrittikka-pay.git
cd mrittikka-pay
```
### 2) Run Backend
```cd backend
npm install
node index.js
```
### 3) Run Frontend
```cd ../frontend
npm install
npm run dev
```
<img width="793" height="455" alt="image" src="https://github.com/user-attachments/assets/e3611c1f-2ec2-4494-96f0-deddec5d7d07" />

### Running Tests 
Inside /Backend:
```npm test```
This uses Jest + Supertest to test API endpoints for listing CRUD and buy operations.

## 🧠 Future Enhancements  
- JWT-based Authentication  
- MongoDB or PostgreSQL Database  
- Stripe / Razorpay Payment Integration  
- Real-time dashboard stats  

---









