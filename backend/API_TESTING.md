# API Testing Guide

## Authentication Endpoints

### 1. User Signup
```bash
POST http://localhost:5000/api/users/signup
Content-Type: application/json

{
    "email": "test@example.com",
    "password": "password123"
}
```

### 2. User Login
```bash
POST http://localhost:5000/api/users/login
Content-Type: application/json

{
    "email": "test@example.com",
    "password": "password123"
}
```

### 3. Get User Profile (Protected)
```bash
GET http://localhost:5000/api/users/profile
Authorization: Bearer YOUR_JWT_TOKEN
```

### 4. Verify Token (Protected)
```bash
GET http://localhost:5000/api/users/verify-token
Authorization: Bearer YOUR_JWT_TOKEN
```

## Environment Variables Required

Create a `.env` file in the backend directory with:
```
MONGO_URI=mongodb://localhost:27017/meat-check
JWT_SECRET=your_very_secure_jwt_secret_key_here
PORT=5000
```

## How to Test

1. Start your MongoDB server
2. Create a `.env` file with the required variables
3. Run `npm run dev` to start the server
4. Use a tool like Postman or curl to test the endpoints
5. For protected routes, include the JWT token in the Authorization header as "Bearer YOUR_TOKEN"

## Expected Responses

### Successful Signup:
```json
{
    "message": "User created successfully",
    "user": {
        "id": "user_id",
        "email": "test@example.com",
        "createdAt": "2025-01-01T00:00:00.000Z"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### Successful Login:
```json
{
    "message": "Login successful",
    "user": {
        "id": "user_id",
        "email": "test@example.com",
        "createdAt": "2025-01-01T00:00:00.000Z"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```
