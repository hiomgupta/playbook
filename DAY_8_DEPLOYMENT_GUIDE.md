# Day 8: Deployment to Vercel

## Pre-Deployment Checklist

### Code Quality
```
- [ ] No console errors in production build
- [ ] No unused imports or variables
- [ ] No hardcoded development URLs
- [ ] All images use relative paths (/images/...)
- [ ] Audio file accessible (/audio/...)
- [ ] .gitignore configured properly
```

### Build Verification
```bash
# Final build
npm run build

# Expected output:
# dist/index.html                   0.45 kB │ gzip:  0.29 kB
# dist/assets/index-[hash].css     ~12 kB  │ gzip:  ~3 kB
# dist/assets/index-[hash].js      ~247 kB │ gzip:  ~75 kB
# ✓ built in ~300ms
```

Requirements met:
- [ ] Build succeeds
- [ ] Bundle size acceptable
- [ ] No errors or critical warnings

### Git Repository Setup

```bash
# Verify git is clean
git status
# Should show: "nothing to commit, working tree clean"

# Make sure main branch is up to date
git log --oneline -5
# Shows: recent commits with Day 5 updates
```

## Deployment Steps

### Option 1: Deploy via Vercel CLI (Recommended)

**Prerequisites:**
- Vercel account created (vercel.com)
- Vercel CLI installed: `npm i -g vercel`

**Steps:**
```bash
# 1. Login to Vercel
vercel login

# 2. Deploy (from project root)
vercel --prod

# 3. Follow prompts:
#    - Link to GitHub account? (yes)
#    - Import project from Git? (yes)
#    - Select repository: hiomgupta/playbook
#    - Vercel will create .vercel folder
``

# 4. Wait for deployment to complete
# Expected output:
# Deployment complete! Visit: https://playbook-[random].vercel.app

# 5. Visit URL and verify all features work
```

### Option 2: Deploy via Vercel Web Interface

**Steps:**
1. Go to vercel.com
2. Sign in with GitHub
3. Click "Add New Project"
4. Import repository: `hiomgupta/playbook`
5. Configure:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Click "Deploy"
7. Wait 1-2 minutes for deployment

### Option 3: Setup Continuous Deployment

**GitHub Integration (One-time setup):**
```bash
# After connecting GitHub account to Vercel:
# - Go to vercel.com/dashboard
# - Connect GitHub
# - Allow Vercel access to playbook repo
```

**From now on:**
- Every push to `main` → automatic deploy
- Branch preview for PRs automatically created

## Post-Deployment Verification

### Live Site Testing

Open https://playbook-[domain].vercel.app and verify:

```
Cover & Navigation:
- [ ] Cover renders with linen texture
- [ ] Click to open works
- [ ] All pages load
- [ ] Page flips smooth

Page Content:
- [ ] About page: portrait + bio visible
- [ ] Chapters: complete list shows
- [ ] Songs: 6 pages with Spotify
- [ ] Images: all load correctly

Interactive Features:
- [ ] Page-turn sound plays
- [ ] Spotify embeds functional
- [ ] Play button works in embed
- [ ] All text readable (Caveat font)

Technical:
- [ ] No 404 errors (check DevTools)
- [ ] No CORS errors
- [ ] Console: clean (no errors)
- [ ] Responsive: test on mobile
```

### Performance Check (Live)

```bash
# Option 1: Lighthouse (built into Chrome DevTools)
1. Open site in Chrome
2. Ctrl+Shift+I (DevTools)
3. Lighthouse tab
4. Click "Analyze page load"
5. Verify: Performance > 90, Accessibility > 95

# Option 2: PageSpeed Insights
1. Go to pagespeed.web.dev
2. Paste URL
3. Check Mobile & Desktop scores
```

### DNS & Custom Domain (Optional)

**If using custom domain (e.g., playbook.com):**

1. Go to vercel.com dashboard
2. Select project
3. Settings > Domains
4. Add custom domain
5. Update DNS with your registrar
6. Vercel will verify automatically

**Without custom domain:**
- Use Vercel-provided domain
- No additional setup needed

## Monitoring & Maintenance

### Vercel Analytics
```
Access via: vercel.com/dashboard/[project]
Monitor:
- [ ] Deployment status
- [ ] Build duration trends
- [ ] Error logs (if any)
- [ ] Traffic patterns
```

### Performance Monitoring
```
Vercel includes:
- Real Web Vitals data
- Core Web Vitals tracking
- Lighthouse runs (weekly)
```

## Rollback Procedure (If Issues Found)

```bash
# If live site has critical issue:
1. Identify previous good deployment:
   vercel ls  # List all deployments

2. Promote previous deployment:
   vercel promote [deployment-id]

3. Or redeploy from git:
   git revert [bad-commit-hash]
   git push origin main  # Triggers auto-deploy if connected
```

## Success Criteria

Live site is ready when:

✅ **Functionality**
- All 8 pages load correctly
- Page flips work smoothly
- Audio plays on interactions
- Spotify embeds functional

✅ **Performance**
- Lighthouse: >90% all categories
- First page load: <3s
- Bundle size: <125 KB gzipped

✅ **Accessibility**
- Keyboard navigation works
- Screen reader compatible
- Color contrast passes
- No 404s or errors

✅ **Content**
- All songs have correct data
- Artist bio complete
- Images all display
- Reflections visible

✅ **Browser Support**
- Chrome/Edge/Safari: ✓
- Firefox: ✓
- Mobile browsers: ✓

## Celebration! 🎉

If all criteria met:
- Project is live and accessible
- Share URL with others: `https://playbook-[domain].vercel.app`
- Monitor analytics over next week
- Collect user feedback

---

**Deployment Status:** Ready for Day 8

### Quick Reference

```graphql
Project Info:
  Name: playbook
  Type: React + Vite static site
  Size: 77 KB gzipped
  Hosting: Vercel (free tier sufficient)
  Domain: [auto-generated].vercel.app

Key Files:
  Build output: dist/
  Source: src/
  Config: vite.config.js, package.json

Deployment Command:
  vercel --prod
```

---

**Created:** Day 8, Ready for deployment
