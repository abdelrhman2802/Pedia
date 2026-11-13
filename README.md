# PediaAtlas

Undergraduate pediatrics curriculum (19 chapters, 180+ topics), Visual Lab and MCQ bank. Next.js 16 · React 19 · Tailwind 4 · Postgres (Drizzle).
Postgres only stores quiz attempts, bookmarks and topic notes per device. The curriculum itself is static.

## Before you deploy
1. Add `public/images/hero.jpg` and `public/images/qbank.jpg` (they are not in the repo).
2. Copy `.env.example` to `.env` and fill in `DATABASE_URL` and `NEXT_PUBLIC_SITE_URL`.
3. Create the tables once: `npm run db:push` (with `DATABASE_URL` set).

## Option A: Vercel + Neon/Supabase (easiest)
1. Create a Postgres database and copy its connection string (keep `?sslmode=require`).
2. Push this folder to GitHub and import it in Vercel.
3. Set environment variables: `DATABASE_URL`, `NEXT_PUBLIC_SITE_URL`, `PG_POOL_MAX=1`.
4. Run `DATABASE_URL=... npm run db:push` from your machine, then deploy.

## Option B: Docker (Render, Railway, Fly, a VPS)
```bash
docker compose up --build        # local test with its own Postgres, http://localhost:3000
docker build --build-arg NEXT_PUBLIC_SITE_URL=https://your-domain -t pediaatlas .
docker run -p 3000:3000 -e DATABASE_URL=... pediaatlas
```
`db/init.sql` creates the tables automatically in compose. On a managed database run `npm run db:push` once.

## Checks
- `GET /api/health` returns `{ ok: true }` when the database is reachable (used by the Docker healthcheck).
- `npm run typecheck`, `npm run lint`, `npm run build`.
