# StaffSync - Employee Management System

StaffSync is a full-stack MERN application that provides a comprehensive solution for managing employee records. It allows for Create, Read, Update, and Delete (CRUD) operations in a clean, modern, and responsive user interface.

## Features

- **Create, Read, Update, Delete (CRUD)**: Full-featured employee data management.
- **Employee Dashboard**: View all employees in a sortable and searchable table.
- **Detailed Profile View**: See comprehensive details for each employee.
- **Responsive Design**: A seamless experience on both desktop and mobile devices, built with Tailwind CSS.
- **Robust Backend**: A secure and efficient backend powered by Node.js and Express.
- **Data Validation**: Server-side validation to ensure data integrity.

## Tech Stack

### Backend

- **Runtime**: [Node.js](https://nodejs.org/)
- **Framework**: [Express.js](https://expressjs.com/)
- **Database**: [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/) ODM
- **Middleware**: [CORS](https://www.npmjs.com/package/cors), [dotenv](https://www.npmjs.com/package/dotenv)
- **Validation**: [validator.js](https://www.npmjs.com/package/validator)

### Frontend

- **Library**: [React.js](https://reactjs.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Routing**: [React Router](https://reactrouter.com/)
- **API Communication**: [Axios](https://axios-http.com/)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v18 or newer)
- npm
- MongoDB (local instance or a cloud-hosted solution like MongoDB Atlas)

### Backend Setup

1.  **Navigate to the backend directory:**

    ```sh
    cd backend
    ```

2.  **Install dependencies:**

    ```sh
    npm install
    ```

3.  **Set up environment variables:**
    Create a `.env` file in the `backend` directory by copying the sample file:

    ```sh
    cp .env.sample .env
    ```

    Update the `.env` file with your configuration:

    ```env
    MONGO_URI="your_mongodb_connection_string"
    ALLOWED_ORIGIN="http://localhost:5173"
    PORT=8000
    ```

4.  **Start the backend server:**
    ```sh
    npm run dev
    ```
    The server will be running on the port specified in your `.env` file (e.g., `http://localhost:8000`).

### Frontend Setup

1.  **Navigate to the frontend directory:**

    ```sh
    cd ../frontend
    ```

2.  **Install dependencies:**

    ```sh
    npm install
    ```

3.  **Set up environment variables:**
    Create a `.env` file in the `frontend` directory by copying the sample file:

    ```sh
    cp .env.sample .env
    ```

    Update the `.env` file with your backend API URL:

    ```env
    VITE_API_URL="http://localhost:8000"
    ```

4.  **Start the frontend development server:**
    ```sh
    npm run dev
    ```
    The application will be available at `http://localhost:5173`.

## API Endpoints

The backend exposes the following RESTful API endpoints for managing employees.

| Method   | Endpoint             | Description                 |
| :------- | :------------------- | :-------------------------- |
| `POST`   | `/api/employees`     | Create a new employee       |
| `GET`    | `/api/employees`     | Get a list of all employees |
| `GET`    | `/api/employees/:id` | Get a single employee by ID |
| `PATCH`  | `/api/employees/:id` | Update an employee by ID    |
| `DELETE` | `/api/employees/:id` | Delete an employee by ID    |

## License

This project is licensed under the MIT License.
