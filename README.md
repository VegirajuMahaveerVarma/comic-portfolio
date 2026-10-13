# Comic Portfolio

A comic-book-inspired portfolio for Mahaveer Varma, an AI & ML student interested in practical AI applications, native Android development, and open-source software.

The site uses bold comic typography, pop-art panels, motion, and project case studies while keeping the project content in editable data files.

## Features

- Responsive portfolio pages for Home, Projects, About, Resume, and Contact
- Comic-book visual system with light and dark themes
- Animated project cards and project-status filters
- Individual project case-study pages
- Education and skill sections
- Resume PDF download
- Accessible status messaging for the contact form

## Tech stack

- Next.js 14
- React 18
- Tailwind CSS
- Framer Motion
- Lenis smooth scrolling

## Getting started

Requirements: Node.js compatible with Next.js 14 and npm.

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Create a production build:

```bash
npm run build
npm start
```

## Personalize the content

- `data/site.js` contains the introduction, education, skills, social links, and contact configuration.
- `data/projects.js` contains project descriptions, status, technology tags, repository links, and case-study sections.
- `public/resume.pdf` is the downloadable resume.

Only add verified results and working links. The contact form remains disabled until a real Formspree endpoint is configured in `data/site.js`; do not commit secrets or private credentials.

## Repository hygiene

Generated folders such as `node_modules/` and `.next/` should not be committed. They can be recreated locally using npm.

## License

See [LICENSE](./LICENSE).
