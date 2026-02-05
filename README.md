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


🔌 API

The application consumes the CodeLeap test API:

Base URL:
https://dev.codeleap.co.uk/careers/

Available operations:

GET / – list posts

POST / – create post

PATCH /:id/ – edit post

DELETE /:id/ – delete post

▶️ Running the Project Locally
1. Clone the repository
git clone https://github.com/PedroHIB/codeleap-frontend-test.git
cd codeleap-frontend-test

2. Install dependencies
npm install

3. Start the development server
npm run dev


The app will be available at:

http://localhost:5173

🎨 Styling

The UI was built following the provided Figma layout

Styling was implemented using plain CSS

Global design tokens (colors, radius, spacing) are defined in global.css

Font used: Roboto

🧠 Architectural Decisions

API logic is isolated in service files

Business logic is handled via custom hooks

Components are kept presentational and reusable

Modals are controlled by the parent component (Feed)

No external UI libraries were used

🚀 Deployment

The project can be easily deployed using platforms like Vercel or Netlify.

✅ Final Notes

This project focuses on:

Clean architecture

Separation of concerns

UX consistency

Maintainability and readability

Thank you for reviewing this submission 🙂


---

## ✅ Próximo passo recomendado

Agora só falta **1 coisa** para fechar com chave de ouro:

👉 **Deploy (Vercel)**

Se quiser, no próximo passo eu:
- te guio no deploy passo a passo  
- ou faço uma **revisão final como avaliador** antes do envio

É só dizer 🚀
