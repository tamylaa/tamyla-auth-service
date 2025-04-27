# Technical Blueprint: Centralized Authentication & User Profiles

## 1. Prioritized Capability: OTP-Based Authentication (Email & WhatsApp)

### **Why this first?**
- Simple, global, and user-friendly for both Indian and international audiences.
- No password management required; reduces friction and increases adoption.

### **Core User Flows**
1. **User enters email or WhatsApp number.**
2. **System sends a One-Time Password (OTP)** via email or WhatsApp (using a provider like Twilio, MessageBird, or a transactional email service).
3. **User enters OTP.**
4. **System verifies OTP and issues a JWT token.**
5. **User is authenticated and can access the platform.**

### **Key Features (MVP)**
- Stateless OTP generation and validation (with expiry, e.g., 5 minutes)
- Rate limiting and brute-force protection
- Minimal user profile: email/phone, country, role
- JWT token issuance for session
- API endpoints for request/verify OTP, login, logout, get user info
- Observability: log all OTP requests, successes, failures

---

## 2. Architecture Overview

- **Type:** Standalone microservice (independent deployment)
- **Tech Stack:**
  - Backend: Node.js (Express or Fastify) or Python (FastAPI)
  - Database: Redis (for OTP storage/expiry) + PostgreSQL or MongoDB (for user profiles)
  - Messaging: Email (SendGrid, SES, etc.) and WhatsApp (Twilio, MessageBird)
  - API: REST (OpenAPI/Swagger)
- **Frontend Widget:** Simple React login form (email/WhatsApp input, OTP input)

---

## 3. API Endpoints (Sample)

| Method | Endpoint              | Description                      |
|--------|-----------------------|----------------------------------|
| POST   | /api/auth/request-otp | Request OTP (email/WhatsApp)     |
| POST   | /api/auth/verify-otp  | Verify OTP and login             |
| POST   | /api/auth/logout      | Logout (JWT invalidation)        |
| GET    | /api/auth/user        | Get current user profile         |

---

## 4. Security & Observability
- OTPs expire quickly and are hashed in storage
- Rate limiting per user/IP
- All requests/audits logged (success, failure, abuse)
- GDPR-compliant data handling

---

## 5. Extensibility
- Add passwordless magic links (email/SMS) as a future option
- Add RBAC, OAuth2 SSO, or social logins later if needed
- Extend user profile schema as platform grows

---

## 6. Integration Pattern
- All other modules validate JWT and fetch user info via `/api/auth/user`
- Auth widget can be embedded in any frontend module

---

## 7. Next Steps
1. Scaffold backend service (Node.js or Python)
2. Integrate with email/WhatsApp provider for OTP delivery
3. Build the React login/OTP widget
4. Document API and integration steps for other modules

---

*This document will evolve as the module is implemented and integrated with the broader platform.*

---

## [Appendix] - Full Technical Blueprint (for future expansion)

- [ ] Email/password login (optional, for admins)
- [ ] Social login (Google, LinkedIn, etc.)
- [ ] SSO/OAuth2 provider for other modules
- [ ] Role management UI
- [ ] Audit logs dashboard
- [ ] Admin panel for user management

---

**Prioritization:**
- OTP-based login (email/WhatsApp) is the first and only required capability for MVP.
- All other features are optional and can be added as the platform matures.
