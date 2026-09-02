# School Management System

A backend API for managing school operations including student and user management, authentication, and role-based access control.

## Project Structure

```
Backend/
├── server.js                 # Entry point
├── package.json             # Dependencies
├── src/
│   ├── app.js              # Express app configuration
│   ├── config/
│   │   └── db.js           # Database configuration
│   ├── controllers/
│   │   ├── auth.controller.js       # Authentication logic
│   │   └── student.controller.js    # Student operations
│   ├── middleware/
│   │   ├── auth.middleware.js       # Authentication verification
│   │   ├── role.middleware.js       # Role-based access control
│   │   └── validate.middleware.js   # Request validation
│   ├── models/
│   │   ├── students.model.js        # Student data model
│   │   └── user.model.js            # User data model
│   ├── routes/
│   │   ├── students.routes.js       # Student endpoints
│   │   └── user.routes.js           # User endpoints
│   └── validation/
│       ├── student.validation.js    # Student validation schemas
│       └── user.validation.js       # User validation schemas
```

## Features

- **User Authentication** - Secure login and registration
- **Student Management** - Create, read, update, and delete student records
- **Role-Based Access Control** - Different permissions for different user roles
- **Input Validation** - Request validation middleware
- **Database Integration** - Configured database connection

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Database setup (configured in `src/config/db.js`)

### Installation

1. Navigate to the Backend directory:
```bash
cd Backend
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables (create a `.env` file if needed)

4. Start the server:
```bash
npm start
```

or with `node`:
```bash
node server.js
```

## API Endpoints

### Authentication Routes
- `POST /api/users/login` - User login
- `POST /api/users/register` - User registration

### Student Routes
- `GET /api/students` - Get all students
- `POST /api/students` - Create a new student
- `GET /api/students/:id` - Get student by ID
- `PUT /api/students/:id` - Update student
- `DELETE /api/students/:id` - Delete student

## Technologies Used

- **Express.js** - Web framework
- **Node.js** - Runtime environment
- **Middleware** - Authentication, validation, and role-based access control

## License

This project is part of the School Management System.
