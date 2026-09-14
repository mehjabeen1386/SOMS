HopeHaven - Orphanage Management System (OMS)
HopeHaven OMS is a state-of-the-art orphanage management platform designed to streamline daily operations, track child care records, manage donations, and foster a supportive environment for holistic child development.
🌟 Key Features
 * OMS Admin Dashboard: Real-time metrics overview displaying Total Children, Active Children, Male, and Female counts.
 * Child Record Management: Secure data grid to view, add, update, and manage child records (including age, gender, guardian details, and status like Active or Transferred).
 * Donation Portal: Structured contribution tiers including Monthly Meal Sponsors, Education Supporters, Guardian Angels, and custom donation amounts.
 * Secure Authentication: Dedicated sign-in and portal access control for administrators and staff.
 * Interactive Contact & Support: Built-in communication channels, location details, and inquiry forms for volunteers, donors, and admissions.
🛠️ Tech Stack
 * Frontend & Framework: Next.js (App Router), React, TypeScript
 * Styling: Tailwind CSS
 * Database & ORM: Prisma ORM with SQLite/Relational Database
 * State Management: React Hooks (useState, useEffect)
🚀 Getting Started
Follow these instructions to set up and run the project locally on your machine.
Prerequisites
 * Node.js (v18+ recommended)
 * npm or yarn
Installation & Setup
 * Clone the repository:
   git clone https://github.com/mehjabeen1386/SOMS.git
cd OMS

 * Install dependencies:
   npm install

 * Configure Environment Variables:
   Create a .env file in the root directory and add your database connection string:
   DATABASE_URL="file:./dev.db"

 * Initialize Prisma & Database:
   npx prisma generate
npx prisma db push

 * Run the Development Server:
   npm run dev

 * Open the Application:
   Open http://localhost:3000 in your browser to view the platform.
📂 Project Structure
<pre><code>
OMS/
├── prisma/               # Database schema and migrations
├── src/
│   ├── app/              # Next.js App Router (Pages & API Routes)
│   │   ├── api/          # Backend API endpoints (e.g., /api/children)
│   │   ├── globals.css   # Global Tailwind styles
│   │   ├── layout.tsx    # Root layout component
│   │   └── page.tsx      # Landing & Dashboard page view
│   ├── components/       # Modular UI components
│   │   ├── ChildrenTable.tsx  # Data table for child records & forms
│   │   └── DashboardStats.tsx # Metric cards component
│   └── lib/              # Utility files & Singleton Prisma client (`prisma.ts`)
├── package.json
├── tailwind.config.js
└── tsconfig.json</code></pre>

📄 License
This project is developed under the HopeHaven initiative to support digital transformation in child care management.
