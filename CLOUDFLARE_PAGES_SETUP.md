# Cloudflare Pages Setup (Dashboard Only - No Wrangler!)

## Step 1: Go to Cloudflare Dashboard

1. Go to https://dash.cloudflare.com/
2. Login to your account
3. Click on **"Workers & Pages"** in the left sidebar
4. Click **"Create application"**
5. Click **"Pages"** tab
6. Click **"Connect to Git"**

## Step 2: Connect Your GitHub Repository

1. Select **GitHub** as your Git provider
2. Authorize Cloudflare to access your GitHub
3. Select your repository: **PrerakMathur20/portfolio**
4. Click **"Begin setup"**

## Step 3: Configure Build Settings

Use these EXACT settings:

### Project name
```
portfolio
```

### Production branch
```
main
```

### Build settings:

**Framework preset:** `Next.js (Static HTML Export)`

**Build command:**
```
npm run build
```

**Build output directory:**
```
build
```

**Root directory (advanced):**
```
/
```
(leave as default)

### Environment Variables

Click **"Add variable"** and add:

**Variable 1:**
- Name: `NEXT_PUBLIC_WEBSITE_URL`
- Value: `https://prerak.tech`

**Variable 2:**
- Name: `NEXT_PUBLIC_API_URL`
- Value: `https://api.prerak.tech`

**Node version:**
- Click on "Environment variables" again
- Add another variable:
- Name: `NODE_VERSION`
- Value: `18`

## Step 4: Deploy!

1. Click **"Save and Deploy"**
2. Wait for the build to complete (2-3 minutes)
3. Your site will be live at: `https://portfolio-xxx.pages.dev`

## Step 5: Add Custom Domain (Optional)

After deployment:

1. Go to your Pages project → **Custom domains**
2. Click **"Set up a custom domain"**
3. Enter: `prerak.tech`
4. Follow the DNS configuration steps
5. Add `www.prerak.tech` as well if needed

## Automatic Deployments

Once set up, Cloudflare will automatically deploy whenever you push to:
- **main branch** → Production deployment
- **Any other branch** → Preview deployment

No commands needed! Just `git push` and Cloudflare does the rest.

## Troubleshooting

### Build fails with "Module not found"
- Check that `NODE_VERSION` is set to `18`
- Verify build command is exactly: `npm run build`
- Verify build output directory is exactly: `build`

### Environment variables not working
- Make sure to add them in the dashboard
- They should be in the "Production" environment
- Redeploy after adding variables

### Site looks broken
- Check the build logs in Cloudflare dashboard
- Verify all 100+ files are being uploaded
- Clear browser cache and try again

## Current Status

✅ Repository is ready for Cloudflare Pages
✅ No wrangler needed
✅ Just connect via dashboard and deploy!
