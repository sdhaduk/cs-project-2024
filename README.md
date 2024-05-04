This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

- **Next.js**: Server-side rendering, API routes, built-in routing.
- **Prisma ORM**: Robust database management with support for strong typing.
- **NextAuth.js**: Simplified authentication with various providers.

## Getting Started

First, run the development server:

### Prerequisites

- Node.js (version 14 or later recommended)
- A supported database (PostgreSQL, MySQL, etc.) for Prisma

1. Clone the repository
   
2. Navigate into the project directory and run:
   ```cd cs-project-2024```
   then
   ```npm install```
   
3. Copy the .env.example file to .env and update it with your database connection string and any other necessary environment variables.
   DATABASE_URL="your-database-url"
   NEXTAUTH_URL="http://localhost:3000"

4. Initialize Prisma:
   - run ```npm install prisma -D```
   - run ```npx prisma migrate dev --name init``` (Make sure you have successfully followed step 3 or this will not work)
   - then run ```npx prisma generate```

6. Then just run npm run dev to start the server and click on the link to be brought to the homepage.






