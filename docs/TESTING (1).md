# 🧪 HackMate — Manual Test Case Documentation

This document covers end-to-end manual test cases for HackMate's core user flows.

---

## Test Environment
- **Frontend:** React + TypeScript (localhost:3000)
- **Backend:** Express + MongoDB (localhost:5000)
- **Auth:** Firebase Authentication + Admin SDK
- **Tools:** Postman (API), Browser DevTools, Firebase Console

---

## 1. College Email Verification & Firebase Auth

| TC# | Test Case | Steps | Expected Result | Status |
|-----|-----------|-------|-----------------|--------|
| TC01 | Register with valid college email | Sign up using a `.edu` or recognised college domain | Account created, email verification sent | ✅ Pass |
| TC02 | Register with personal email (Gmail/Yahoo) | Sign up using `@gmail.com` | Error: "Please use your college email address" | ✅ Pass |
| TC03 | Login with correct Firebase credentials | Enter valid email + password | Firebase ID token issued, redirected to dashboard | ✅ Pass |
| TC04 | Login with wrong password | Correct email, wrong password | Firebase error: "Wrong password" | ✅ Pass |
| TC05 | Access protected route without token | Hit `/api/teams` with no Authorization header | 401 Unauthorized | ✅ Pass |
| TC06 | Access protected route with expired token | Send an expired Firebase ID token | 401: "Invalid or expired token" | ✅ Pass |
| TC07 | Token refresh on session resume | Reload app after token expires | Firebase silently refreshes token, user stays logged in | ✅ Pass |

---

## 2. Team Creation & Management

| TC# | Test Case | Steps | Expected Result | Status |
|-----|-----------|-------|-----------------|--------|
| TC08 | Create team with all required fields | Fill team name, description, skill tags → submit | Team created and visible in listings | ✅ Pass |
| TC09 | Create team with missing required field | Leave team name empty → submit | Validation error shown inline | ✅ Pass |
| TC10 | Edit team details as owner | Update description → save | Changes reflected immediately | ✅ Pass |
| TC11 | Delete team as owner | Click delete → confirm | Team removed from listings | ✅ Pass |
| TC12 | Non-owner attempts to edit team | Send edit request with different user token | 403 Forbidden | ✅ Pass |

---

## 3. Team Application Flow

| TC# | Test Case | Steps | Expected Result | Status |
|-----|-----------|-------|-----------------|--------|
| TC13 | Apply to open team | Click "Apply" → submit motivation + skills | Application status set to Pending | ✅ Pass |
| TC14 | Apply to same team twice | Attempt second application to same team | Error: "Already applied" | ✅ Pass |
| TC15 | Owner accepts application | Navigate to applications → click Accept | Status → Accepted | ✅ Pass |
| TC16 | Owner rejects application | Click Reject on pending application | Status → Rejected | ✅ Pass |
| TC17 | Non-owner views applications | Access applications panel as member | View-only, no accept/reject controls | ✅ Pass |

---

## 4. Real-Time Chat (Socket.IO)

| TC# | Test Case | Steps | Expected Result | Status |
|-----|-----------|-------|-----------------|--------|
| TC18 | Send group message | Type and send in team chat room | Message appears instantly for all room members | ✅ Pass |
| TC19 | Admin deletes a message | Admin clicks delete on a message | Message removed for all users in room | ✅ Pass |
| TC20 | Non-member accesses chat URL directly | Navigate to team chat URL without membership | Redirected — access denied | ✅ Pass |
| TC21 | Message delivery on reconnect | Disconnect → reconnect → check messages | Messages from offline period visible | ✅ Pass |
| TC22 | Private message delivery | Send private message to specific user | Message received only by recipient | ✅ Pass |

---

## 5. Certificate Upload & Hackathon History

| TC# | Test Case | Steps | Expected Result | Status |
|-----|-----------|-------|-----------------|--------|
| TC23 | Upload certificate after hackathon | Upload PDF/image certificate | File stored, visible in user's hackathon history | ✅ Pass |
| TC24 | View hackathon history | Navigate to profile → history tab | All past hackathons with team + certificate listed | ✅ Pass |

---

## 6. Hackathon Listings & Search

| TC# | Test Case | Steps | Expected Result | Status |
|-----|-----------|-------|-----------------|--------|
| TC25 | Filter by skill tag | Apply "Machine Learning" filter | Only ML-tagged hackathons shown | ✅ Pass |
| TC26 | Search with no results | Enter gibberish in search bar | "No results found" message shown | ✅ Pass |

---

*Last updated: 2026 | Maintained by Anisha Tiwary*
