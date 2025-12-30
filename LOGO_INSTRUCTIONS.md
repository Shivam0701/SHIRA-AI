# SHIRA AI Logo Instructions

## Current Logo Implementation

The website currently displays "SHIRA AI" as a text logo with gradient styling (blue to purple).

## How to Add Your Custom Logo

To replace the text logo with your actual logo image:

### Option 1: SVG Format (Recommended)
1. Convert your logo PDF to SVG format
2. Save it as `/app/frontend/public/logo.svg`
3. Update the Navbar.jsx file:

```jsx
// Replace this section in /app/frontend/src/components/Navbar.jsx (around line 59-72):

<div
  style={{
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    cursor: 'pointer',
  }}
  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
>
  <img 
    src="/logo.svg" 
    alt="SHIRA AI Logo" 
    style={{ 
      height: '40px',
      objectFit: 'contain' 
    }} 
  />
</div>
```

### Option 2: PNG Format
1. Convert your logo PDF to PNG format (transparent background recommended)
2. Save it as `/app/frontend/public/logo.png`
3. Update the Navbar.jsx file with:

```jsx
<img 
  src="/logo.png" 
  alt="SHIRA AI Logo" 
  style={{ 
    height: '40px',
    objectFit: 'contain' 
  }} 
/>
```

### Update Footer Logo
Also update the footer in `/app/frontend/src/components/Footer.jsx` (around line 27-38) with the same logo implementation.

## Logo Specifications

- **Recommended Height**: 40px (navbar), 32px (footer)
- **Format**: SVG (vector) or PNG with transparent background
- **Color Mode**: Logo should work well on both dark and light backgrounds
- **File Location**: `/app/frontend/public/` directory

## Convert PDF to SVG/PNG

You can use online tools like:
- https://cloudconvert.com/pdf-to-svg
- https://convertio.co/pdf-svg/
- Adobe Illustrator or Inkscape for manual conversion

After adding the logo file, restart the frontend:
```bash
sudo supervisorctl restart frontend
```
