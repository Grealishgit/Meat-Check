# Meat-Check

Meat-Check is a project consisting of a backend server and a mobile application. The backend is built with Node.js, while the mobile app is developed using React Native (with Expo).

## Project Structure

```
Meat-Check/
├── backend/
│   ├── package.json
│   ├── server.js
│   └── .gitignore
└── mobile/
    ├── app.json
    ├── package.json
    ├── tsconfig.json
    ├── README.md
    ├── app/
    ├── assets/
    ├── components/
    ├── constants/
    ├── hooks/
    └── scripts/
```

## Backend
- **Location:** `backend/`
- **Tech Stack:** Node.js
- **Entry Point:** `server.js`
- **Dependencies:** See `backend/package.json`
- **Environment Variables:** Use a `.env` file (see `.gitignore`)

## Mobile App
- **Location:** `mobile/`
- **Tech Stack:** React Native (Expo, TypeScript)
- **Entry Point:** `app/_layout.jsx`
- **Dependencies:** See `mobile/package.json`
- **Project Configuration:** `app.json`, `tsconfig.json`

## Getting Started

### Backend
1. Navigate to the `backend` directory:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the server:
   ```sh
   npm start
   ```

### Mobile App
1. Navigate to the `mobile` directory:
   ```sh
   cd mobile
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the Expo development server:
   ```sh
   npx expo start
   ```

## Folder Descriptions
- `backend/`: Node.js backend server
- `mobile/`: React Native mobile app (Expo)

## License
Specify your license here.

---
*By Hunter*
