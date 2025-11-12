# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a tactical/security-themed website for Conceal NYC built with React, TypeScript, Vite, and shadcn/ui components. The site features a modern single-page application with routing for services including NRA classes, private training, application assistance, and package offerings. This project is integrated with Lovable for rapid development.

## Tech Stack

- **Build Tool**: Vite (React + SWC)
- **Framework**: React 18.3+ with TypeScript
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Styling**: Tailwind CSS with custom tactical theme
- **Routing**: React Router DOM v6
- **State Management**: TanStack Query (React Query)
- **Forms**: React Hook Form with Zod validation
- **Notifications**: Sonner + Radix Toast

## Development Commands

```bash
# Start development server (runs on port 8080)
npm run dev

# Build for production
npm run build

# Build for development (includes component tagger)
npm run build:dev

# Run linter
npm run lint

# Preview production build
npm preview
```

## Project Structure

```
src/
├── App.tsx                 # Root component with routing and provider setup
├── main.tsx               # App entry point
├── index.css              # Global styles and CSS variables (HSL-based theme)
├── pages/                 # Route pages (one per URL)
│   ├── Index.tsx          # Home page
│   ├── Packages.tsx       # Packages listing
│   ├── NRAClasses.tsx     # NRA classes info
│   ├── PrivateClasses.tsx # Private training
│   ├── ApplicationAssistance.tsx # License assistance
│   ├── Contact.tsx        # Contact page
│   └── NotFound.tsx       # 404 page
├── components/            # Reusable feature components
│   ├── Navigation.tsx     # Main nav bar
│   ├── Hero.tsx          # Hero section
│   ├── Packages.tsx      # Packages display component
│   ├── Services.tsx      # Services grid
│   ├── WhyChooseUs.tsx   # Benefits section
│   ├── ContactForm.tsx   # Contact form with validation
│   ├── Footer.tsx        # Site footer
│   └── ui/               # shadcn/ui primitives (Button, Card, etc.)
├── hooks/                # Custom React hooks
│   ├── use-mobile.tsx    # Responsive breakpoint detection
│   └── use-toast.ts      # Toast notification hook
└── lib/
    └── utils.ts          # Utility functions (cn for className merging)
```

## Architecture Notes

### Routing
- React Router v6 with BrowserRouter
- All routes defined in `App.tsx`
- **IMPORTANT**: Custom routes MUST be added ABOVE the catch-all `"*"` route (NotFound)
- Current routes:
  - `/` - Home page (Index)
  - `/packages` - Service packages (Packages)
  - `/nra-classes` - NRA Classes (NRAClasses)
  - `/private-classes` - Private Classes (PrivateClasses)
  - `/application-assistance` - Application Assistance (ApplicationAssistance)
  - `/contact` - Contact page (Contact)
  - `*` - 404 page (NotFound)

### Styling System
- Uses HSL color values defined in `src/index.css`
- Custom tactical theme colors:
  - `tactical-dark`, `tactical-darker`: Main dark colors
  - `tactical-red`, `tactical-red-hover`: Accent colors
  - `tactical-blue`: Secondary accent
- All theme colors support dark mode
- Font: Montserrat (sans-serif)

### Path Aliases
- `@/` maps to `./src/` (configured in vite.config.ts and tsconfig.json)
- Example: `import { Button } from "@/components/ui/button"`

### Component Patterns
- Pages are composed of multiple section components
- Each section is a standalone component in `src/components/`
- UI primitives live in `src/components/ui/`
- Use shadcn/ui components for consistent design

### TypeScript Configuration
- Lenient settings enabled (noImplicitAny: false, strictNullChecks: false)
- Skip lib check for faster builds
- Allows JavaScript files

### Development Server
- Runs on port 8080 with IPv6 support (`::`)
- Component tagger enabled in development mode (lovable-tagger)

### Application Context Hierarchy
The app uses a specific provider hierarchy (from outer to inner):
1. `HelmetProvider` - Meta tag management
2. `QueryClientProvider` - TanStack Query for server state
3. `TooltipProvider` - Radix UI tooltip context
4. `BrowserRouter` - React Router navigation
5. `Toaster` + `Sonner` - Toast notifications (both included for flexibility)

### Form Handling
- Use React Hook Form for forms
- Validate with Zod schemas
- Integrate with shadcn/ui form components

### State Management
- TanStack Query for server state and caching
- React hooks for local component state
- No global state management (Redux/Zustand) - not needed for this project

## Adding New Routes

When adding new routes, follow this pattern in `App.tsx`:

```tsx
<Routes>
  <Route path="/" element={<Index />} />
  <Route path="/your-new-route" element={<YourNewPage />} />
  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
  <Route path="*" element={<NotFound />} />
</Routes>
```

## Styling Guidelines

- Use Tailwind utility classes
- Reference CSS variables for tactical theme colors
- Example: `bg-tactical-dark text-white`
- For custom colors, define in `index.css` as HSL values
- Maintain smooth scrolling (`html { scroll-behavior: smooth; }`)

## UI Components

- All shadcn/ui components are in `src/components/ui/`
- Import and use directly: `import { Button } from "@/components/ui/button"`
- Components use Radix UI primitives with Tailwind styling
- Customize via className prop or modify component files

## Lovable Integration

This project is integrated with Lovable for rapid development:
- Changes made via Lovable are automatically committed to this repo
- Local changes pushed to the repo are reflected in Lovable
- Deploy via Lovable: Project > Settings > Share > Publish
- Lovable project URL: https://lovable.dev/projects/05d8971d-2cd5-45ed-8b9e-805a287b7341
