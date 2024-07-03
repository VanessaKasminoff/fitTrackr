# fitTrackr

## Description
Welcome to the fitTrackr project! This application is designed to help users manage their fitness routines, meal plans, and track their progress. Developed by a passionate team of four studious developers, the project leverages modern web technologies to provide a seamless user experience.

### Frontend:
- **Built with React**: Utilizing JSX components for modular scalability and reusability.
- **Styled with SCSS**: Comprehensive design for a responsive and interactive user interface.
- **Dynamic Pages**: Includes landing page, login, signup, dashboard, and fitness page with custome styling for each.

### Backend:
- **Powered by Node.js and Express.js**: Handles API requests and data management.
- **Database**: Structured in SQL with tables like `Exercise` to manange fitness data.
- **User Authentication**: Secure access using JWT (JSON Web Tokens).
- **Password Hashing**: Implemented with bcrypt for secure password management.

## Features 
- **Customizable Workout Routines**: Create, update, and manage workout routines.
- **Interactive UI Components**: Engaging and responsive design.
- **Secure User Authentication**: Protects user data and access.
- **Comprehensive Meal Tracking**: Manage meal plans and fitness data.

# Project Installation

## Client Installation

1. Navigate to the client directory and install dependencies:
   ```bash
   $ cd client && npm install
   > client@1.0.0 postinstall
   > webpack --mode production

   added 1375 packages, and audited 1376 packages in 18s

   225 packages are looking for funding
     run `npm fund` for details
   ```
2. Build the client application:
   ```bash
   $ npm run build
   > client@1.0.0 build
   > webpack --mode production

   Hash: a3f4a7e5cfcfdbd6c7e1
   Version: webpack 4.44.2
   Time: 8194ms
   Build at: 01/01/2024 10:12:34 AM
   Asset      Size  Chunks              Chunk Names
   main.js 2.34 MiB    main  [emitted]   main
   ```
## Server Installation

1. Navigate to the server directory and install dependencies:

    ```bash
    $ cd server && npm install
    added 350 packages, and audited 351 packages in 12s

    50 packages are looking for funding
      run `npm fund` for details
    ```

2. Run database migrations:

    ```bash
    $ npm run db:migrate
    > server@1.0.0 db:migrate
    > sequelize db:migrate

    Sequelize CLI [Node: 14.17.0, CLI: 6.2.0, ORM: 6.3.5]

    Loaded configuration file "config/config.js".
    Using environment "development".
    == 20210703010127-create-user: migrating =======
    == 20210703010127-create-user: migrated (0.040s)
    ```

3. Seed the database:

    ```bash
    $ npm run db:seed
    > server@1.0.0 db:seed
    > sequelize db:seed:all

    Sequelize CLI [Node: 14.17.0, CLI: 6.2.0, ORM: 6.3.5]

    Loaded configuration file "config/config.js".
    Using environment "development".
    == 20210703010127-demo-user: seeding =======
    == 20210703010127-demo-user: seeded (0.020s)
    ```

4. Start the server:

    ```bash
    $ npm run start
    > server@1.0.0 start
    > node app.js

    Server is running on http://localhost:3000
    ```
# API Documentation

## Base URL 
`https://fittrackr-j3y8.onrender.com/`

## API Routes

### Exercises

| Method | Endpoint               | Description                        | Request Body                                                                                           | Response                             |
|--------|------------------------|------------------------------------|--------------------------------------------------------------------------------------------------------|--------------------------------------|
| GET    | `/api/exercises`       | Retrieves a list of all workouts.  | None                                                                                                   | JSON array of workout objects        |
| POST   | `/api/exercises`       | Creates a new workout.             | ```json { "exercise_name": "string", "description": "string", "difficulty_level": "string", "reps": "integer", "time_limit": "string" }``` | The newly created workout object     |
| GET    | `/api/exercises/:id`   | Retrieves a specific workout by ID.| None                                                                                                   | The workout object with the specified ID, or 404 if not found |
| DELETE | `/api/exercises/:id`   | Deletes a workout by ID.           | None                                                                                                   | Status message indicating success or failure (204 if successful) |

