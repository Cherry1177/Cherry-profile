# Free Hosting Options for Your Portfolio

Here are the best **FREE** ways to host your portfolio website and add it to your CV:

## 🎯 Option 1: GitHub Pages (RECOMMENDED - Most Professional)

**Why it's great for your CV:**
- Shows you know Git/GitHub (important for developers!)
- Professional URL: `yourusername.github.io/portfolio`
- Free forever
- Easy to update

### Steps:

1. **Create a GitHub account** (if you don't have one): https://github.com

2. **Create a new repository:**
   - Go to GitHub → Click "+" → "New repository"
   - Name it: `portfolio` or `profile` or `yourname-portfolio`
   - Make it **Public**
   - Don't initialize with README
   - Click "Create repository"

3. **Upload your files:**
   
   **Option A: Using GitHub Website (Easiest)**
   - In your new repository, click "uploading an existing file"
   - Drag and drop all your files: `index.html`, `styles.css`, `script.js`, `profile.jpg`
   - Click "Commit changes"

   **Option B: Using Git (Command Line)**
   ```bash
   cd /Users/cherry/Profile
   git init
   git add .
   git commit -m "Initial portfolio website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```

4. **Enable GitHub Pages:**
   - Go to your repository → Settings → Pages
   - Under "Source", select "Deploy from a branch"
   - Select branch: `main`
   - Select folder: `/ (root)`
   - Click "Save"
   - Wait 1-2 minutes

5. **Your site will be live at:**
   `https://YOUR_USERNAME.github.io/portfolio/`

---

## 🚀 Option 2: Netlify (Easiest - Drag & Drop)

**Why it's great:**
- Super easy (just drag and drop!)
- Free custom domain option
- Automatic HTTPS
- Fast CDN

### Steps:

1. **Go to:** https://www.netlify.com
2. **Sign up** (free) - can use GitHub account
3. **Drag and drop** your entire `Profile` folder onto Netlify
4. **Your site is live instantly!**
5. **Get your URL:** `https://random-name-123.netlify.app`
6. **Optional:** Change site name in Site settings → Change site name

---

## ⚡ Option 3: Vercel (Great for Developers)

**Why it's great:**
- Very fast
- Great for developers
- Free custom domain
- Easy updates via Git

### Steps:

1. **Go to:** https://vercel.com
2. **Sign up** (free) - can use GitHub
3. **Click "Add New Project"**
4. **Import your GitHub repository** (if you uploaded to GitHub)
   OR
   **Drag and drop** your folder
5. **Deploy!** Your site is live in seconds
6. **Get your URL:** `https://your-project.vercel.app`

---

## 📱 Option 4: Cloudflare Pages (Fast & Free)

**Why it's great:**
- Very fast global CDN
- Free forever
- Easy setup

### Steps:

1. **Go to:** https://pages.cloudflare.com
2. **Sign up** (free)
3. **Create a project**
4. **Upload your files** or connect GitHub
5. **Deploy!**

---

## 📝 How to Add to Your CV

Once your site is live, add it to your CV like this:

### In Contact Section:
```
Portfolio: https://yourusername.github.io/portfolio
```

### Or as a separate section:
```
PORTFOLIO
https://yourusername.github.io/portfolio
```

### Pro Tip: Add a QR Code!
- Generate a QR code at: https://www.qr-code-generator.com
- Add it to your CV so recruiters can scan it with their phone!

---

## 🔧 Quick Setup Script (GitHub Pages)

If you want to use GitHub Pages, I can help you set it up with Git commands. Just let me know your GitHub username!

---

## ✅ Checklist Before Deploying

- [ ] Profile image is working (`profile.jpg` or your image file)
- [ ] Update GitHub link in contact section with your real GitHub URL
- [ ] Test all links work
- [ ] Test on mobile (resize browser)
- [ ] Check contact form works
- [ ] Make sure all files are in the same folder

---

## 🎨 Custom Domain (Optional - Still Free!)

If you want a custom domain later (like `yourname.com`):
- **GitHub Pages:** Free, just add CNAME file
- **Netlify/Vercel:** Free custom domain support
- You only pay for the domain name (~$10-15/year from Namecheap, Google Domains, etc.)

---

## Need Help?

If you get stuck on any step, let me know and I can help you through it!

