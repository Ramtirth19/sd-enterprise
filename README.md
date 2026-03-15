# SD Enterprise Website

A professional website for **SD Enterprise** — Professional Interior Contractors & Ceiling/Aluminium Specialists, established in 2008.

## What is this project?

This is a deployment-ready company website built with **Next.js** and **Tailwind CSS**. It includes:

- **Home** – Hero, services overview, why choose us, gallery preview
- **About** – Company history, mission, vision, strengths
- **Services** – Main services page + 5 detailed service sub-pages
- **Gallery** – Project gallery with category filters
- **Contact** – Contact form and details
- **Click-to-call** – Floating call button on all pages (mobile-friendly)

## Prerequisites (What you need before starting)

- **Node.js** (version 18 or higher) – [Download from nodejs.org](https://nodejs.org/)
- **npm** (comes with Node.js)
- A code editor like **VS Code** or **Cursor**

## Quick Start (Run locally)

1. **Open the project folder** in your terminal:
   ```bash
   cd sd-enterprise
   ```

2. **Install dependencies** (first time only):
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and go to: [http://localhost:3000](http://localhost:3000)

## Project Structure (For beginners)

```
sd-enterprise/
├── src/
│   ├── app/              # Pages (each folder = a route)
│   │   ├── page.tsx      # Home page (/)
│   │   ├── about/        # About page (/about)
│   │   ├── services/     # Services pages (/services, /services/[slug])
│   │   ├── gallery/      # Gallery page (/gallery)
│   │   └── contact/      # Contact page (/contact)
│   ├── components/       # Reusable UI components
│   └── lib/
│       └── constants.ts  # Company info, services data
├── public/               # Static files (images, etc.)
├── package.json          # Dependencies and scripts
└── README.md             # This file
```

## Contact Form Setup

The contact form uses **Formspree** (free tier) to send emails. To enable it:

1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form and copy the form ID (e.g. `xyzabcde`)
3. Create a file named `.env.local` in the project root:
   ```
   NEXT_PUBLIC_FORMSPREE_ID=your_form_id_here
   ```
4. Restart the dev server (`npm run dev`)

Without this, the form will show an alert asking you to configure it.

## Adding Real Photos to Gallery

1. Add your project photos to `public/gallery/` folder
2. Update the gallery page to use real images instead of placeholders (see `src/app/gallery/page.tsx`)

## Useful Commands

| Command        | What it does                    |
|----------------|----------------------------------|
| `npm run dev`  | Start development server        |
| `npm run build`| Build for production            |
| `npm run start`| Run production build locally    |
| `npm run lint` | Check code for errors           |

## Deployment

See **[DEPLOYMENT_STEPS.md](./DEPLOYMENT_STEPS.md)** for detailed deployment instructions (Vercel, Netlify, etc.).

## Tech Stack

- **Next.js 16** – React framework
- **TypeScript** – Type-safe JavaScript
- **Tailwind CSS** – Utility-first styling

## Support

For questions about the website content, contact SD Enterprise at **9417008514** or **shantideep111@gmail.com**.
