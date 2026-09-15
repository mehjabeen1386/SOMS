# Smart Orphanage Management System (SOMS)

SOMS is a full-stack Next.js platform for organizing orphanage operations and supporting child wellbeing. It provides an administrative dashboard, child records, donation information, authentication pages, and contact workflows backed by Prisma and a relational database.

## Features

- Dashboard statistics for total, active, male, and female children
- Child record management with guardian, gender, age, and status information
- Add and update child records through the dashboard
- Donation portal with sponsorship and custom contribution options
- Login and signup pages for controlled access
- About, contact, and support pages
- Next.js API routes for authentication and children data
- Prisma database access with a reusable client helper

## Tech Stack

- Next.js 14 App Router
- React 18 and TypeScript
- Tailwind CSS
- Prisma ORM
- SQLite by default for local development
- Lucide React icons

## Repository Structure

```text
SOMS/
├── prisma/schema.prisma        # Database schema
├── src/app/                    # Pages and API routes
│   ├── api/auth/signup/        # Signup API route
│   ├── api/children/           # Children API route
│   ├── dashboard/              # Admin dashboard
│   ├── donate/                 # Donation page
│   ├── login/                  # Login page
│   └── signup/                 # Signup page
├── src/components/             # Shared UI components
├── src/lib/prisma.ts           # Prisma client singleton
├── .env.example                # Environment template
└── package.json
```

## Requirements

- Node.js 18 or newer
- npm 9 or newer

## Local Setup

Clone the repository:

```bash
git clone https://github.com/mehjabeen1386/SOMS.git
cd SOMS
```

Install dependencies:

```bash
npm install
```

Create the environment file:

```bash
copy .env.example .env    # Windows
# cp .env.example .env   # macOS/Linux
```

For the default local SQLite database, `.env` should contain:

```env
DATABASE_URL="file:./dev.db"
```

Generate Prisma Client and create/update the local database:

```bash
npx prisma generate
npx prisma db push
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Useful Commands

```bash
npm run dev          # Start the development server
npm run build        # Generate Prisma Client and build Next.js
npm start            # Start the production server
npm run db:generate  # Generate Prisma Client
npm run db:push      # Apply the Prisma schema to the database
npm run db:studio    # Open Prisma Studio
```

## Database

The project uses Prisma with SQLite for local development. To use another relational database, update `DATABASE_URL` and the provider in `prisma/schema.prisma`, then run:

```bash
npx prisma generate
npx prisma db push
```

Do not commit `.env` or database credentials. Use `.env.example` as the safe configuration template.

## Deployment

SOMS can be deployed as a standard Next.js application on Vercel or another Node.js hosting provider.

1. Configure `DATABASE_URL` in the hosting provider's environment variables.
2. Run the project build command: `npm run build`.
3. Start with `npm start` when using a persistent Node.js server.
4. Use a production relational database instead of a local SQLite file for multi-user deployments.

## Main Routes

| Area | Route |
| --- | --- |
| Home | `/` |
| About | `/about` |
| Login | `/login` |
| Signup | `/signup` |
| Dashboard | `/dashboard` |
| Donations | `/donate` |
| Contact | `/contact` |

## License

Copyright © 2026 HopeHaven / Smart Orphanage Management System. All rights reserved. This repository is shared for portfolio and demonstration purposes only.
