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

## Javascript

`slice()` method copies an array.

**Spread operator** is an operator to copy an array and an object.

**Rest operator** looks like a spread operator. It's used in function argument. It takes whatever numbers of arguments and make it an array. Merge multiple arguments into an array.