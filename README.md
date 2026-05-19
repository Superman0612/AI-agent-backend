# EduQuest AI — MMI Interview Engine

A production-grade AI-powered Multiple Mini Interview (MMI) simulator for global medical school admissions.

---

## 📁 Project Structure

```
eduquest/
├── backend/                    # Node.js + Express API
│   ├── server.js               # Entry point
│   ├── .env.example            # Environment template
│   ├── package.json
│   ├── config/
│   │   ├── modeConfig.js       # Mode timing + behavior config
│   │   └── questionBank.js     # 20 static MMI questions (5 per mode)
│   ├── models/
│   │   ├── User.js             # Mongoose User schema
│   │   └── Session.js          # Mongoose Session + Answer schema
│   ├── routes/
│   │   ├── interviewRoutes.js  # POST /start, /answer, /complete, GET /result
│   │   ├── evaluateRoutes.js   # POST /answer, /session, /interrupt
│   │   └── questionRoutes.js   # GET /:mode, POST /generate
│   └── services/
│       ├── llmService.js       # OpenAI GPT-4o integration
│       └── scoringService.js   # Score calculation & aggregation
│
└── frontend/                   # Next.js 14 App Router
    ├── next.config.js
    ├── tailwind.config.js
    ├── tsconfig.json
    └── src/
        ├── app/
        │   ├── layout.tsx          # Root layout
        │   ├── globals.css         # Global styles + Tailwind
        │   ├── page.tsx            # Landing page (mode select + registration)
        │   ├── interview/
        │   │   └── page.tsx        # Live interview screen
        │   └── result/
        │       └── page.tsx        # Results + AI feedback page
        ├── components/
        │   ├── interview/
        │   │   ├── QuestionCard.tsx
        │   │   ├── TimerDisplay.tsx
        │   │   ├── InterruptionBanner.tsx
        │   │   └── ProgressStepper.tsx
        │   ├── media/
        │   │   ├── CameraPanel.tsx
        │   │   └── PermissionPrompt.tsx
        │   └── ui/
        │       ├── ScoreChart.tsx
        │       └── ScoreMeter.tsx
        ├── lib/
        │   ├── api.ts              # Axios API helpers
        │   ├── useMedia.ts         # Camera/mic/screen hook
        │   └── useTimer.ts         # Countdown timer hook
        └── types/
            └── index.ts            # Shared TypeScript types
```

---

## ⚡ Quick Start

### Prerequisites
- Node.js 18+
- MongoDB (local or Atlas)
- OpenAI API key

---

### 1. Clone & Setup

```bash
git clone <repo>
cd eduquest
```

---

### 2. Backend Setup

```bash
cd backend
npm install

# Create .env file
cp .env.example .env
```

Edit `backend/.env`:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/eduquest
OPENAI_API_KEY=sk-your-key-here
NODE_ENV=development
```

Start backend:
```bash
npm run dev       # development (nodemon)
# or
npm start         # production
```

Backend runs at: `http://localhost:5000`

---

### 3. Frontend Setup

```bash
cd frontend
npm install

# Create .env.local
cp .env.local.example .env.local
```

`frontend/.env.local`:
```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

Start frontend:
```bash
npm run dev
```

Frontend runs at: `http://localhost:3000`

---

## 🧪 API Reference

### Interview

| Method | Endpoint | Body | Description |
|--------|----------|------|-------------|
| POST | `/api/interview/start` | `{name, email, mode}` | Create user + session, return questions |
| POST | `/api/interview/answer` | `{sessionId, questionId, answerText, timeSpent}` | Save answer |
| POST | `/api/interview/complete` | `{sessionId}` | Mark session done |
| GET | `/api/interview/result/:id` | — | Fetch session data |

### Evaluation

| Method | Endpoint | Body | Description |
|--------|----------|------|-------------|
| POST | `/api/evaluate/session` | `{sessionId}` | Evaluate all answers + overall feedback |
| POST | `/api/evaluate/answer` | `{sessionId, questionId}` | Evaluate single answer |
| POST | `/api/evaluate/interrupt` | `{sessionId, partialAnswer, mode}` | Generate AI interruption |

### Questions

| Method | Endpoint | Body | Description |
|--------|----------|------|-------------|
| GET | `/api/questions/:mode` | — | List static questions for mode |
| POST | `/api/questions/generate` | `{mode, baseQuestionId}` | AI-generate question variant |

---

## 🌍 Interview Modes

| Mode | Reading | Response | Interruptions | Focus |
|------|---------|----------|---------------|-------|
| 🇨🇦 Canada | 2 min | 6 min | Deep reasoning follow-ups | Ethics + Critical thinking |
| 🇬🇧 UK | 45 sec | 5 min | Clarification prompts | Clarity + NHS context |
| 🇦🇺 Australia | 1 min | 6 min | Emotional patient reactions | Empathy + Roleplay |
| 🇸🇬 Singapore | 1 min | 5 min | None | Academic + Bioethics |

---

## 🎯 AI Evaluation Dimensions

Each answer is scored 0–10 on:

- **Clarity** — Is the answer clear and logical?
- **Structure** — Is it well-organised?
- **Empathy** — Does it show emotional intelligence?
- **Reasoning** — Is the thinking sound and ethical?

Scores are **mode-weighted** (e.g. UK weights Clarity higher; Australia weights Empathy highest).

---

## 📸 Media Features

- Live camera preview (WebRTC)
- Mic level indicator (Web Audio API)
- Screen share toggle
- Graceful permission error handling
- Camera on/off toggle
- Mic mute/unmute

---

## 🔐 Environment Variables

### Backend
```env
PORT=5000                                    # Express server port
MONGODB_URI=mongodb://localhost:27017/eduquest  # MongoDB connection
OPENAI_API_KEY=sk-...                        # OpenAI API key (GPT-4o)
NODE_ENV=development                          # development | production
```

### Frontend
```env
NEXT_PUBLIC_API_URL=http://localhost:5000     # Backend API URL
```

---

## 🧪 Sample Test Flow

1. Open `http://localhost:3000`
2. Enter: Name = `Test Candidate`, Email = `test@med.edu`
3. Select: **UK Mode**
4. Click **Begin Interview**
5. Allow camera/mic permissions (or skip)
6. Read the question during reading phase
7. Type your response in the textarea
8. Click **Next Question** or wait for auto-submit
9. After all questions → redirected to **Results page**
10. AI evaluates and shows radar chart + per-question feedback

---

## 🚀 Production Deployment

### Backend (e.g. Railway / Render)
```bash
# Set environment variables in platform dashboard
# Deploy with: npm start
```

### Frontend (Vercel)
```bash
vercel deploy
# Set NEXT_PUBLIC_API_URL to your production backend URL
```

### MongoDB Atlas
Replace `MONGODB_URI` with your Atlas connection string.

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Next.js 14 (App Router), TypeScript, Tailwind CSS |
| Backend | Node.js, Express 4 |
| Database | MongoDB + Mongoose |
| AI | OpenAI GPT-4o (evaluation), GPT-4o-mini (interruptions) |
| Media | WebRTC, Web Audio API |
| Charts | Recharts (RadarChart, BarChart) |
| Fonts | Playfair Display + DM Sans |