### Users

| Method | Endpoint        | Description                             | Request Body                                                                                             | Response                           |
|--------|-----------------|-----------------------------------------|----------------------------------------------------------------------------------------------------------|------------------------------------|
| GET    | `/api/users`    | Fetches a list of all users.            | None                                                                                                     | JSON array of user objects         |
| POST   | `/api/users`    | Creates a new user.                     | ```json { "firstName": "string", "lastName": "string", "email": "string", "age": "integer", "passwordDigest": "string", "gender": "string" }``` | The newly created user object      |

### Authentication

| Method | Endpoint                       | Description                                    | Request Body                                                                                          | Response                              |
|--------|--------------------------------|------------------------------------------------|-------------------------------------------------------------------------------------------------------|---------------------------------------|
| POST   | `/api/authentication`          | Authenticates a user and generates a JWT token.| ```json { "email": "string", "password": "string" }```                                                | JSON object containing the JWT token  |
| GET    | `/api/authentication/profile`  | Retrieves the current user’s profile using JWT.| Headers: `Authorization: Bearer <token>`                                                             | The profile of the currently authenticated user, or 401 if token is invalid or missing |

# Database Documentation 

## Tables

### Exercise Table

| Column            | Data Type          | Description                             |
|-------------------|---------------------|-----------------------------------------|
| `id`              | `INT`               | The unique identifier for each exercise. |
| `exercise_name`   | `VARCHAR(255)`      | The name of the exercise.               |
| `description`     | `TEXT`              | A detailed description of the exercise. |
| `difficulty_level`| `VARCHAR(255)`      | The difficulty level of the exercise.   |
| `reps`            | `INT`               | The number of repetitions required.     |
| `time_limit`      | `VARCHAR(255)`      | The time limit for the exercise, if applicable. |

### Example SQL

Here’s an example SQL statement to create the `Exercises` table:

```sql
CREATE TABLE Exercises (
    id INT PRIMARY KEY AUTO_INCREMENT,
    exercise_name VARCHAR(255) NOT NULL,
    description TEXT,
    difficulty_level VARCHAR(255),
    reps INT,
    time_limit VARCHAR(255)
);
```

### Explanation:
- **`id`**: Integer type, typically used as a primary key with auto-increment for unique identification of each record.
- **`exercise_name`**: A variable character field with a maximum length of 255 characters to store the name of the exercise.
- **`description`**: Text field to provide detailed information about the exercise.
- **`difficulty_level`**: Variable character field for the difficulty level of the exercise.
- **`reps`**: Integer type to specify the number of repetitions.
- **`time_limit`**: Variable character field to indicate any time constraints associated with the exercise.

## Models

### User Model

```javascript
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    age: DataTypes.SMALLINT,
    passwordDigest: DataTypes.STRING,
    gender: {
      type: DataTypes.ENUM('male', 'female', 'non-binary'),
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
```
### Fields 

- `firstName` (DataTypes.STRING): The first name of the user.
- `lastName` (DataTypes.STRING): The last name of the user.
- `email` (DataTypes.STRING): The email address of the user.
- `age` (DataTypes.SMALLINT): The age of the user.
- `passwordDigest` (DataTypes.STRING): The hashed password of the user.
- `gender` (DataTypes.ENUM): The gender of the user, which can be 'male', 'female', or 'non-binary'. This field is required (`allowNull: false`).

## Future plans
- Admin user for login.
- Account deletion
- Customizable meal plans.
- Customizable coaching plans.
- Set up forgot password functionality.
- additaional styling such as animations and more interactivity on pages.
- Social Media content.

## Contributing
We welcome contributors from the community! If you have suggestions or improvements, please follow these steps:
1. Fork the repository.
2. Create a new branchfor your changes.
3. Commit your changes and push to your fork.
4. Create a pull request with a detailed description of your changes.

## License
This project is licensed under the MIT License - see the License for details.
