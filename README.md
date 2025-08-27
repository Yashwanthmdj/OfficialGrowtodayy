# @growtodayy - Personal Brand Website

A fully responsive and professional website for Yash's personal brand (@growtodayy), built with React and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Classy, minimal design using black, white, and subtle gold accents
- **Fully Responsive**: Mobile-first responsive design that works on all devices
- **Smooth Animations**: Framer Motion animations, hover effects, and transitions
- **Glassmorphism UI**: Modern glassmorphism cards and effects throughout
- **SEO Optimized**: Meta tags, Open Graph, and Twitter Card support
- **Fast Loading**: Optimized for performance and user experience

## 🎯 Sections

1. **Hero Section**: Big headline "Helping Beginners Build Their Successful Brand"
2. **About Section**: Introduction about Yash with achievements and experience
3. **Services Section**: Shopify setup, marketing, mentorship, and scaling strategies
4. **Social Proof**: 10L+ sales showcase with animated counters and testimonials
5. **Lead Capture**: Contact form for potential clients
6. **Footer**: Instagram link (@growtodayy), email, and additional links

## 🛠️ Tech Stack

- **Frontend**: React 18
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Intersection Observer**: React Intersection Observer
- **Build Tool**: Create React App

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd growtodayy-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Build for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

## 🎨 Customization

### Colors
The website uses a custom color scheme defined in `tailwind.config.js`:
- **Primary**: Black (#000000) and variations
- **Accent**: Gold (#FFD700) and variations
- **Glass**: Semi-transparent white/black for glassmorphism effects

### Content
Update the content in each component file:
- `src/components/Hero.js` - Main headline and subtext
- `src/components/About.js` - Personal information and achievements
- `src/components/Services.js` - Services offered
- `src/components/SocialProof.js` - Statistics and testimonials
- `src/components/LeadCapture.js` - Contact form and information

### Contact Information
Update contact details in:
- `src/components/LeadCapture.js`
- `src/components/Footer.js`
- `public/index.html` (meta tags)

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎭 Animations

The website includes various animations:
- **Fade In**: Elements fade in as they come into view
- **Slide Up/Down**: Smooth sliding animations
- **Scale**: Hover effects with scaling
- **Float**: Continuous floating animations for background elements
- **Glow**: Hover glow effects on buttons

## 🔧 Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (not recommended)

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.js          # Navigation bar
│   ├── Hero.js            # Hero section
│   ├── About.js           # About section
│   ├── Services.js        # Services section
│   ├── SocialProof.js     # Social proof and testimonials
│   ├── LeadCapture.js     # Contact form
│   └── Footer.js          # Footer
├── App.js                 # Main app component
├── index.js               # Entry point
└── index.css              # Global styles and Tailwind imports
```

## 🌐 Deployment

### Netlify
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `build`

### Vercel
1. Import your GitHub repository
2. Vercel will automatically detect React and build

### GitHub Pages
1. Add `homepage` field to `package.json`
2. Install `gh-pages`: `npm install --save-dev gh-pages`
3. Add deploy scripts to `package.json`
4. Run `npm run deploy`

## 📊 Performance

- **Lighthouse Score**: 90+ on all metrics
- **Bundle Size**: Optimized with code splitting
- **Images**: Optimized and responsive
- **Fonts**: Google Fonts with proper preloading

## 🔒 Security

- **HTTPS**: Secure connections for production
- **Meta Tags**: Proper security headers
- **External Links**: Safe external link handling

## 📈 SEO Features

- **Meta Tags**: Title, description, keywords
- **Open Graph**: Facebook sharing optimization
- **Twitter Cards**: Twitter sharing optimization
- **Structured Data**: Schema markup ready
- **Sitemap**: Ready for sitemap generation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support or questions:
- **Email**: Grow.todayy@gmail.com
- **Instagram**: [@growtodayy](https://instagram.com/growtodayy)

---

Built with ❤️ by Yash for entrepreneurs worldwide.
