# Portfolio - React + Tailwind CSS v4

A modern, responsive portfolio website built with React and Tailwind CSS v4.

## Features

- 🎨 Modern dark theme with light blue accents
- 📱 Fully responsive design
- ⚡ Animated background with canvas
- 🎯 Smooth scrolling navigation
- 📋 Interactive project and certification cards
- 📧 Contact form with React state management
- 🎭 Hexagon-shaped profile image
- 🚀 Built with Vite for fast development

## Tech Stack

- **React 18** - UI framework
- **Tailwind CSS v4** - Styling
- **Vite** - Build tool
- **Font Awesome** - Icons
- **Google Fonts** - Typography (Poppins, Inter)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-react
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Navigation component
│   ├── Hero.jsx           # Hero section with animated background
│   ├── Education.jsx      # Education section
│   ├── Projects.jsx       # Projects grid
│   ├── Certifications.jsx # Certifications grid
│   └── Footer.jsx         # Contact form and footer
├── App.jsx                # Main app component
├── main.jsx              # React entry point
└── index.css             # Global styles and Tailwind imports
```

## Customization

### Colors
Edit the color palette in `tailwind.config.js`:

```javascript
colors: {
  accent: '#38bdf8',
  'accent-hover': '#0ea5e9',
  bg: '#18181b',
  // ... more colors
}
```

### Content
Update the content in each component:
- Personal information in `Hero.jsx`
- Education details in `Education.jsx`
- Projects in `Projects.jsx`
- Certifications in `Certifications.jsx`
- Contact info in `Footer.jsx`

### Assets
Place your assets in the `public/Assets/` directory:
- Profile photo: `public/Assets/My Photo.jpg`
- Project videos: `public/Assets/*.mp4`
- Certificates: `public/Assets/*.png` or `public/Assets/*.jpg`
- Resume: `public/Assets/Resume.pdf`

## Features Explained

### Animated Background
The hero section features a canvas-based animated background with moving dots and connecting lines, created using React's `useEffect` and `useRef` hooks.

### Responsive Design
Built with Tailwind's responsive utilities:
- Mobile-first approach
- Breakpoints: `sm:`, `md:`, `lg:`, `xl:`
- Custom responsive classes for specific components

### Interactive Elements
- Project cards with hover effects and click handlers
- Certification cards that open images in new tabs
- Smooth scrolling navigation
- Mobile hamburger menu

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For questions or support, reach out to:
- Email: abhinavraman102@gmail.com
- GitHub: [@AbhinavRaman](https://github.com/AbhinavRaman)
- LinkedIn: [Abhinav Raman](https://www.linkedin.com/in/abhinavraman26/) 