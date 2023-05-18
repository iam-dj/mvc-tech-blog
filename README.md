![GitHub license](https://img.shields.io/badge/license-MIT-black.svg)

# Blog MVC Homework

## Description

The Blog MVC Homework is a project that implements a blog application using the Model-View-Controller (MVC) architectural pattern. This project was motivated by the need to understand and practice building web applications using MVC principles.

The main goal of this project is to create a blog application that allows users to create, read, update, and delete blog posts. The application solves the problem of managing and organizing blog content in a structured and user-friendly manner.

Through this project, I learned the importance of separating concerns in web development and how MVC can provide a clear and maintainable structure for building complex applications. I also gained experience in working with databases, handling HTTP requests and responses, and implementing CRUD operations.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

To install and run the Blog MVC Homework project locally, follow these steps:

1. Clone the repository to your local machine.
2. Install the required dependencies using the package manager of your choice. For example, if you're using npm, run the command `npm install`.
3. Set up the database configuration by providing the necessary credentials and connection details in the configuration files.
4. Run the database migration scripts to create the required tables and schema.
5. Start the server by running the command `npm start` or `node app.js`.
6. Access the application in your web browser by navigating to `http://localhost:3005`.

Make sure you have the following dependencies installed:

- bcrypt@5.1.0
- connect-session-sequelize@7.1.6
- dotenv@16.0.3
- express@4.18.2
- express-handlebars@7.0.7
- express-session@1.17.3
- mysql2@3.3.1
- sequelize@6.31.1

You can install them by running the command `npm install`  

## Usage

The Blog MVC Homework application provides a user-friendly interface for managing blog posts. Users can perform the following actions:

- Create a new blog post by providing a title and content.
- View existing blog posts and read their content.
- Edit the content of a blog post.
- Delete a blog post.

Here's an example of how to create a new blog post:

1. Access the application in your web browser.
2. Click on the "Create Post" button.
3. Fill in the title and content fields with the desired information.
4. Click on the "Submit" button to create the post.

![Create Post](assets/images/create-post.png)

For more detailed instructions and examples of using the Blog MVC Homework application, please refer to the documentation or help section within the application itself.

## Credits

This project was developed by DJ (AKA - iam-dj or Dexter Jules).

## License

MIT License 
Copyright (c) 2023 DJ (AKA - iam-dj or Dexter Jules) 
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: 
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. 
THE SOFTWARE IS PROVIDED "AS IS",