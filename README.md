# Simple E-Commerce Website

    This is a simple e-commerce website built using Next.js, NextUI, and Tailwind CSS. The project demonstrates a basic setup for an online store with product listings and a shopping cart.
    deployment @: [[vercel](e-commerce-website-xi-six.vercel.app)](https://e-commerce-website-xi-six.vercel.app/)

## Table of Contents

- [Simple E-Commerce Website](#simple-e-commerce-website)
  - [Table of Contents](#table-of-contents)
  - [Technologies Used](#technologies-used)
  - [Project Structure](#project-structure)
  - [Installation](#installation)
    - [Prerequisites](#prerequisites)
    - [Steps](#steps)
  - [Run the development server](#run-the-development-server)
  - [Building for Production](#building-for-production)
  - [Environment Variables](#environment-variables)
  - [License](#license)
  - [Contact](#contact)

## Technologies Used

- [Next.js 14](https://nextjs.org/docs/getting-started)
- [NextUI v2](https://nextui.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Mikro-orm](https://mikro-orm.io/)
- [Lucide React](https://lucide.dev/)
- [Framer Motion](https://www.framer.com/motion/)
- [next-themes](https://github.com/pacocoursey/next-themes)

## Project Structure

    .env .eslintignore .eslintrc.json .gitignore .next/ .vscode/ app/ components/ config/ data/ db.sqlite entities/ LICENSE migrations/ mikro-orm.config.ts next-env.d.ts next.config.js package.json pages/ postcss.config.js public/ README.md seeders/ styles/ tailwind.config.js tsconfig.json tsconfig.orm.json types/ utils/

## Installation

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later) or yarn

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/yourproject.git

   ```

2. Navigate to the project directory:

   ```bash
   cd yourproject
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Run the development server

```bash
npm run dev
```

This will start the server at http://localhost:3000.

## Building for Production

To build the project for production, run the following command:

```bash
npm run build
```

## Environment Variables

Create a `.env` file in the root of the project and add the following environment variables:

```bash
DATABASE_URL="sqlite://./db.sqlite"
```

notes: I was having trouble setting up mikro-orm and querying the database so the backend is not fully functional. I will continue to work on this project and update it as I learn more about mikro-orm and databases.

## License

Licensed under the [MIT license](https://github.com/nextui-org/next-app-template/blob/main/LICENSE).

## Contact

Maverick Espinosa - mespin11@jhu.edu
