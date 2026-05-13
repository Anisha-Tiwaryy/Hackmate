# 🚀 HackMate

**HackMate** is a full-stack MERN platform for students to form and join **college-verified hackathon teams** — with real-time chat, role-based access, and a full application workflow.

![Status](https://img.shields.io/badge/status-in%20progress-yellow)
![Stack](https://img.shields.io/badge/stack-MERN-blue)
![Auth](https://img.shields.io/badge/auth-Firebase-orange)
![Realtime](https://img.shields.io/badge/realtime-Socket.io-black)
![CI/CD](https://img.shields.io/badge/CI%2FCD-GitHub%20Actions-green)
![License](https://img.shields.io/badge/license-MIT-lightgrey)

---

## ✨ Features

- 🎓 **College Email Verification** — Firebase Auth validates `.edu` / college domains so only real students can join
- 🔐 **Role-Based Access** — Firebase Admin SDK enforces team leader vs. member permissions
- 👤 **Developer Profiles** — Showcase skills, role preferences, and past hackathon history
- 🏆 **Hackathon Listings** — Browse and filter hackathons by theme, date, and platform
- 📋 **Custom Application Forms** — Applicants list skills and motivation; team leaders review and accept/reject
- 💬 **Real-Time Group & Private Chat** — Socket.IO with admin-controlled message deletion
- 📜 **Certificate Uploads & History** — Upload completion certificates; persistent post-event records
- 🔍 **Skill-Based Filtering** — Find teammates by skill tags (React, ML, UI/UX, etc.)

---

## 🛠️ Tech Stack

| Layer       | Technology                                      |
|-------------|--------------------------------------------------|
| Frontend    | React.js, TypeScript, Tailwind CSS               |
| Backend     | Node.js, Express.js                              |
| Database    | MongoDB, Mongoose                                |
| Auth        | Firebase Authentication + Admin SDK              |
| Real-Time   | Socket.IO                                        |
| CI/CD       | GitHub Actions                                   |
| Deployment  | Render (backend), Vercel (frontend)              |

---

## 📁 Project Structure

```
hackmate/
├── .github/
│   └── workflows/
│       └── ci.yml              # GitHub Actions CI pipeline
├── client/                     # React + TypeScript frontend
│   ├── public/
│   └── src/
│       ├── components/
│       │   ├── Auth/           # Login, Signup, ProtectedRoute
│       │   ├── Team/           # TeamCard, CreateTeam, ApplicationForm
│       │   ├── Chat/           # GroupChat, PrivateChat
│       │   └── Dashboard/      # Main dashboard view
│       ├── pages/              # Home, Teams, Profile
│       ├── hooks/              # Custom React hooks
│       ├── context/            # AuthContext, global state
│       ├── utils/              # API helpers, constants
│       └── firebase.ts         # Firebase config + initialization
├── server/                     # Node.js + Express backend
│   ├── config/
│   │   └── db.js               # MongoDB connection
│   ├── controllers/            # teamController, applicationController, chatController
│   ├── models/                 # User, Team, Application, Message schemas
│   ├── middleware/
│   │   └── verifyToken.js      # Firebase Admin SDK token verification
│   ├── routes/                 # teamRoutes, applicationRoutes, chatRoutes
│   └── socket/
│       └── socketHandler.js    # Socket.IO event logic
├── docs/
│   └── TESTING.md              # 20+ manual test cases
├── .env.example                # Environment variable template
├── .gitignore
└── README.md
```

---

## 🧪 Testing

Manual test cases documented covering end-to-end user flows:

- ✅ College email verification (valid, invalid domains)
- ✅ Firebase Auth — signup, login, token expiry
- ✅ Protected route access (with/without valid token)
- ✅ Team creation, editing, deletion (owner vs. non-owner)
- ✅ Application submission, duplicate prevention
- ✅ Accept/reject workflow and status updates
- ✅ Real-time chat — delivery, reconnection, admin deletion
- ✅ Certificate upload and hackathon history persistence
- ✅ Hackathon listing filters and search edge cases

> Full test case documentation: [`docs/TESTING.md`](docs/TESTING.md)

---

## ⚙️ Getting Started

### Prerequisites
- Node.js v18+
- MongoDB (local or Atlas)
- Firebase project (Authentication + Admin SDK enabled)

### Installation

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/hackmate.git
cd hackmate

# Install server dependencies
cd server && npm install

# Install client dependencies
cd ../client && npm install
```

### Environment Variables

Copy `.env.example` and fill in your values:

```bash
cp .env.example .env
```

**Server `.env`**
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
CLIENT_URL=http://localhost:3000
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_CLIENT_EMAIL=your_client_email
FIREBASE_PRIVATE_KEY=your_private_key
```

**Client `.env`**
```env
VITE_API_URL=http://localhost:5000
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
```

### Run Locally

```bash
# Start backend (from /server)
npm run dev

# Start frontend (from /client)
npm start
```

App runs at `http://localhost:3000`

---

## 🔁 CI/CD

GitHub Actions pipeline runs on every push to `main` and `dev` branches:
- ✅ Dependency install
- ✅ TypeScript type check
- ✅ ESLint
- ✅ Build verification

See [`.github/workflows/ci.yml`](.github/workflows/ci.yml)

---

## 🗺️ Roadmap

- [x] Firebase Auth with college email verification
- [x] Role-based access (Firebase Admin SDK)
- [x] Team creation and application workflow
- [x] Real-time chat (Socket.IO)
- [x] Certificate uploads and hackathon history
- [x] Manual test suite (20+ test cases)
- [x] GitHub Actions CI/CD pipeline
- [ ] TypeScript migration (in progress)
- [ ] Email notifications
- [ ] Skill-based team recommendation engine
- [ ] Live deployed demo

---

## 🚀 Deployment

| Service    | Platform          |
|------------|-------------------|
| Frontend   | Vercel            |
| Backend    | Render / Railway  |
| Database   | MongoDB Atlas     |
| Auth       | Firebase Console  |

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 👩‍💻 Author

**Anisha Tiwary**  
B.Tech — Electronics and Computer Science, KIIT University  
[LinkedIn](https://linkedin.com/in/YOUR_LINKEDIN) · [GitHub](https://github.com/YOUR_USERNAME)
