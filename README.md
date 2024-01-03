# Notes App 📝 with Next.js and PocketBase

This is a simple notes app built using [Next.js](https://nextjs.org/) as the frontend framework and utilizing a custom backend with [PocketBase](https://www.pocketbase.io/) as the database solution for storing and managing notes.

## Features

- **Custom Backend with PocketBase**: Utilizes a custom backend for secure storage and synchronization of notes, with PocketBase as the database solution.
- **Server-side Rendering (SSR)**: Next.js provides SSR for better performance and SEO optimization.
- **Dynamic Routing**: Notes are dynamically routed based on their slugs for a clean and user-friendly URL structure.

## Getting Started

1. Clone the repository: `git clone <repository-url>`
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `pages/`: Contains Next.js pages, such as the index page and dynamic note pages.
- `public/notes/`: Directory to store markdown notes.
- `components/`: Reusable React components, including Notes and Note components.
- `lib/`: Utility functions or external integrations, such as interactions with the custom backend using PocketBase.
- `styles/`: Stylesheets for styling components.

## Dependencies

<div style="display: flex; align-items: center;">
<a href="https://nextjs.org/">
    <img  src="https://skillicons.dev/icons?i=nextjs" alt="NextJS"/>
</a>
<a href="https://www.pocketbase.io/">
    <img src="https://pocketbase.io/images/logo.svg" alt="PocketBase" style="margin-left: 10px;">
</a>
</div>
