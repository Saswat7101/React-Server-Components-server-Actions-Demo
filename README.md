# RSC Actions Suspense Demo

A Next.js demo application showcasing React Server Components (RSC), Server Actions, and Suspense with React 19.

## Overview

This project demonstrates modern React and Next.js features including:

- **React Server Components (RSC)** - Server-side rendering with async/await data fetching
- **React 19 `use` Hook** - New primitive for handling promises directly in components
- **Suspense** - Built-in loading states for asynchronous operations
- **Error Boundaries** - Class-based error handling in React
- **Server Actions** - Server-side function calls directly from components (available in components)

## Tech Stack

- **Next.js** 15.0.0
- **React** 19.0.0
- **React DOM** 19.0.0

## Getting Started

### Prerequisites

- Node.js 18.17 or later

### Installation

```
bash
# Install dependencies
npm install
```

### Development Server

```
bash
# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build

```
bash
# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
├── app/
│   ├── page.js           # Main page demonstrating RSC, Suspense, and use hook
│   ├── layout.js        # Root layout
│   └── globals.css      # Global styles
├── components/
│   ├── ClientDemo.js           # Client component demo (commented out)
│   ├── DataFetchingDemo.js     # Data fetching demo (commented out)
│   ├── ErrorBoundary.js        # Class-based error boundary
│   ├── RSCDemo.js              # RSC demo (commented out)
│   ├── ServerActionsDemo.js    # Server actions demo (commented out)
│   └── UsePromisesDemo.js      # Demo using React 19's use() hook
├── actions/
│   └── User.js           # Server actions for user operations
├── dummy-db.json         # Sample data for demonstrations
└── package.json          # Project dependencies
```

## Features Explained

### React Server Components

The main page (`app/page.js`) is an async Server Component that fetches data from `dummy-db.json`:

```
javascript
export default async function Home() {
  const fetchUsersPromise = new Promise((resolve, reject) =>
    setTimeout(async () => {
      const data = await fs.readFile("dummy-db.json", "utf-8");
      const users = JSON.parse(data);
      resolve(users);
    }, 2000),
  );
  // ...
}
```

### React 19 `use` Hook

The `UsePromisesDemo` component demonstrates React 19's `use` hook for handling promises:

```
javascript
import { use } from "react";

export default function UsePromiseDemo({ usersPromise }) {
  const users = use(usersPromise);
  // ...
}
```

### Suspense

Suspense wraps the async component to show a fallback while data is loading:

```
javascript
<Suspense fallback={<p>Loading users...</p>}>
  <UsePromiseDemo usersPromise={fetchUsersPromise} />
</Suspense>
```

### Error Boundary

Error boundaries catch JavaScript errors anywhere in their child component tree:

```
javascript
<ErrorBoundary fallback={<p>Something went wrong!</p>}>
  <Suspense fallback={<p>Loading users...</p>}>
    <UsePromiseDemo usersPromise={fetchUsersPromise} />
  </Suspense>
</ErrorBoundary>
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run Next.js linter

## Learning Resources

- [React Server Components](https://nextjs.org/docs/app/building-your-application/routing/server-components)
- [React 19 use() Hook](https://react.dev/reference/react/use)
- [Suspense in React](https://react.dev/reference/react/Suspense)
- [Error Boundaries](https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary)
- [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions)

## License

MIT
