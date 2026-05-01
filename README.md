# 🐄 QurbaniHat – Livestock Booking Platform

A modern livestock marketplace where users can explore and book animals for Qurbani such as cows and goats. Users can view animal details, register/login, and book animals after authentication.

---

## 🌐 Live Project
👉 https://qurbanihat-nine.vercel.app/

---

## 🎯 Project Purpose
QurbaniHat is built to simplify livestock purchasing during Qurbani season. Users can browse animals, view details, and place bookings securely after authentication.

---

## 🚀 Key Features

- 🔐 Authentication system (Email & Password + Google OAuth)
- 👤 User registration & login system
- 🐄 Animal listing with details page
- 📄 Booking form (requires login)
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🔔 Toast notifications for success & error handling
- ⏳ Loading UI support
- ❌ Custom Not Found page
- 👤 My Profile page with user info
- ✏️ Update profile feature (name & image)
- 🎨 Modern UI with Tailwind CSS + ShadCN components
- ⚡ Smooth navigation using Next.js App Router

---

## 🧩 Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- ShadCN UI
- React Hook Form
- Zod Validation
- Better Auth (Authentication)
- Sonner (Toast Notifications)
- Lucide Icons

---

## 📦 NPM Packages Used

- next
- react
- react-dom
- react-hook-form
- zod
- @hookform/resolvers
- better-auth
- sonner
- lucide-react
- tailwindcss
- shadcn/ui components

---

## 🔐 Authentication Features

### Email & Password
- User can register with name, email, password
- Login using email & password
- Form validation with Zod
- Error handling with toast

### Google Login
- One-click Google OAuth login
- Automatic session creation
- Redirects to homepage after login

---

## 📄 Pages

### Public Routes
- `/` → Home
- `/animals` → All animals
- `/auth/login` → Login page
- `/auth/register` → Register page

### Private Routes
- `/animals/[id]` → Animal details + booking form
- `/auth/dashboard/profile` → User profile

---

## ⚙️ Extra Requirements Implemented

- ✔ Toast notifications (success & error)
- ✔ Loading states (UI feedback)
- ✔ Not-found page
- ✔ Responsive UI
- ✔ Authentication protected routes
- ✔ Google OAuth login integration

---

## 📌 Notes

- No database booking storage (as per assignment rules)
- Booking form resets after submission
- Authentication handled via Better Auth
- Fully SPA-friendly routing (no reload errors)

---

## 🏁 Status

✅ Assignment Completed  
✅