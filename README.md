# Cardan

This is a Nuxt.js application configured with Tailwind CSS and other modern web development tools. The project includes custom components and pages tailored for specific functionalities.

## Project Setup

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/LKosters/Cardan
   ```
2. Navigate into the project directory:
   ```bash
   cd cardan
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

### Development

To start the development server, run:
```bash
npm run dev
```

### Build

To build the application for production, use:
```bash
npm run build
```

### Generate Static Files

To generate static files, run:
```bash
npm run generate
```

### Preview

To preview the production build locally, use:
```bash
npm run preview
```

### Formatting

To format the code using Prettier, run:
```bash
npm run format
```

## Configuration

The project is configured using `nuxt.config.ts`. Key configurations include:

- **CSS**: Main styles are located in `~/assets/css/main.css`.
- **Modules**: Includes `@nuxt/fonts` for font management.
- **Vite Plugins**: Configured with Tailwind CSS via `@tailwindcss/vite`.

## Components

The project includes several custom components located in the `components` directory:

- **StickyBlob.vue**: This component creates a sticky, interactive blob element that encourages users to explore the site. It features a clickable area that changes position upon misclicks, enhancing user engagement. The component uses an image and text to convey its message and includes a button that links to an external URL.

- **UI Components**: Located in the `ui` directory, these components are designed for user interface elements.

- **Block Components**: Found in the `block` directory, these components are used for block-level elements.

- **Icon Components**: Located in the `icon` directory, these components are used for displaying icons.

## Pages

The project includes several pages located in the `pages` directory:

- **bloemenwinkel.vue**: A page dedicated to a flower shop, likely showcasing products and services.

- **eigen-site.vue**: A page for creating a personal site, possibly offering customization options.

- **kies-website.vue**: A page for choosing a website template, providing users with various design options.

- **index.vue**: The main landing page of the application, serving as the entry point for users.

- **beperk-jezelf.vue**: A page focused on self-limitation themes, potentially offering insights or tools for personal development.
