# Jotion - A Notion Clone

## Overview

Jotion is a project inspired by a YouTube [tutorial](https://www.youtube.com/watch?v=0OaDyjB9Ib8) by [Antonio](https://github.com/AntonioErdeljac). It replicates some of the core functionalities of Notion, a popular note-taking and collaboration platform. Built with Next.js, Convex, Clerk, and Shadcn, Jotion provides a hands-on learning experience for developers interested in exploring these technologies.

## Features

- **Rich Text Editing**: Create and edit documents with a variety of formatting options.
- **Organization**: Organize your documents using a flexible and intuitive system.
- **Dark Mode**: Enhance readability and reduce eye strain with a sleek dark mode.

## Technologies Used

- **Next.js**: A React framework for building server-side rendered applications.
- **Convex**: A state management library for managing global state in React applications.
- **Clerk**: An authentication and user management library for Next.js applications.
- **Shadcn**: A library for adding shadow effects to components in React applications.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Jahan-Shah/notion-next-clone.git
   ```

2. Navigate to the project directory:

   ```bash
   cd notion-next-clone
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Setup .env file


```js
# Deployment used by `npx convex dev`
CONVEX_DEPLOYMENT=
NEXT_PUBLIC_CONVEX_URL=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

EDGE_STORE_ACCESS_KEY=
EDGE_STORE_SECRET_KEY=
```

### Setup Convex

```shell
npx convex dev

```

### Start the app

```shell
npm run dev
```

   The application will be accessible at `http://localhost:3000`.

## Acknowledgments

- This project was inspired by a YouTube tutorial, and credit goes to the [Antonio](https://github.com/AntonioErdeljac).

## Contact

For questions or support, feel free to reach out to [Shah Jahan](mailto:shahjahansarfraz3973@gmail.com).
