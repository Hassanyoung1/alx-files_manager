# Files Manager - Back-End Project

## Curriculum Overview
- **Short Specializations:** Back-end, JavaScript, ES6, NoSQL, MongoDB, Redis, NodeJS, ExpressJS, Kue
- **Average Score:** 73.15%
- **Project Weight:** 1

## Team
- Goodnews Essien
- Olaoluwa Hassan

## Timeline
- **Start Date:** May 9, 2024, 6:00 AM
- **End Date:** May 16, 2024, 6:00 AM
- **Checker Release:** May 11, 2024, 12:00 AM
- **Manual QA Review:** Request upon project completion
- **Auto Review:** At the deadline

## Project Summary
This project encapsulates the back-end trimester's learning outcomes. It aims to build a simple file management platform with features like user authentication, file listing, uploading, permission setting, and background processing.

## Features
- User authentication via token
- Listing all files
- Uploading new files
- Changing file permissions
- Viewing files and generating thumbnails for images

## Implementation Liberties
- Freedom to implement additional features
- Code can be split into multiple files (utilize utils folder)

## Resources
- [Node JS Getting Started](#)
- [Process API Doc](#)
- [Express Getting Started](#)
- [Mocha Documentation](#)
- [Nodemon Documentation](#)
- [MongoDB](#)
- [Bull](#)
- [Image Thumbnail](#)
- [Mime-Types](#)
- [Redis](#)

## Learning Objectives
Post-completion, you should be able to discuss the following without assistance:
- Creating an API with Express
- User authentication mechanisms
- Data storage in MongoDB
- Temporary data handling with Redis
- Setting up and using a background worker

## Requirements
- Editors: vi, vim, emacs, Visual Studio Code
- Node version: 12.x.x
- All files must end with a new line
- Include a README.md at the project's root
- Code should use the `.js` extension
- ESLint will be used for linting

## Setup Files
- `package.json` - [View Content](#)
- `.eslintrc.js` - [View Content](#)
- `babel.config.js` - [View Content](#)

## Installation
Run `$ npm install` to install the necessary node packages.

## Tasks
1. **Redis Utils**
   - Implement Redis client with error display and basic command functions.
2. **MongoDB Utils**
   - Create MongoDB client with connection status checks and user/file count functions.
3. **First API**
   - Set up the Express server and define `/status` and `/stats` endpoints.
4. **Create a New User**
   - Add user creation functionality with email and password validation.
5. **Authenticate a User**
   - Implement user sign-in with token generation and sign-out endpoints.
6. **First File**
   - Create file upload functionality with local storage and database entry.
7. **Get and List File**
   - Retrieve file information with pagination and specific file data based on user token.
8. **File Publish/Unpublish**
   - Add endpoints to change the public status of files.
9. **File Data**
   - Implement file content retrieval with MIME-type support.
