# Rohit Mehta - Developer Portfolio

A modern, brutalist-style developer portfolio built with React and Tailwind CSS, featuring bold typography, clean animations, and an editorial magazine aesthetic.

## 🎨 Design Features

- **Brutalist Design**: Bold typography, sharp contrasts, and geometric elements
- **Editorial Layout**: Asymmetric grids and magazine-style composition  
- **Electric Blue Accent**: High-contrast color scheme with #0066ff accent
- **Responsive Design**: Mobile-first approach with clean scaling
- **Micro-interactions**: Hover effects, transitions, and subtle animations

## 🚀 Tech Stack

- **React 18** - Modern React with hooks and functional components
- **Tailwind CSS** - Utility-first CSS framework with custom brutalist styles
- **Vite** - Fast build tool and development server
- **Lucide React** - Beautiful icon library
- **Custom CSS** - Brutalist-specific styling and animations

## 📱 Sections

1. **Hero** - Full-width headline with animated text reveal and collage-style portrait
2. **About** - Split layout with developer story and quirky skill icons
3. **Skills** - Stacked cards with hover tilt effects and technology categories
4. **Projects** - Masonry grid with hover overlays and project details
5. **Experience** - Vertical timeline with year badges and career progression
6. **Contact** - Bold call-to-action with contact form and social links

## 🛠️ Installation & Setup

```bash
# Clone the repository
git clone <repository-url>
cd rohit-portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎯 Key Features

### Brutalist Styling
- Custom CSS classes for consistent brutalist aesthetic
- Bold borders, sharp shadows, and high contrast
- Oversized typography with Inter font family
- Electric blue (#0066ff) and neon orange (#ff4500) accents

### Interactive Elements
- Hover effects on cards and buttons with transform animations
- Animated text reveals in hero section
- Smooth transitions and micro-interactions
- Responsive navigation with mobile menu

### Performance Optimized
- Lazy loading for images
- Optimized bundle size with Vite
- Clean, semantic HTML structure
- Accessible design patterns

## 📂 Project Structure

```
rohit-portfolio/
├── public/
├── src/
│   ├── assets/          # Images and static assets
│   ├── components/      # React components
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Contact.jsx
│   │   └── Navigation.jsx
│   ├── App.jsx          # Main app component
│   ├── App.css          # Custom brutalist styles
│   └── main.jsx         # Entry point
├── index.html
├── package.json
└── README.md
```

## 🎨 Customization

### Colors
Update the CSS custom properties in `App.css`:
```css
:root {
  --brutalist-black: #000000;
  --brutalist-white: #ffffff;
  --brutalist-accent: #0066ff;
  --brutalist-accent-alt: #ff4500;
}
```

### Content
- Update personal information in each component
- Replace placeholder images in `src/assets/`
- Modify project data in `Projects.jsx`
- Update experience timeline in `Experience.jsx`

### Styling
- Brutalist classes are defined in `App.css`
- Tailwind utilities can be used alongside custom classes
- Responsive breakpoints follow Tailwind's system

## 📱 Responsive Design

- **Mobile**: Single column layout, stacked navigation
- **Tablet**: Adjusted grid layouts, optimized spacing
- **Desktop**: Full asymmetric grid system, hover interactions

## 🚀 Deployment

The portfolio is ready for deployment on:
- **Vercel** (recommended for React apps)
- **Netlify** 
- **GitHub Pages**
- **Any static hosting service**

Simply run `npm run build` and deploy the `dist` folder.

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you make improvements, pull requests are welcome!

---

**Built with precision and passion** ⚡

