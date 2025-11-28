# SharpEye Films Portfolio

A modern, responsive video production portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. This comprehensive website showcases video production services, projects, photography albums, and includes a full blog system.

## ✨ Features

### Core Features

- **Modern, responsive design** with mobile-first approach
- **Video production portfolio** with detailed project showcases
- **Photography gallery** with lightbox functionality
- **Blog system** with rich content and SEO optimization
- **Dynamic routing** for projects, blogs, and photo albums
- **Category filtering** for projects and content organization
- **Contact forms** and service pages
- **SEO optimized** with meta tags, sitemap, and robots.txt
- **Fast loading** with Next.js 15 optimizations

### Pages Included

- **Homepage** with hero, showreel, services, and featured projects
- **About page** with company information and team details
- **Services page** showcasing video production offerings
- **Projects portfolio** with individual project pages and category filtering
- **Photo albums** with gallery functionality and lightbox viewing
- **Blog system** with individual post pages and author information
- **Contact page** with forms and company information
- **Legal pages** (Privacy Policy, Terms & Conditions, Refund Policy)
- **Category pages** for project filtering
- **404 and loading pages** for better user experience

### Technical Features

- **Static Site Generation (SSG)** for optimal performance
- **Dynamic metadata** generation for SEO
- **Responsive images** with Next.js Image optimization
- **Smooth animations** with Framer Motion
- **TypeScript** for type safety
- **Tailwind CSS** for utility-first styling
- **Component-based architecture** for maintainability

## 🛠 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React & React Icons
- **Image Optimization**: Next.js Image component
- **SEO**: Built-in Next.js SEO features

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd nextjs-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/                          # Next.js app directory (App Router)
│   ├── about/                   # About page
│   ├── blogs/                   # Blog system
│   │   └── [slug]/             # Individual blog posts
│   ├── category/                # Project categories
│   │   └── [slug]/             # Category pages
│   ├── contact/                 # Contact page
│   ├── photo-albums/            # Photography gallery
│   │   └── [slug]/             # Individual albums
│   ├── projects/                # Projects portfolio
│   │   └── [slug]/             # Individual projects
│   ├── services/                # Services page
│   ├── privacy-policy/          # Privacy policy
│   ├── terms-conditions/        # Terms and conditions
│   ├── refund-policy/           # Refund policy
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Homepage
│   ├── loading.tsx              # Loading component
│   ├── not-found.tsx            # 404 page
│   ├── sitemap.ts               # SEO sitemap
│   └── robots.ts                # Robots.txt
├── components/                   # Reusable components
│   ├── layout/                  # Layout components
│   │   ├── Navigation.tsx       # Main navigation
│   │   └── Footer.tsx           # Site footer
│   ├── sections/                # Page sections
│   │   ├── HeroSection.tsx      # Homepage hero
│   │   ├── ShowreelSection.tsx  # Video showreel
│   │   ├── ServicesGrid.tsx     # Services showcase
│   │   ├── ProjectsGrid.tsx     # Featured projects
│   │   ├── FAQSection.tsx       # FAQ component
│   │   └── SlidingServices.tsx  # Animated services
│   └── ui/                      # UI components
│       ├── FramerButton.tsx     # Animated button
│       └── VideoPlayer.tsx      # Video player
├── lib/                         # Utilities and data
│   ├── data/                    # Static data files
│   │   ├── blogs.ts             # Blog posts data
│   │   ├── projects.ts          # Projects data
│   │   └── photo-albums.ts      # Photo albums data
│   ├── constants.ts             # App constants
│   ├── fonts.ts                 # Font configurations
│   ├── metadata.ts              # SEO metadata helper
│   └── utils.ts                 # Utility functions
├── styles/                      # Additional styles
└── public/                      # Static assets
    └── images/                  # Image assets
```

## 🎨 Customization

### Adding New Content

#### Blog Posts

Edit `src/lib/data/blogs.ts` to add new blog posts:

```typescript
{
  id: 'unique-id',
  title: 'Your Blog Title',
  slug: 'your-blog-slug',
  excerpt: 'Brief description...',
  content: 'Full blog content...',
  image: '/images/blog-image.jpg',
  publishedAt: '2024-01-01',
  readTime: '5 min read',
  category: 'Category',
  author: {
    name: 'Author Name',
    avatar: '/images/author.jpg'
  }
}
```

#### Projects

Edit `src/lib/data/projects.ts` to add new projects:

```typescript
{
  id: 'unique-id',
  title: 'Project Title',
  slug: 'project-slug',
  description: 'Brief description...',
  longDescription: 'Detailed description...',
  category: 'Commercial',
  tags: ['Tag1', 'Tag2'],
  image: '/images/project-hero.jpg',
  gallery: ['/images/gallery1.jpg'],
  client: 'Client Name',
  duration: '30 seconds',
  completedAt: '2024-01-01',
  services: ['Service1', 'Service2']
}
```

#### Photo Albums

Edit `src/lib/data/photo-albums.ts` to add new albums:

```typescript
{
  id: 'unique-id',
  title: 'Album Title',
  slug: 'album-slug',
  description: 'Album description...',
  coverImage: '/images/cover.jpg',
  images: [
    { url: '/images/photo1.jpg', caption: 'Photo caption' }
  ],
  location: 'Location',
  date: '2024-01-01',
  photographer: 'Photographer Name',
  category: 'Travel',
  tags: ['Tag1', 'Tag2']
}
```

### Styling

- Modify `src/app/globals.css` for global styles
- Update Tailwind configuration in `tailwind.config.ts`
- Customize color scheme and fonts in CSS variables

### SEO Configuration

- Update site metadata in `src/lib/metadata.ts`
- Modify sitemap configuration in `src/app/sitemap.ts`
- Update robots.txt in `src/app/robots.ts`

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with each push

### Other Platforms

The project works on any platform supporting Next.js:

- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

### Environment Variables

Create a `.env.local` file for environment-specific variables:

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Development

### Code Quality

- TypeScript for type safety
- ESLint for code linting
- Prettier for code formatting (recommended)

### Performance

- Next.js Image optimization
- Static generation for better performance
- Lazy loading for images and components
- Optimized bundle size

## 📄 License

This project is private and proprietary. All rights reserved.

## 🤝 Contributing

This is a private project. For any modifications or improvements, please contact the development team.

## 📞 Support

For technical support or questions about this project, please contact the development team.
