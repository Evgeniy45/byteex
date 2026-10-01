# 🛍️ Byteex Product Landing Page

Responsive landing page developed based on a Figma design specification with headless CMS integration for dynamic content management.

---

## 🔗 Links

- **Live Demo**: https://evgeniy45.github.io/byteex/
- **Repository**: https://github.com/Evgeniy45/byteex

---

## 🛠️ Tech Stack

- **Frontend Core**: React 18, TypeScript
- **Styling**: SCSS (Sass), BEM methodology, Responsive Design (Mobile-First)
- **Headless CMS**: [Contentful](https://www.contentful.com/) (Content Delivery API)
- **Build Tool**: Vite
- **Icons & Assets**: Custom SVG, optimized WebP imagery

---

## ✨ Features & Architecture

- **Pixel-Accurate Layout**: Meticulously converts desktop, tablet, and mobile Figma layouts into clean, semantic markup[cite: 7].
- **Dynamic Content (Headless CMS)**:
  - Integrated with Contentful CMS to fetch and render dynamic questions and answers for the **FAQ Section** (`faqItem` model)[cite: 7, 8, 9].
  - Graceful fallback with local dataset in case of network unavailability or missing credentials.
- **Responsive & Interactive UI**:
  - Touch-friendly carousel and press logo list with dynamic mobile pagination dots.
  - Interactive accordions with accessible ARIA attributes (`aria-expanded`).
  - Strict CSS stacking context handling for natural cross-section card overlays.
- **Performance Optimized**:
  - Lightweight vector SVG icons.
  - Next-gen image format (`.webp`) across all media assets.

---

## 🚀 Getting Started

### Prerequisites

Ensure you have installed:

- [Node.js](https://nodejs.org/) (version 18 or higher recommended)
- `npm` or `yarn`

### Installation

1. **Clone the repository**:

   git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
   cd your-repo-name

2. **Install dependencies**:

   npm install

3. **Configure Environment Variables:**
   Create a .env file in the root directory by duplicating .env.example:

   cp .env.example .env

   Add your Contentful credentials:

   VITE_CONTENTFUL_SPACE_ID=your_contentful_space_id
   VITE_CONTENTFUL_ACCESS_TOKEN=your_contentful_delivery_token

4. **Run development server:**

   npm run dev

   Open http://localhost:5173 in your browser to view the application.

5. **Build for Production:**

   npm run build

## 🗂️ Project Structure

Plaintext
src/
├── assets/ # Icons, logos, and optimized WebP images
├── components/ # Page sections and features
│ ├── CTASection/ # Final call-to-action with benefits map
│ ├── FaqSection/ # Dynamic FAQ accordion integrated with Contentful
│ ├── HeroSection/ # Hero banner with floating review card
│ ├── PressSection/ # Media press strip with mobile pagination
│ └── ...
├── services/ # Contentful SDK client and API handlers
├── shared/ # Reusable UI primitives (Buttons, Cards)
├── styles/ # SCSS variables, mixins, reset, and typography
├── App.tsx # Root layout component
└── main.tsx # Application entry point

## 📝 Commit Convention

The Git commit history strictly follows the Conventional Commits standard:

feat(...): New features and sections

fix(...): Style fixes, responsive layout adjustments

refactor(...): Code cleanup and structural optimizations

## 👤 Author

Developer: Olkhovskyi Yevhenii

GitHub: [https://github.com/Evgeniy45](https://github.com/Evgeniy45)
