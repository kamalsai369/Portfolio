# 🚀 Kamal Sai Tillari - AI/ML Portfolio

A modern, responsive portfolio website showcasing my expertise in Artificial Intelligence, Machine Learning, and Generative AI technologies.

## 🌟 Live Demo
[View Portfolio](https://your-portfolio-url.vercel.app) *(will be available after deployment)*

## 🛠️ Built With

- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui + Radix UI
- **Animations**: Framer Motion
- **Email**: Nodemailer with Gmail SMTP
- **Deployment**: Vercel

## ✨ Features

### 🎯 Core Sections
- **Hero Section** - Professional introduction with animated background
- **About** - Educational background and expertise overview
- **Skills** - Technical skills organized by category (Agentic AI, LLMs, Frameworks, etc.)
- **Experience** - Work experience at Technical Hub
- **Projects** - Featured AI/ML projects with live demos
- **Certifications** - Professional certifications and achievements
- **Contact** - Working contact form with email integration

### 🔥 Advanced Features
- **Resume Download** - PDF resume available from multiple locations
- **Working Contact Form** - Email integration with validation and feedback
- **AI-Generated Project Images** - Custom SVG illustrations for each project
- **Responsive Design** - Mobile-first approach with smooth animations
- **Performance Optimized** - Fast loading with Next.js optimization

### 🤖 Featured Projects
1. **Agentic MCP RAG Assistant** - Agriculture advisory system with AutoGen workflows
2. **Research Assistant** - LangGraph + Flask dual architecture
3. **Movie Recommendation System** - CrewAI multi-agent platform
4. **DeepSeek AI Code Companion** - AI-powered coding assistant

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/kamalsai369/Portfolio.git

# Navigate to project directory
cd Portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

### Environment Setup (Optional)
For email functionality, create `.env.local`:
```env
EMAIL_HOST=smtp.gmail.com
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

## 📧 Contact Form Setup

The portfolio includes a fully functional contact form with:
- Client-side validation
- Email integration via Nodemailer
- Loading states and user feedback
- Gmail SMTP support

To enable email notifications:
1. Set up Gmail App Password
2. Add credentials to `.env.local`
3. Deploy to production

## 🎨 Customization

### Updating Content
- Personal info: `components/hero-section.tsx`, `components/about-section.tsx`
- Skills: `components/skills-section.tsx`
- Projects: `components/projects-section.tsx`
- Experience: `components/experience-section.tsx`

### Adding Projects
Add new projects to the `projects` array in `components/projects-section.tsx`:
```typescript
{
  title: "Your Project",
  description: "Project description",
  image: "/your-image.svg",
  technologies: ["Tech1", "Tech2"],
  // ... other properties
}
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy with automatic CI/CD

### Manual Deployment
```bash
# Build for production
npm run build

# Start production server
npm start
```

## 📱 Performance

- **Lighthouse Score**: 90+ across all metrics
- **Core Web Vitals**: Optimized for excellent user experience
- **Bundle Size**: Optimized with Next.js automatic splitting
- **Loading Speed**: Fast initial load with progressive enhancement

## 🔧 Technical Highlights

- **Server-Side Rendering** with Next.js App Router
- **TypeScript** for type safety
- **Responsive Design** with mobile-first approach
- **SEO Optimized** with meta tags and structured data
- **Performance Optimized** with lazy loading and code splitting

## 📄 Resume

The portfolio includes resume download functionality:
- PDF format: `kamalsaitillarigenai10.pdf`
- Accessible from navigation, hero section, and contact section
- API endpoint: `/api/resume`

## 🏆 Certifications

- Machine Learning (IIT Madras)
- Oracle Generative AI Certified Professional
- Deep Learning with TensorFlow (EdX)
- Dell Technologies GEN AI Professional
- And more...

## 📞 Contact

- **Email**: tillarikamalsai@gmail.com
- **Phone**: +91 6300851991
- **LinkedIn**: [kamalsai](https://www.linkedin.com/in/kamal-sai-tillari-445201268/)
- **GitHub**: [kamalsai369](https://github.com/kamalsai369)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Made with ❤️ by Kamal Sai Tillari | Powered by Next.js & Vercel
