# Shiridi Associates - Construction Materials

This is the front-end web application for **Shiridi Associates**, a premier supplier of quality cement, steel TMT bars, and construction materials. 

The application is a modern, high-performance single-page app (SPA) featuring premium UI elements, smooth scroll animations, and interactive 3D product cards.

## Technologies Used

This project is built using modern front-end technologies:

- **React 18** (UI Library)
- **Vite** (Build Tool & Dev Server)
- **TypeScript** (Static Typing)
- **Tailwind CSS** (Styling)
- **Framer Motion** (Advanced Animations & Physics)
- **shadcn/ui** (Accessible Component Primitives)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Ensure you have Node.js and npm installed.
- [Node.js](https://nodejs.org/) (v16 or higher recommended)

### Installation

1. Navigate to the project directory:
   ```sh
   cd shiridiassociates-main
   ```

2. Install NPM packages:
   ```sh
   npm install
   ```

3. Start the development server:
   ```sh
   npm run dev
   ```

4. Open your browser and visit the local server address (usually `http://localhost:8080` or `http://localhost:5173`) to view the application in action.

## Deployment

To create an optimized production build, run:
```sh
npm run build
```

This will generate a `./dist` folder containing the minified HTML, CSS, and JS files, which can be deployed to any static hosting provider such as Vercel, Netlify, or an AWS S3 bucket.

## Customization

- **Products**: To update the product catalog, edit the `src/data/products.ts` file. You can add new entries or adjust pricing and specifications.
- **Images**: Place any new raw images in `src/assets/products` and link them in the product data file.
- **Theme**: Customize brand colors and font variables inside `src/index.css` and `tailwind.config.ts`.

https://shiridiassociates.netlify.app/
