### Hi there! 👋

> A template created to be reused in some projects saving a lot of time and make our lives easier 🤍

## What is inside?

-   [NextJS](https://nextjs.org/docs)
-   [ReactJS](https://reactjs.org)
-   [TypeScript](https://www.typescriptlang.org)
-   [Tailwind](https://tailwindcss.com/)
-   [Framer Motion](https://www.framer.com/motion)
-   [Cypress](https://www.cypress.io/)
-   [Eslint](https://eslint.org)
-   [Prettier](https://prettier.io)
-   [Husky](https://github.com/typicode/husky)
-   [Commitlint](https://commitlint.js.org/#/)

## Getting Started

### Install dependencies

```bash
pnpm install
```

or

```bash
yarn
```

or

```bash
npm install
```

### Run development server

```bash
pnpm dev
```

or

```bash
yarn dev
```

or

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Structure

```
└── cypress
    ├── e2e
└── src
    ├── app
    ├── assets
    ├── components
    ├── lib
    ├── utils
```

| Folder         | Description                                    |
| -------------- | ---------------------------------------------- |
| **e2e**        | e2e tests in the app                           |
| **app**        | Pages                                          |
| **assets**     | Images and static files for application        |
| **components** | Pages components                               |
| **lib**        | Configuration of libraries used in the project |
| **utils**      | Auxiliary and reusable functions               |

## Conventions

### Components

```
└── <MyComponent>
    ├── <MyComponent>.tsx
    ├── <MyComponent>.spec.tsx
    └── index.ts
```

| Files         | Description                  |
| ------------- | ---------------------------- |
| **.tsx**      | Component implementation     |
| **.spec.tsx** | Component tests              |
| **index.ts**  | File to export the component |

## Commands

-   `dev`: run development server
-   `build`: creates the production build version
-   `lint`: runs the linter in all components and pages
-   `cypress`: open cypress
-   `format`: format the files.
-   `component-test`: run all the component tests.
-   `e2e-test`: run all the e2e tests.
-   `commit`: commit staged changes

<p align="center">Made with 🤍 by Arthur</p>
