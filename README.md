# SHIRA AI - Premium One-Page Company Website

A modern, AI-focused digital services company website built with React, featuring dark/light theme toggle, smooth animations, and interactive 3D elements.

## 🎨 Features

### Design & UI
- **Dark Mode First**: Premium dark theme with light mode toggle
- **Modern Design System**: Sharp-edged buttons, gradient accents, high contrast
- **3D Interactive Element**: Subtle Spline 3D sphere in hero section
- **Smooth Animations**: Fade-in-up scroll animations, hover effects, transitions
- **Responsive Design**: Mobile-first approach, fully responsive across all devices
- **Custom Typography**: Inter for body text, JetBrains Mono for tech accents

### Sections
1. **Hero Section**: Eye-catching headline with 3D element and dual CTAs
2. **About Section**: Mission-driven content explaining SHIRA AI's purpose
3. **Services Section**: 8 comprehensive digital services with icons
4. **Why Choose Section**: 6 key differentiators with numbered cards
5. **Impact Section**: Visual showcase of AI, Career, and Design focus
6. **Contact Section**: Full contact information with functional form
7. **Footer**: Comprehensive footer with quick links and branding

### Technical Features
- One-page scroll navigation
- Theme persistence
- Smooth scroll behavior
- Form validation (ready for backend integration)
- Toast notifications (Sonner)
- Intersection Observer for scroll animations

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern React with hooks
- **React Router v7** - Client-side routing
- **Tailwind CSS** - Utility-first styling
- **Shadcn/UI** - Pre-built accessible components
- **Lucide React** - Modern icon library
- **Spline** - 3D interactive elements
- **Sonner** - Toast notifications

### Backend (Ready for Integration)
- **FastAPI** - Python-based REST API
- **MongoDB** - NoSQL database with Motor async driver
- **Pydantic** - Data validation

## 📁 Project Structure

```
/app
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/           # Shadcn UI components
│   │   │   ├── Navbar.jsx    # Navigation with theme toggle
│   │   │   ├── Hero.jsx      # Hero with 3D element
│   │   │   ├── About.jsx     # About section
│   │   │   ├── Services.jsx  # Services grid
│   │   │   ├── WhyChoose.jsx # Why choose us section
│   │   │   ├── Impact.jsx    # Impact showcase
│   │   │   ├── Contact.jsx   # Contact form
│   │   │   └── Footer.jsx    # Footer
│   │   ├── pages/
│   │   │   └── Home.jsx      # Main page component
│   │   ├── styles/
│   │   │   └── shira-theme.css # Custom theme styles
│   │   ├── mock.js           # Mock data
│   │   ├── App.js            # Root component
│   │   └── index.css         # Global styles
│   └── public/               # Static assets
├── backend/
│   ├── server.py             # FastAPI server
│   └── requirements.txt      # Python dependencies
└── LOGO_INSTRUCTIONS.md      # Logo integration guide
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and Yarn
- Python 3.9+
- MongoDB

### Installation

Already installed! The application is running on:
- Frontend: http://localhost:3000
- Backend: http://localhost:8001

### Commands

```bash
# Restart frontend
sudo supervisorctl restart frontend

# Restart backend
sudo supervisorctl restart backend

# View logs
tail -f /var/log/supervisor/frontend.out.log
tail -f /var/log/supervisor/backend.out.log
```

## 🎨 Design System

### Colors

**Dark Theme (Default)**
- Background: #000000, #0a0a0a, #121212
- Text: #FFFFFF, rgba(255,255,255,0.85), #888888
- Brand Blue: #2563eb
- Brand Electric: #8b5cf6

**Light Theme**
- Background: #FFFFFF, #F8F9FA, #F1F3F5
- Text: #000000, rgba(0,0,0,0.85), #6B7280
- Same brand colors for consistency

### Typography Scale
- Display Huge: 40-72px (responsive)
- Display Large: 32-56px
- Display Medium: 24-40px
- Headings: 20-36px
- Body: 16-20px

### Spacing System
- Large: 60px
- Extra Large: 100px
- Section: 100px vertical padding

## 🔧 Customization

### Add Your Logo
See `/app/LOGO_INSTRUCTIONS.md` for detailed instructions on adding your custom logo.

### Modify Colors
Edit `/app/frontend/src/styles/shira-theme.css`:

```css
:root {
  --brand-blue: #2563eb;        /* Your primary color */
  --brand-electric: #8b5cf6;    /* Your accent color */
}
```

### Update Content
All content is in `/app/frontend/src/mock.js`:
- navLinks - Navigation items
- services - 8 service offerings
- whyChoose - 6 differentiators
- contactInfo - Contact details
- impactStats - Impact cards

### Modify Services
Edit the services array in mock.js. Available Lucide icons:
Globe, FileText, Linkedin, Palette, MapPin, Users, GraduationCap, Sparkles, Brain, Heart, Zap, Shield, TrendingUp

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1199px
- Desktop: 1200px+

## ⚡ Performance

- Lazy loading for images
- Optimized animations with CSS transforms
- Efficient React rendering with proper keys
- Smooth 60fps animations

## 🔒 Current State

**Frontend-Only Implementation (MOCK)**
- All functionality is client-side with mock data
- Contact form shows success toast but doesn't submit to backend
- Data is stored in mock.js file
- Ready for backend integration

## 🔌 Backend Integration (Next Steps)

When ready to integrate backend:

1. **Contact Form API**
```python
# /app/backend/server.py
@api_router.post("/contact")
async def submit_contact(data: ContactFormData):
    # Save to MongoDB
    # Send email notification
    return {"success": True, "message": "Message received"}
```

2. **Update Frontend**
```javascript
// /app/frontend/src/components/Contact.jsx
const response = await axios.post(`${API}/contact`, formData);
```

## 📞 Contact Information

- Email: shivamraj.0110@gmail.com
- Phone: +91 8210173404
- Location: New Delhi, India

## 📝 Notes

- Theme preference persists in session
- Smooth scroll navigation works across all sections
- Form validation is client-side (add backend validation when integrating)
- All icons are from Lucide React (no emoji characters)
- 3D Spline element is interactive (subtle, not overdone)

## 🎯 Best Practices Followed

- ✅ Semantic HTML structure
- ✅ Accessible components (Shadcn/UI based)
- ✅ Responsive design principles
- ✅ Performance optimizations
- ✅ Clean component architecture
- ✅ Consistent design system
- ✅ No fake testimonials or client logos
- ✅ Professional and honest messaging
- ✅ Sharp-edged buttons (0px border-radius)
- ✅ High contrast for accessibility

## 🚀 Ready for Pitch!

This website is designed to impress from the first glance:
- Professional premium aesthetic
- AI-focused branding
- Clear value proposition
- Comprehensive service showcase
- Strong calls-to-action
- Complete contact information

---

**Built with ❤️ by SHIRA AI**
*Powered by Artificial Intelligence*
