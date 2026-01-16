# Portfolio Deployment Guide

This guide will walk you through deploying your portfolio website with your Namecheap domain using **Vercel** (recommended) or alternative hosting platforms.

## 🚀 Recommended: Vercel Deployment

Vercel is the best choice for Vite/React applications because:
- ✅ Automatic builds and deployments from Git
- ✅ CDN with global edge network
- ✅ Free SSL certificates
- ✅ Zero-config setup for Vite projects
- ✅ Easy custom domain integration
- ✅ Automatic preview deployments for every Git push

### Step 1: Prepare Your Repository

1. **Create a GitHub repository** (if you haven't already):
   ```bash
   # Initialize git (if not already done)
   git init
   
   # Add all files
   git add .
   
   # Commit your changes
   git commit -m "Initial commit"
   
   # Create a new repository on GitHub, then:
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

2. **Ensure your build works locally**:
   ```bash
   npm run build
   npm run preview
   ```
   Visit the preview URL to confirm everything works.

### Step 2: Deploy to Vercel

1. **Sign up for Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up with your GitHub account (recommended)

2. **Import your project**:
   - Click "Add New" → "Project"
   - Select your portfolio repository from GitHub
   - Vercel will auto-detect it's a Vite project

3. **Configure build settings** (should be auto-detected):
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

4. **Deploy**:
   - Click "Deploy"
   - Wait 1-2 minutes for the build to complete
   - You'll get a URL like `your-project.vercel.app`

### Step 3: Connect Your Namecheap Domain

#### A. Get Nameservers from Vercel

1. In your Vercel project, go to **Settings** → **Domains**
2. Enter your domain (e.g., `yourdomain.com`)
3. Vercel will provide option to either:
   - Use Vercel nameservers (recommended)
   - Add DNS records manually

#### B. Option 1: Use Vercel Nameservers (Recommended)

1. **In Vercel**:
   - Choose "Use Vercel Nameservers"
   - Copy the nameserver addresses (e.g., `ns1.vercel-dns.com`, `ns2.vercel-dns.com`)

2. **In Namecheap**:
   - Log into your Namecheap account
   - Go to "Domain List" → Select your domain
   - Click "Manage"
   - Under "Nameservers", select "Custom DNS"
   - Enter Vercel's nameservers
   - Save changes

3. **Wait for DNS propagation** (can take 1-48 hours, usually under 1 hour)

#### C. Option 2: Add DNS Records Manually

1. **In Vercel**:
   - Note the DNS records Vercel provides (usually A and CNAME records)

2. **In Namecheap**:
   - Go to "Domain List" → Select your domain → "Manage"
   - Click "Advanced DNS"
   - Add the A records:
     - **Type**: A Record
     - **Host**: `@`
     - **Value**: Vercel's IP (e.g., `76.76.21.21`)
     - **TTL**: Automatic
   - Add CNAME record for www:
     - **Type**: CNAME Record
     - **Host**: `www`
     - **Value**: `cname.vercel-dns.com`
     - **TTL**: Automatic

3. **Verify in Vercel**:
   - Return to Vercel → Domains
   - Click "Verify" after DNS records are added
   - Once verified, SSL certificate will be automatically issued

### Step 4: Set Up Automatic Deployments

With Vercel + GitHub:
- Every push to `main` branch → Auto-deploy to production
- Every pull request → Creates a preview deployment with unique URL
- No manual intervention needed!

### Step 5: Optional Enhancements

1. **Environment Variables** (if needed later):
   - Go to Vercel → Settings → Environment Variables
   - Add any necessary variables

2. **Custom Build Command** (if needed):
   - Settings → Build & Development Settings
   - Modify build command if you have custom requirements

3. **Analytics**:
   - Vercel provides free analytics
   - Enable in Settings → Analytics

---

## 🎯 Alternative Options

### Option 2: Netlify

Similar to Vercel with slightly different workflow:

1. **Deploy to Netlify**:
   - Sign up at [netlify.com](https://netlify.com)
   - Connect your GitHub repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`

2. **Add Custom Domain**:
   - Go to Domain Settings → Add custom domain
   - Follow similar DNS setup with Namecheap

### Option 3: GitHub Pages

Free hosting directly from GitHub:

1. **Install gh-pages**:
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**:
   ```json
   {
     "homepage": "https://yourusername.github.io/your-repo-name",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Deploy**:
   ```bash
   npm run deploy
   ```

4. **Custom Domain**:
   - Add a `CNAME` file in `public/` with your domain
   - Configure DNS in Namecheap to point to GitHub Pages

### Option 4: CloudFlare Pages

1. **Sign up at CloudFlare Pages**
2. Connect your GitHub repository
3. Build settings:
   - Build command: `npm run build`
   - Build output directory: `dist`
4. Add your domain in CloudFlare (they also offer domain registration with easy integration)

---

## 🔧 Maintenance Workflow

Once deployed, here's how you'll maintain your site:

### Making Updates

1. **Make changes locally**:
   ```bash
   # Edit your code
   # Test locally
   npm run dev
   ```

2. **Commit and push**:
   ```bash
   git add .
   git commit -m "Description of changes"
   git push
   ```

3. **Automatic deployment**:
   - Vercel/Netlify automatically detects the push
   - Builds and deploys within 1-2 minutes
   - Your live site is updated!

### Monitoring

- Check build logs in Vercel/Netlify dashboard
- Monitor site performance and uptime
- View analytics to see visitor traffic

### Rollback (if needed)

- In Vercel: Go to Deployments → Click on a previous successful deployment → "Promote to Production"

---

## ✅ Deployment Checklist

Before going live:

- [ ] Test build locally (`npm run build && npm run preview`)
- [ ] Check all links work
- [ ] Verify images load correctly
- [ ] Test on different browsers
- [ ] Check mobile responsiveness
- [ ] Ensure meta tags are set for SEO (in `index.html`)
- [ ] Add favicon
- [ ] Test all interactive features
- [ ] Set up Google Analytics (optional)
- [ ] Create a 404 page (optional)

---

## 🆘 Troubleshooting

### Build fails on Vercel
- Check build logs for errors
- Ensure `npm run build` works locally
- Verify all dependencies are in `package.json` (not just `devDependencies`)

### Domain not working
- DNS changes can take up to 48 hours
- Use [DNS Checker](https://dnschecker.org) to verify propagation
- Clear browser cache
- Try accessing in incognito mode

### Site shows 404
- Ensure output directory is set to `dist`
- Check that `vite.config.ts` doesn't have conflicting base path settings

### CSS/Images not loading
- Check asset paths in your code
- Ensure public assets are in the `public/` directory
- Verify build output includes all necessary files

---

## 📚 Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Namecheap DNS Settings Guide](https://www.namecheap.com/support/knowledgebase/article.aspx/767/10/how-to-change-dns-for-a-domain/)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)

---

## 💡 Recommended: Vercel Summary

For your portfolio, I strongly recommend **Vercel** because:
1. **Zero configuration** - Works out of the box with Vite
2. **Fast deployments** - Usually under 1 minute
3. **Automatic HTTPS** - Free SSL certificates
4. **Global CDN** - Fast loading worldwide
5. **Preview deployments** - Test changes before going live
6. **Free tier** - More than enough for a portfolio site
7. **Git integration** - Push to deploy workflow

Good luck with your deployment! 🚀
