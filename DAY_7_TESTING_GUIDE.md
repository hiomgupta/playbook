# Day 7: Testing & Quality Assurance

## Pre-Testing Checklist

### Environment Setup
```bash
# Clean build
rm -rf dist node_modules package-lock.json
npm install
npm run build
npm run preview  # Test production build locally
```

### Browser Testing Matrix

#### Desktop Browsers

**Chrome/Chromium (Latest)**
- [ ] Cover opens with click
- [ ] Pages flip smoothly (60 FPS)
- [ ] Page-turn sound plays
- [ ] All images load
- [ ] Spotify embeds render
- [ ] Console: Zero errors
- [ ] Lighthouse: >90 score

**Safari (Latest)**
- [ ] Cover opens with click
- [ ] Page flip animation smooth
- [ ] Audio plays correctly
- [ ] Font rendering (Caveat) smooth
- [ ] Responsive layout correct
- [ ] Spotify embeds playable

**Firefox (Latest)**
- [ ] All features functional
- [ ] No rendering issues
- [ ] Keyboard navigation works (Tab/Enter)
- [ ] Dark mode respects (if available)

**Edge (Latest - uses Chromium basis)**
- [ ] Feature parity with Chrome
- [ ] Performance comparable

#### Mobile Browsers

**iOS Safari (iPhone 13+)**
- [ ] Opens without zooming issues
- [ ] Page flips work on touch
- [ ] Audio plays on interaction
- [ ] Responsive layout stacks correctly
- [ ] Bluetooth audio works

**Chrome Mobile (Android 12+)**
- [ ] Touch interactions smooth
- [ ] All features accessible
- [ ] Proper viewport scaling
- [ ] Audio works from device speakers

### Accessibility Testing

#### Keyboard Navigation
```
1. Tab through all interactive elements
   - [ ] Cover is focused (visible outline)
   - [ ] Can open with Enter/Space
   - [ ] Can navigate away with Tab

2. Screen Reader (NVDA, JAWS, or VoiceOver)
   - [ ] Cover label reads correctly
   - [ ] Page structure announced
   - [ ] Images have alt text
   - [ ] Links and buttons identified
```

#### Color Contrast
```
- [ ] Main text on page background: 7.5:1 ratio ✓
- [ ] Burgundy accent text: 5.2:1 ratio ✓
- [ ] Light text on light background: readable ✓
```

#### Visual
```
- [ ] No flashing/strobing effects
- [ ] Motion is smooth (not jittery)
- [ ] Focus indicators visible
- [ ] Text size readable (14px+)
```

### Performance Testing

#### Lighthouse Audit (DevTools)
```
Performance:   > 90
Accessibility: > 95
Best Practices: > 90
SEO:           > 90
```

#### Load Time Metrics
```
- [ ] First Paint (FP):     < 1.5s
- [ ] Largest Contentful Paint (LCP): < 2.5s
- [ ] Cumulative Layout Shift (CLS): < 0.1
- [ ] Time to Interactive (TTI): < 3.5s
```

#### Bundle Analysis
```
- [ ] JS: ~247 KB (74.79 KB gzipped) ✓
- [ ] CSS: ~12.41 KB (2.88 KB gzipped) ✓
- [ ] Images: ~36 KB total (WEBP) ✓
- [ ] Audio: ~6.6 KB (WAV) ✓
- [ ] Total: < 120 KB gzipped ✓
```

### Responsive Design Testing

#### Breakpoints Tested
```
✓ Desktop:  1920px (largest screens)
✓ Desktop:  1280px (standard desktop)
✓ Tablet:   1024px (iPad landscape)
✓ Tablet:   768px (iPad portrait, break point)
✓ Mobile:   480px (small phones)
✓ Mobile:   360px (smallest phones)
```

#### Layout Tests at 768px
- [ ] Spread stacks vertically
- [ ] Images scale appropriately
- [ ] Text remains readable
- [ ] Touch targets > 44px
- [ ] No horizontal scrolling

### Functionality Testing Deep-Dive

#### Cover Interaction
- [ ] Hover effect: light shadow increase
- [ ] Click opens book smoothly
- [ ] "Click to open" cue visible
- [ ] Linen texture visible
- [ ] Polaroid label positioned correctly

#### Book Navigation
- [ ] Page 0: About spreads correctly
- [ ] Page 1: Chapters list complete
- [ ] Pages 2-7: All songs load
- [ ] Smooth transitions between pages
- [ ] No skipped pages

#### Page Flip Mechanics
```
For each page:
- [ ] Drag from right edge → flips left
- [ ] Drag from left edge → flips right
- [ ] Click right side → advance
- [ ] Click left side → go back
- [ ] Flip animation 600ms duration
- [ ] Shadow effects visible
```

#### Audio Behavior
```
Page Turn Sound:
- [ ] Plays on every flip
- [ ] Volume correct (70%)
- [ ] No clipping/distortion
- [ ] Responsive (no lag)

Blocks on:
- [ ] First page (About)
- [ ] Second page (Chapters)
- [ ] Songs 2-7 have full Spotify
```

#### Spotify Embeds
For each song:
- [ ] Iframe loads without error
- [ ] Player controls visible
- [ ] Play button works
- [ ] Pause button works
- [ ] Track info displays correctly
- [ ] Link opens in Spotify app

#### Images
- [ ] All 7 images load
- [ ] Aspect ratios correct
- [ ] No distortion/stretching
- [ ] Smooth rendering
- [ ] WEBP format served

### Data Validation

#### book.config.js
```
- [ ] All songs have title
- [ ] All songs have artist
- [ ] All songs have Spotify track ID (valid)
- [ ] All songs have reflection text
- [ ] All songs have WEBP image URL
- [ ] About page has artist name
- [ ] About page has portrait URL
- [ ] Chapters list complete (8 items)
```

### Error Handling

#### Console Check
```
npm run build
# Start prod server with: npm run preview
# Open in browser, inspect console:

- [ ] No errors logged
- [ ] No 404s for images
- [ ] No 404s for audio
- [ ] No CORS errors
- [ ] Warnings only from dependencies
```

#### Edge Cases
```
- [ ] Rapid page flips don't crash
- [ ] Multiple audio plays (browser handles)
- [ ] Muting browser still allows interaction
- [ ] Offline image fallback shows
- [ ] Very slow internet: show loading state (if added)
```

### Final Sign-Off Checklist

```
✓ All browsers pass testing
✓ Accessibility score > 95
✓ Performance score > 90
✓ No console errors
✓ All images optimized
✓ All content verified
✓ Responsive at all breakpoints
✓ Audio working correctly
✓ Spotify embeds playable
✓ Build succeeds without warnings
```

---

## Post-Testing: Bug Fixes

If issues found:
1. Document in this file under "Bugs Found"
2. Create issue branch: `git checkout -b fix/issue-name`
3. Fix in code
4. Rebuild: `npm run build`
5. Retest locally: `npm run preview`
6. Commit: `git add . && git commit -m "fix: issue description"`

---

**Testing Status:** Ready for Day 8 deployment
