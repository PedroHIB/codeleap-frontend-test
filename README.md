# CodeLeap Frontend Test

This project is a frontend application developed as part of the CodeLeap engineering test.  
The goal is to build a simple social feed application performing basic CRUD operations, following a provided Figma design and consuming a REST API.

---

## ✨ Features

- User signup (username stored locally)
- Create posts
- List posts from the API
- Edit own posts
- Delete own posts with confirmation modal
- Sorted feed (most recent posts first)
- Form validations and disabled states
- Responsive and clean UI based on Figma

---

## 🧱 Tech Stack

- **React**
- **TypeScript**
- **Vite**
- **Axios**
- **CSS (no UI libraries)**
- **REST API**

---

## 📁 Project Structure

```txt
src/
├── components/
│   ├── Modal
│   ├── PostCard
│   ├── EditPostModal
│   └── DeletePostModal
├── contexts/
│   └── useAuth
├── hooks/
│   └── usePosts
├── pages/
│   ├── SignUp
│   └── Feed
├── services/
│   └── posts.service.ts
├── styles/
│   └── global.css
└── types/
    └── Post.ts
