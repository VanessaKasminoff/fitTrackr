# fitTrackr

## Description
Welcome to the fitTrackr project! This application is designed to help users manage their fitness routines, meal plans, and track their progress. Developed by a passionate team of four studious developers, the project leverages modern web technologies to provide a seamless user experience.

### Frontend:
- Built with React using jsx components for modular scalability and reusability.
- Styled with SCSS for comprehensive design.

### Backend:
- Powered by Node.js and Express.js.
- Handles API requests and data management .

## Features 
- User authentication for secure access utilizing jason web token'jwt'.
- password hashing with bcrypt.
- Interactive UI components and responsive design.
- Customizable workout routines.

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

## Future plans
- Admin user for login.
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
