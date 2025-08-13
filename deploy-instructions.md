# Deployment Instructions for PSA Roadmap

## Option 1: GitHub Pages (Recommended - Free)

1. **Create a new GitHub repository**:
   - Go to https://github.com/new
   - Name it `psa-roadmap`
   - Make it public or private (GitHub Pages works with both)

2. **Push the code**:
   ```bash
   cd platform-comparison-temp
   git init
   git add .
   git commit -m "Initial commit - PSA Roadmap"
   git branch -M main
   git remote add origin https://github.com/raybargas/psa-roadmap.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: main
   - Folder: / (root)
   - Save

4. **Access your site**:
   - URL will be: `https://raybargas.github.io/psa-roadmap/`
   - Takes 2-10 minutes to deploy initially

## Option 2: Netlify (Free with more features)

1. **Sign up at netlify.com**

2. **Deploy via drag & drop**:
   - Go to https://app.netlify.com/drop
   - Drag your `platform-comparison-temp` folder onto the page
   - Site deploys instantly

3. **Custom domain** (optional):
   - Add a custom domain in Site Settings → Domain management

## Option 3: Vercel (Free, great for static sites)

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Deploy**:
   ```bash
   cd platform-comparison-temp
   vercel
   ```
   - Follow prompts
   - Get instant URL

## Option 4: Azure Static Web Apps (Rev.io infrastructure)

Since Rev.io uses Azure, this might be preferred:

1. **Prerequisites**:
   - Azure account
   - Azure Static Web Apps extension for VS Code

2. **Create Static Web App**:
   ```bash
   # Using Azure CLI
   az staticwebapp create \
     --name psa-roadmap \
     --resource-group YOUR_RG \
     --source platform-comparison-temp \
     --location "East US 2" \
     --branch main \
     --app-location "/" \
     --output-location "/" \
     --login-with-github
   ```

3. **Automatic deployment** via GitHub Actions

## Option 5: Simple Web Server (Internal hosting)

1. **Using Node.js**:
   ```bash
   # Install http-server globally
   npm install -g http-server
   
   # Run from the directory
   cd platform-comparison-temp
   http-server -p 8080
   ```

2. **Using Python**:
   ```bash
   cd platform-comparison-temp
   python3 -m http.server 8080
   ```

3. **Using Docker**:
   Create `Dockerfile`:
   ```dockerfile
   FROM nginx:alpine
   COPY . /usr/share/nginx/html
   EXPOSE 80
   ```
   
   Build and run:
   ```bash
   docker build -t psa-roadmap .
   docker run -d -p 8080:80 psa-roadmap
   ```

## Security Considerations

For internal Rev.io use:

1. **Add authentication** if needed:
   - Azure AD integration for Azure Static Web Apps
   - Netlify Identity for Netlify
   - Basic auth via `.htaccess` for Apache servers

2. **Update data regularly**:
   - Set up a GitHub Action to update the data
   - Or integrate with Rev.io's API for real-time updates

3. **CORS headers** if integrating with other services

## Quick Start - GitHub Pages

The fastest way to get this live:

```bash
# IMPORTANT: This only commits the dashboard files in platform-comparison-temp
# Your custom fields work in the main repo is NOT affected
# This creates a NEW, SEPARATE repository just for the PSA Roadmap

cd platform-comparison-temp

# Initialize NEW git repo (separate from revio-psa-web)
git init
git add .
git commit -m "PSA Roadmap"
git branch -M main
git remote add origin https://github.com/raybargas/psa-roadmap.git
git push -u origin main

# Then enable GitHub Pages in repository settings
```

## Custom Domain Setup

If you want to use a custom domain like `psa-roadmap.rev.io` or `roadmap.rev.io`:

1. **GitHub Pages**:
   - Add CNAME file with your domain
   - Configure DNS: CNAME record pointing to `raybargas.github.io`

2. **Netlify/Vercel**:
   - Add domain in dashboard
   - Follow their DNS configuration guide

## Maintenance

To update the dashboard:

1. Edit the `script.js` file to update features
2. Commit and push changes
3. Site auto-updates (GitHub Pages, Netlify, Vercel)

## Support

For questions or issues, contact the Rev.io engineering team.