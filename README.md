# 🎨 Neo-Brutalist Portfolio - Next.js

Portfolio website yang modern dan bold dengan gaya Neo-Brutalism, dibangun menggunakan **Next.js 14** dan **Tailwind CSS**.

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

## 📦 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Google Fonts (Rubik + DM Sans)
- **Deployment**: Vercel-ready

## 🎨 Features

✅ **8 Complete Sections**
- Hero with animated elements
- About section
- Services grid
- Portfolio/Work showcase
- Testimonials
- Process timeline
- CTA banner
- Footer with newsletter

✅ **Responsive Design**
- Mobile-first approach
- Tablet & desktop optimized
- Touch-friendly interactions

✅ **Neo-Brutalist Style**
- Bold colors & thick borders
- Hard shadows (4-8px solid)
- Playful rotations
- Organic shapes

✅ **Performance**
- Server-side rendering
- Optimized images
- Fast page loads

## 📝 Customization

### 1. Update Personal Info

Edit `app/page.tsx` dan ganti:
- "YOUR NAME" → Nama Anda
- "YOUR ROLE" → Role Anda
- "YOUR HEADLINE" → Headline Anda
- Email links
- Social media links

### 2. Add Your Images

Letakkan images di folder `public/` dan update references:

```tsx
// Hero section
<Image 
  src="/your-photo.jpg" 
  alt="Your Name"
  width={400}
  height={400}
/>
```

### 3. Customize Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    DEFAULT: '#YOUR_COLOR',
    container: '#YOUR_COLOR',
  },
  // ...
}
```

### 4. Add More Sections

Create new components in `components/` folder:

```bash
components/
├── About.tsx
├── Services.tsx
├── Portfolio.tsx
├── Testimonials.tsx
├── Process.tsx
└── CTA.tsx
```

## 🚀 Deploy to Vercel

### Option 1: Vercel CLI

```bash
npm i -g vercel
vercel
```

### Option 2: Vercel Dashboard

1. Push code ke GitHub
2. Buka [vercel.com](https://vercel.com)
3. Import repository
4. Deploy! ✅

### Option 3: Deploy Button

Click button di bawah:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/portfolio-nextjs)

## 📁 Project Structure

```
portfolio-nextjs/
├── app/
│   ├── globals.css          # Global styles + Tailwind
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Home page
├── components/
│   ├── Header.tsx            # Navigation header
│   ├── Hero.tsx              # Hero section
│   └── WavyDivider.tsx       # SVG wave divider
├── public/                   # Static assets
├── tailwind.config.ts        # Tailwind configuration
├── tsconfig.json             # TypeScript config
├── next.config.js            # Next.js config
└── package.json              # Dependencies
```

## 🎯 Customization Guide

### Change Hero Headline

```tsx
// app/page.tsx
<h1>
  YOUR
  <br />
  <span className="text-primary-container">HEADLINE</span>
  <br />
  GOES <span className="text-secondary-container">HERE!</span>
</h1>
```

### Add Services

```tsx
const services = [
  { icon: "💡", title: "SERVICE 1", description: "..." },
  { icon: "✏️", title: "SERVICE 2", description: "..." },
  // ...
];

{services.map((service, i) => (
  <div key={i} className="card">
    <div className="text-4xl mb-4">{service.icon}</div>
    <h3>{service.title}</h3>
    <p>{service.description}</p>
  </div>
))}
```

### Add Projects

```tsx
const projects = [
  {
    title: "Project 1",
    category: "Web Development",
    image: "/projects/project-1.jpg",
    bg: "#FF9EC4",
  },
  // ...
];
```

## 🎨 Design System

### Colors

```css
Primary Blue:     #0027ac, #1f3fd1
Secondary Red:    #b61910, #da3626
Tertiary Yellow:  #ffd21f
Surface Cream:    #fdf9f1
Border/Shadow:    #1c1c17, #111111
```

### Typography

```css
Display:    Rubik 900 (56px)
Headlines:  Rubik 700-800 (28-40px)
Body:       DM Sans 400-500 (16px)
```

### Shadows

```css
shadow-brutal:     4px 4px 0px #111111
shadow-brutal-lg:  6px 6px 0px #111111
shadow-brutal-xl:  8px 8px 0px #111111
```

## 🔧 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (single column)
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px (multi-column)

## ⚡ Performance Tips

1. **Optimize Images**: Use Next.js `<Image>` component
2. **Lazy Load**: Components load on scroll
3. **Minify**: Auto-minified on build
4. **CDN**: Vercel Edge Network

## 🐛 Troubleshooting

### Port already in use?
```bash
npm run dev -- -p 3001
```

### Dependencies not installing?
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build errors?
```bash
npm run build
# Check error messages and fix
```

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Vercel Deployment](https://vercel.com/docs)

## 📄 License

Free for personal and commercial use!

---

**Ready to ship?** 🚀

1. ✅ Install dependencies
2. ✅ Customize content
3. ✅ Add images
4. ✅ Deploy to Vercel
5. 🎉 Share your portfolio!

---

Made with ❤️ using Next.js + Tailwind CSS
