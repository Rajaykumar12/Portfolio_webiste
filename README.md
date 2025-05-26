# Portfolio Website

A modern, responsive portfolio website built with React and TailwindCSS, featuring a sleek design with smooth animations and interactive elements.

## Features

- 🎨 Modern UI/UX with tailored color scheme
- ✨ Smooth scroll animations
- 📱 Fully responsive design
- 🌗 Loading screen with typing animation
- 🔄 Interactive project cards
- 📬 Contact form with EmailJS integration
- 🎯 Intersection Observer for scroll animations

## Tech Stack

- React
- TailwindCSS
- EmailJS
- Vite
- CSS Animations

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Rajaykumar12/Portfolio_webiste.git
cd Portfolio_webiste
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your EmailJS credentials:
```
VITE_SERVICE_ID=your_service_id
VITE_TEMPLATE_ID=your_template_id
VITE_PUBLIC_KEY=your_public_key
```

4. Run the development server:
```bash
npm run dev
```

## Building for Production

To create a production build:

```bash
npm run build
```

## Deployment

This project is configured for GitHub Pages deployment. To deploy:

```bash
npm run deploy
```

## Project Structure

```
Portfolio-webiste/
├── src/
│   ├── components/
│   │   ├── sections/
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Projects.jsx
│   │   │   └── Contacts.jsx
│   │   ├── LoadingScreen.jsx
│   │   ├── MobileMenu.jsx
│   │   ├── Navbar.jsx
│   │   └── RevealOnScroll.jsx
│   ├── App.jsx
│   └── main.jsx
└── public/
    └── assets/
```

## Features in Detail

- **Loading Screen**: Custom animated loading screen with typewriter effect
- **Smooth Scroll**: Reveal animations for sections as you scroll
- **Responsive Navigation**: Mobile-friendly hamburger menu with smooth transitions
- **Project Showcase**: Interactive project cards with hover effects
- **Skills Section**: Categorized display of technical skills
- **Contact Form**: Integrated contact form with email functionality
- **Modern Design**: Consistent color scheme and smooth animations throughout

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
