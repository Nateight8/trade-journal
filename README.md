# Bare Project

A modern web application with a GraphQL API server and Next.js frontend.

## Project Structure

```
bare/
├── frontend/        # Frontend applications
│   └── web-app/     # Next.js web application
├── server/          # GraphQL API server
├── schema/          # Shared database schema
│   ├── schema.ts    # Drizzle schema definitions
│   └── index.ts     # Database configuration
└── README.md        # Project documentation
```

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm
- PostgreSQL

### Environment Variables

Both the frontend and server require environment variables to be set up. Copy the `.env.example` files in both directories and update them with your values:

```bash
# For server
cp server/.env.example server/.env

# For frontend web-app
cp frontend/web-app/.env.example frontend/web-app/.env
```

### Installation

```bash
# Install dependencies for both frontend and server
cd server && pnpm install
cd ../frontend/web-app && pnpm install
```

### Development

```bash
# Start the server (from server directory)
pnpm dev

# Start the web-app (from frontend/web-app directory)
pnpm dev
```

## Features

- GraphQL API with Apollo Server
- Next.js frontend
- Authentication with NextAuth.js
- PostgreSQL database with Drizzle ORM
- TypeScript throughout
- Path aliases for clean imports
