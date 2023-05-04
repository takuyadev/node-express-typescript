# node-express-typescript
Basic startup project for any project using Node.js + Express.js + TypeScript.

## Features
Most of the useful features are for easier configuration, although there are some other packages setup to make it easier for you to start your project without worrying about installing them.

- TypeScript Support
- Test-ready with Jest configured with TypeScript
- Async Handling with error handling if error is thrown
- Flexible for any database or ORMs
- Path aliases for cleaner imports
- Nodemon for refresh on save
- Setup build script for production; no ts-node for production
- Security middlewares setup
- Environment variables configured on load

# Setup

## Environment Variables

1. Copy ```.env.example```, and rename to ```.env```
2. Configure newly copied ```.env``` file 

## Development
> This project was setup using Node.js v18.5. Please use specified version for best experience.

1. Use this project as a template
2. Install dependencies with ```npm install```
3. Start developoment server with ```npm run dev```

## Production
Production build is compiled first into JavaScript, built on the ```./dist``` folder, and can be ran after compilation.

1. Run ```npm run build```
2. Run ```npm run start```
