# OPUS Consulting Website

A professional consulting website built with Next.js, showcasing OPUS Consulting's strategic services across public sector, technology, and investment management domains.

## 🚀 Features

### Professional Website
- **Static Generation**: Fast loading times with Next.js static export
- **SEO Optimized**: Proper metadata and Open Graph tags for search engines
- **Responsive Design**: Mobile-first approach with hamburger menu and desktop navigation
- **Modern UI**: Clean, professional design with smooth animations

### Technical Excellence
- **TypeScript**: Full type safety throughout the application
- **GSAP Animations**: Smooth, performant animations with ScrollTrigger
- **Accessibility**: Comprehensive ARIA support and keyboard navigation
- **Performance Optimized**: Static generation for optimal loading speeds

### Design System
- **Professional Layout**: Clean, corporate design suitable for consulting
- **Responsive Breakpoints**: Optimized for all device sizes
- **High Contrast Support**: Accessibility-first design principles
- **Reduced Motion**: Respects user preferences for motion

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router and Static Export
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom CSS
- **Animations**: GSAP with ScrollTrigger
- **UI Components**: Custom components with MUI integration
- **Deployment**: Static website ready for any hosting service

## 📁 Project Structure

```
src/
├── components/
│   ├── Navigation/          # Navigation system components
│   │   ├── Header.tsx       # Main header component
│   │   ├── HamburgerMenu.tsx # Mobile menu button
│   │   ├── NavigationMenu.tsx # Mobile navigation
│   │   ├── MegaMenu.tsx     # Desktop mega-menu
│   │   ├── NavigationStateManager.ts # State management
│   │   └── AriaStateManager.ts # Accessibility management
│   ├── Hero/               # Hero section components
│   │   └── HeroSection.tsx # Main hero section
│   ├── Search/             # Search functionality
│   │   └── SearchInterface.tsx # Advanced search component
│   ├── Error/              # Error handling
│   │   └── NavigationErrorBoundary.ts
│   └── Layout/             # Layout components
│       └── AppLayout.tsx   # Main app layout
├── styles/                 # CSS styles
│   ├── navigation.css      # Navigation styles
│   ├── hero.css           # Hero section styles
│   └── search.css         # Search interface styles
└── app/                   # Next.js app directory
    └── page.tsx           # Main page
```

## 🎯 Navigation Features

### Desktop Navigation
- **Horizontal Menu**: Clean, professional navigation bar
- **Mega-Menus**: Multi-column dropdown menus with organized content
- **Search Integration**: Advanced search with autocomplete
- **Hover Effects**: Smooth transitions and visual feedback

### Mobile Navigation
- **Hamburger Menu**: Animated hamburger button with smooth transitions
- **Full-Screen Overlay**: Immersive mobile navigation experience
- **Touch Optimized**: 44px minimum touch targets
- **Swipe Gestures**: Natural mobile interactions

### Accessibility Features
- **ARIA Support**: Comprehensive ARIA landmarks and attributes
- **Keyboard Navigation**: Full keyboard support with focus management
- **Screen Reader**: Optimized for screen readers
- **Focus Trapping**: Proper focus management in modals
- **High Contrast**: Support for high contrast mode

## 🎨 Animation System

### GSAP Integration
- **ScrollTrigger**: Scroll-based animations
- **Timeline Animations**: Coordinated animation sequences
- **Performance Optimized**: GPU-accelerated transforms
- **Reduced Motion**: Respects user preferences

### CSS Animations
- **Custom Properties**: CSS variables for state management
- **Smooth Transitions**: Cubic-bezier easing functions
- **Staggered Animations**: Sequential element animations
- **Transform-Based**: Hardware-accelerated animations

## 📊 Performance Optimization

### Static Generation Benefits
- **Fast Loading**: Pre-generated static pages for optimal performance
- **SEO Friendly**: Server-side rendering benefits for search engines
- **CDN Ready**: Static files can be served from any CDN
- **Cost Effective**: No server costs for hosting

### Optimization Features
- **Code Splitting**: Automatic code splitting with Next.js
- **Image Optimization**: Next.js Image component integration
- **CSS Optimization**: Critical CSS inlining
- **JavaScript Optimization**: Tree shaking and minification

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd opus-consulting
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
# Build static website
npm run build

# Export static files
npm run export
```

The static files will be generated in the `out` directory, ready for deployment to any static hosting service.

## 🚀 Deployment

This website is configured for static export and can be deployed to:

- **Vercel**: Automatic deployment from Git
- **Netlify**: Drag and drop the `out` folder
- **GitHub Pages**: Upload the `out` folder contents
- **AWS S3**: Upload the `out` folder contents
- **Any static hosting service**

### Deployment Steps

1. **Build the website**:
   ```bash
   npm run build
   npm run export
   ```

2. **Upload the `out` folder** to your hosting service

3. **Configure your domain** to point to the hosting service

## 🎯 Navigation Structure

The navigation system includes the following sections:

### Our Company
- **About Us**: Company overview, history, leadership
- **Our Team**: Expert consultants, advisory board, global network
- **Our Vision**: Mission statement, strategic goals, sustainability

### Services
- **Public Sector**: Government consulting, policy development, administration
- **Technology & IT**: Digital transformation, IT strategy, cybersecurity
- **Investment & Planning**: Project management, strategic planning, operations
- **Specialized Services**: Energy studies, quality management, feasibility studies, ESG strategy

### Additional Pages
- **Projects**: Case studies and project portfolio
- **E-learning**: Professional development courses
- **News**: Latest insights and company updates

## 🔧 Customization

### Navigation Items
Edit the `navigationItems` array in `src/components/Navigation/Header.tsx` to modify the navigation structure.

### Styling
- **Colors**: Update CSS custom properties in `src/styles/navigation.css`
- **Animations**: Modify GSAP animations in component files
- **Layout**: Adjust responsive breakpoints in CSS files

### Content
- **Hero Section**: Update content in `src/components/Hero/HeroSection.tsx`
- **Search Suggestions**: Modify suggestions in `src/components/Search/SearchInterface.tsx`

## 📱 Responsive Design

### Breakpoints
- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+

### Mobile Features
- Hamburger menu with smooth animations
- Touch-optimized interactions
- Swipe gestures for navigation
- Optimized typography scaling

## ♿ Accessibility

### WCAG Compliance
- **Level AA**: Meets WCAG 2.1 AA standards
- **Keyboard Navigation**: Full keyboard support
- **Screen Readers**: Optimized for assistive technologies
- **Color Contrast**: Meets contrast ratio requirements

### Features
- ARIA landmarks and labels
- Focus management and trapping
- High contrast mode support
- Reduced motion preferences

## 🚀 Performance

### Optimization Techniques
- **Code Splitting**: Automatic with Next.js
- **Image Optimization**: Next.js Image component
- **CSS Optimization**: Critical CSS inlining
- **JavaScript Optimization**: Tree shaking and minification

### Static Generation
- Pre-generated HTML pages
- Optimized bundle sizes
- Fast loading times
- SEO-friendly structure

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📞 Support

For support and questions, please contact the development team or create an issue in the repository.

---

Built with ❤️ using Next.js, TypeScript, and modern web technologies.