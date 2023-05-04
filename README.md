# node-express-typescript
Basic starter project for any project using Node.js + Express.js + TypeScript. Personally, I'd recommend for small to medium projects, as the imagine with a bigger project, you would need extra folders or structure. However, this template should be malleable enough for a good starting template for most personal projects.

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

# Project
Every development files are located within the ```./src``` folder. 

```
├── app.ts
├── config
│   └── db.ts
├── controllers
│   └── user-controller.ts
├── middleware
│   ├── async-middleware.ts
│   ├── auth-middleware.ts
│   └── error-middleware.ts
├── routes
│   └── user-route.ts
├── __tests__
│   └── example.test.ts
├── types
│   ├── enums
│   │   └── enums.common.ts
│   ├── interfaces
│   │   └── interfaces.common.ts
│   └── types
│   │   └──  types.common.ts
│   └── index.d.ts
└── utils
    ├── ApiError.ts
    └── ApiSucess.ts
```

## Important helper functions

### asyncHandler
Passing middleware into the asyncHandler will allow the server to automatically catch any internal server errors, or manually thrown errors from the server. 
```js
// ? asyncHandler should be used for every request for easy async handling
export const getUsers = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    // Example user, get from database
    const user = [{ name: "John Doe" }, { name: "Jaen Doe" }];

    // Return json with success message
    res.status(200).json(new ApiSuccess<User[]>(user, "Success!"));
  },
);
```

## ApiError & ApiSucccess
Using ApiError or ApiSuccess allows for consistent responses across all routes; please use this instead of passing your own data structure. 

### ApiError
```js
 throw new ApiError({}, 500, "Handled by asyncHandler")
```

### ApiSuccess
```js
 res.status(200).json(new ApiSuccess<User[]>(user, "Success!"));
```

## Adding extra path aliases
If you add extra folders to this template and would like to use them with aliases, then go through following:

1. Go into ```tsconfig.json```
2. Add extra paths inside of ```{ paths: ... }``` (for tsconfig-paths)
3. Go into ```package.json```
4. Add extra paths inside of ```{_moduleAliases: ... }``` (for production build)

