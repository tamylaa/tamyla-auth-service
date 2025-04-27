<<<<<<< HEAD
# Tamyla Auth Service

A standalone, production-ready authentication microservice for the Tamyla platform. Provides OTP-based (email & WhatsApp) authentication, JWT session management, and a simple REST API for integration with any frontend or microservice.

## Features
- Stateless OTP authentication (email/WhatsApp)
- JWT token issuance and validation
- Minimal user profile storage
- Secure, scalable, and extensible
- Ready for integration with multiple apps/modules

## Tech Stack
- Node.js + Express
- Redis (for OTP storage/expiry)
- PostgreSQL or MongoDB (for user profiles)
- Nodemailer (email OTP), Twilio/MessageBird (WhatsApp OTP)
- Docker, dotenv, ESLint, Jest

## API Endpoints
- `POST /api/auth/request-otp` — Request OTP (email/WhatsApp)
- `POST /api/auth/verify-otp` — Verify OTP and login
- `POST /api/auth/logout` — Logout (JWT invalidation)
- `GET /api/auth/user` — Get current user profile

## Quickstart
1. `npm install`
2. Configure `.env` with Redis, DB, and OTP provider credentials
3. `npm run dev` (development) or `npm run start` (production)

---

See [AUTH_MODULE_BLUEPRINT.md](../trading-portal/AUTH_MODULE_BLUEPRINT.md) for the full technical blueprint and roadmap.

---

## Folder Structure
- `/src` — All source code
- `/src/routes` — REST API endpoints
- `/src/services` — OTP, user, and token logic
- `/src/db` — Database models and connection
- `/src/utils` — Helpers (rate limiting, validation, etc.)
- `/tests` — Unit and integration tests

---

## Principles
- High reuse, loose coupling, security by design, simplicity, and holistic testability.
=======
# tamyla-auth-service
Authentication Service for trading portal and other applications
>>>>>>> 58facb30f718f0dcb55dedcc771f89a0f1c1db95
