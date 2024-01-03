import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <h1>Notes App 📝 with Next.js and PocketBase</h1>

      <p>
        This is a simple notes app built using{" "}
        <Link href="https://nextjs.org/">Next.js</Link> as the frontend
        framework and utilizing a custom backend with{" "}
        <Link href="https://www.pocketbase.io/">PocketBase</Link> as the
        database solution for storing and managing notes.
      </p>

      <h2>Features</h2>
      <ul>
        <li>
          <strong>Custom Backend with PocketBase:</strong> Utilizes a custom
          backend for secure storage and synchronization of notes, with
          PocketBase as the database solution.
        </li>
        <li>
          <strong>Server-side Rendering (SSR):</strong> Next.js provides SSR for
          better performance and SEO optimization.
        </li>
        <li>
          <strong>Dynamic Routing:</strong> Notes are dynamically routed based
          on their slugs for a clean and user-friendly URL structure.
        </li>
      </ul>

      <h2>Getting Started</h2>
      <ol>
        <li>
          Clone the repository: <code>git clone &lt;repository-url&gt;</code>
        </li>
        <li>
          Install dependencies: <code>npm install</code>
        </li>
        <li>
          Run the development server: <code>npm run dev</code>
        </li>
        <li>
          Open <Link href="http://localhost:3000">http://localhost:3000</Link>{" "}
          in your browser.
        </li>
      </ol>

      <h2>Project Structure</h2>
      <ul>
        <li>
          <code>pages/</code>: Contains Next.js pages, such as the index page
          and dynamic note pages.
        </li>
        <li>
          <code>public/notes/</code>: Directory to store markdown notes.
        </li>
        <li>
          <code>components/</code>: Reusable React components, including Notes
          and Note components.
        </li>
        <li>
          <code>lib/</code>: Utility functions or external integrations, such as
          interactions with the custom backend using PocketBase.
        </li>
        <li>
          <code>styles/</code>: Stylesheets for styling components.
        </li>
      </ul>

      <h2>Dependencies</h2>
      <div className="dependencies">
        <a href="https://nextjs.org/">
          <img src="https://skillicons.dev/icons?i=nextjs" alt="NextJS" />
        </a>
        <a href="https://www.pocketbase.io/">
          <img src="https://pocketbase.io/images/logo.svg" alt="PocketBase" />
        </a>
      </div>
    </div>
  );
}
