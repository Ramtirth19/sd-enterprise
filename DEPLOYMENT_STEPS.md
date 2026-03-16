# Deployment Steps for SD Enterprises Website

This guide walks you through deploying the SD Enterprises website to the internet. Choose one of the options below.

---

## Option 1: Deploy to Vercel (Recommended for Beginners)

Vercel is free and works great with Next.js.

### Step 1: Create a Vercel Account

1. Go to [vercel.com](https://vercel.com)
2. Click **Sign Up**
3. Sign up with **GitHub** (easiest) or email

### Step 2: Push Your Code to GitHub

1. Create a **GitHub** account at [github.com](https://github.com) if you don't have one
2. Install Git: [git-scm.com/downloads](https://git-scm.com/downloads)
3. Open terminal in your project folder and run:

   ```bash
   cd sd-enterprise
   git init
   git add .
   git commit -m "Initial commit - SD Enterprises website"
   ```

4. On GitHub, click **New Repository**, name it `sd-enterprise`, and create it
5. Connect and push:

   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/sd-enterprise.git
   git branch -M main
   git push -u origin main
   ```

   (Replace `YOUR_USERNAME` with your GitHub username)

### Step 3: Deploy on Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Click **Import** next to your `sd-enterprise` repository
3. Click **Deploy** (keep default settings)
4. Wait 1–2 minutes. Your site will be live at `https://sd-enterprise-xxx.vercel.app`

### Step 4: Add Environment Variable (Contact Form)

1. In Vercel, go to your project → **Settings** → **Environment Variables**
2. Add:
   - **Name:** `NEXT_PUBLIC_FORMSPREE_ID`
   - **Value:** Your Formspree form ID (from [formspree.io](https://formspree.io))
3. Go to **Deployments** → click **⋯** on latest → **Redeploy**

### Step 5: Custom Domain (Optional)

1. In Vercel project → **Settings** → **Domains**
2. Add your domain (e.g. `sdenterprise.in`)
3. Follow the DNS instructions from your domain provider

---

## Option 2: Deploy to Netlify

### Step 1: Create Netlify Account

1. Go to [netlify.com](https://netlify.com)
2. Sign up (GitHub recommended)

### Step 2: Deploy

1. Click **Add new site** → **Import an existing project**
2. Connect to GitHub and select your `sd-enterprise` repo
3. Build settings (Netlify usually detects them):
   - **Build command:** `npm run build`
   - **Publish directory:** `.next` (or leave default; Netlify may use `out` for static export)
4. Click **Deploy site**

**Note:** Next.js on Netlify may require the Netlify Next.js plugin. If the default setup fails, check [Netlify Next.js docs](https://docs.netlify.com/frameworks/next-js/).

### Step 3: Environment Variables

1. **Site settings** → **Environment variables**
2. Add `NEXT_PUBLIC_FORMSPREE_ID` with your Formspree form ID

---

## Option 3: Build and Run on Your Own Server (VPS)

If you have a Linux server (DigitalOcean, AWS, etc.):

### Step 1: Build the Project

On your computer:

```bash
cd sd-enterprise
npm install
npm run build
```

### Step 2: Copy Files to Server

Copy the entire project folder to your server (including `node_modules`, `.next`, `package.json`).

### Step 3: Run on Server

```bash
cd sd-enterprise
npm run start
```

The site runs on port 3000. Use **PM2** or **systemd** to keep it running and restart on reboot.

### Step 4: Use Nginx as Reverse Proxy (Optional)

Example Nginx config:

```nginx
server {
    listen 80;
    server_name yourdomain.com;
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
    }
}
```

---

## Pre-Deployment Checklist

Before deploying, make sure:

- [ ] `npm run build` runs without errors
- [ ] Contact form: Formspree account created and form ID added to env
- [ ] Replace gallery placeholder images with real project photos
- [ ] Test the site locally (`npm run dev`)

---

## After Deployment

1. **Test the live site** – Click all links, test the contact form, try on mobile
2. **Set up Formspree** – Ensure form submissions go to `shantideep111@gmail.com`
3. **Add real photos** – Update the gallery with actual project images
4. **SEO** – Consider adding the site to Google Search Console

---

## Troubleshooting

| Problem | Solution |
|--------|----------|
| Build fails | Run `npm run build` locally and fix any errors shown |
| Contact form doesn't work | Add `NEXT_PUBLIC_FORMSPREE_ID` in your hosting platform's environment variables |
| 404 on refresh | Ensure your host supports Next.js (Vercel/Netlify do; static hosts may need extra config) |
| Images not loading | Put images in `public/` folder and reference as `/image-name.jpg` |

---

## Need Help?

- **Vercel docs:** [vercel.com/docs](https://vercel.com/docs)
- **Next.js deployment:** [nextjs.org/docs/deployment](https://nextjs.org/docs/deployment)
