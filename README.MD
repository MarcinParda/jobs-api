<h4 align="center">Jobs API</h4>

## Project Overview 🎉
Project created from John Smigla [tutorial](https://www.freecodecamp.org/news/build-six-node-js-and-express-js/).
Project is a CRUD REST API with authorization and authentication.

## [Live](https://jobs-api-mp.herokuapp.com/) 📍

## Tech/framework used 🔧

| Tech                                                    | Description                              |
| ------------------------------------------------------- | ---------------------------------------- |
| [Express](https://expressjs.com/)                             | Node.js web application framework   |
| [MongoDB](https://www.mongodb.com/)                           | Document-oriented NoSQL database used for high volume data storage.   |
| [Mongoose](https://mongoosejs.com/)                           | Elegant mongodb object modeling for node.js   |


## Screenshots 📺

<p align="center">
    <img src="https://cdn.discordapp.com/attachments/917864818189418576/975471652462796840/unknown.png" alt="Image of Swagger implemantation">
</p>

## Available scripts

| Command                   | Description                   |
| ------------------------- | ----------------------------- |
| `npm run start`           | Open local server             |

## Code Example/Issues 🔍

#### Register User

- Validate - name, email, password - with Mongoose
- Hash Password (with bcryptjs)
- Save User
- Generate Token
- Send Response with Token

#### Login User

- Validate - email, password - in controller
- If email or password is missing, throw BadRequestError
- Find User
- Compare Passwords
- If no user or password does not match, throw UnauthenticatedError
- If correct, generate Token
- Send Response with Token

#### Mongoose Errors

- Validation Errors
- Duplicate (Email)
- Cast Error

#### Security

- helmet
- cors
- xss-clean
- express-rate-limit

#### Deploying app on heroku
#### Create a swagger for a project

## Installation 💾

1. Create account and database in mongodb.com
2. Create .env in the root
3. Add MONGO_URI with correct value
4. Add JWT_EXPIRES with custom value
5. Add JWT_SECRET with custom value

Then run:

```bash
npm install && npm start
```
