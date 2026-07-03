# Personal Portfolio Website

A responsive and interactive personal portfolio showcasing my projects, experience, and technical skills.

## Tech Stack
- React
- Tailwind CSS
- Vite
- Three.js
- Framer Motion

## Features
- Fully responsive design
- Project showcase with live demos
- Interactive 3D elements using Three.js
- Smooth animations with Framer Motion
- Clean and modern user interface

## Live Demo
🔗 https://3d-portfolio-ansh.vercel.app/ 


## Run Locally

```bash
npm install
npm run dev
```

## Environment Variables

Create a `.env` file in the project root using `.env.example`.

```env
VITE_APP_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_APP_EMAILJS_AUTOREPLY_TEMPLATE_ID=your_emailjs_autoreply_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

## Vercel Deployment

- Framework preset: `Vite`
- Build command: `npm run build`
- Output directory: `dist`
- Add the same `VITE_*` environment variables in the Vercel project settings

## Backend Note

This frontend currently does not call the FastAPI backend directly. If you later connect API calls, add a frontend env such as:

```env
VITE_API_BASE_URL=https://your-render-backend.onrender.com
```
