# nodejs

`node -v`

`node` interactive mode REPL. `Ctrl + D` to exit. REPL means Read (Read user input), Eval (Evaluate user input), Print (Print output), Loop (Wait for new input)

`node FILE_NAME.js` to run JavaScript.

Users can't access server-side code.

## Core modules

- `http`
- `https`
- `fs`
- `path`
- `os`

## Global variable available by Node.js

- `__dirname`
  - Absolute path to this project folder, path can be created in any operating system.
- `process`

## NodeJS server

`process.exit()` can stop event loop, but typically won't use it.

`req` and `res` are the objects that NodeJS creates for us.

Frequently used data in `req` is `req.url`, `req.method`, and `req.headers`.

You can register code or functions which will run sometime in the future, but not necessarily right now.

`fs.writeFileSync` blocks the execution of the next line of code until writing file is done. 

## npm

`npm init`

`scripts` for normal scripts, we need to add `run`. For example, `npm run start-server`.

`npm install PACKAGE_NAME --save-dev`

## Package

- `nodemon`
  - In `package.json` file, modify `script` to `"start": "nodemon app.js"`, and run in terminal `npm start`.
- `body-parser`

## Express.js

A framework to implement server logic to create application by helper functions, tools and rules. Most popular and often used approach. So parsing requests and responses will be easier.

**Middleware** is important in Express.js.

`next()` allows the request to continue to the next middleware in line

Express.js doesn't send a default response. At the last function, we need to use `res` to send a response like `res.send();`

Alternative to Express.js

- Vanilla Node.js
- Adonis.js
- Koa
- Sails.js

## Templating engine

Templating engines scan HTMLish template and replace placeholders with real HTML content and dynamically HTML file is created and Node/Express serves the file.

Templating engines
- EJS
- Pug (Jade)
- Handlebars

## Model View Controller (MVC)

Model represents the data in code, working with the data by saving and fetching.

View is what the users see, rendering of code in HTML, decoupled from application code.

Controller is connecting models and views. In-between logics. Routes are controllers. Controllers split accross middleware functions of Express.js.

## Cookie

Something that our backend server send back to webapp users by response header upon the users' request. We store the information in the user's browser (on the client-side), and let the subsequent requests include the cookies.

In NodeJS, `res.setHeader("Set-Cookie", "key=value");`. Then the key-value is stored in Cookies section in Application in Google Chrome developer tool of a specific URL. And the subsequent request will have this information.

`req.get("Cookie")` is a string containing all the key-value pairs, so that we need to extract from this.

## Session

The information stored in backend like database. Use cookie to store ID of the session to associate a user to a session. ID is hashed and the backend can confirm it.

`express-session`

`connect-mongodb-session`

## Authentication

A user sends a login request to a server. The server creates a session and store it in database. The server sends a response and store cookie to store session ID.

Encrypt password, `$ npm install --save bcryptjs`

`$ npm install --save connect-flash`

## Cross-Site Request Forgery (CSRF) attack

User is directed to a fake site which seems to be identical to your website, and send request to your backend.

`$ npm install --save csurf`

## Javascript

`slice()` method copies an array.

**Spread operator** is an operator to copy an array and an object.

**Rest operator** looks like a spread operator. It's used in function argument. It takes whatever numbers of arguments and make it an array. Merge multiple arguments into an array.