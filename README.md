### Hi there! 👋

> Welcome to my personal website, where I showcase a collection of my projects, highlight my skills, and document my journey as a developer thus far.
>
> Leveraging the power of React and Next.js, it offers a smooth and efficient browsing experience with server-side rendering capabilities for enhanced performance.
>
> TypeScript is utilized throughout the codebase to ensure robustness and type safety, while Tailwind CSS provides a highly customizable and responsive design system, resulting in a sleek and modern aesthetic. Additionally, Framer Motion adds fluid animations and transitions, enhancing the overall user experience.
>
> Also, Cypress is employed for end-to-end testing, ensuring the reliability and functionality of the website across different scenarios.

## What is inside?

-   [Next.js](https://nextjs.org/docs)
-   [React.js](https://reactjs.org)
-   [TypeScript](https://www.typescriptlang.org)
-   [Tailwind CSS](https://tailwindcss.com/)
-   [Shadcn UI](https://ui.shadcn.com/)
-   [class-variance-authority](https://cva.style/docs)
-   [Tabler Icons](https://tablericons.com/)
-   [Spline 3D](https://spline.design/)
-   [Framer Motion](https://www.framer.com/motion)
-   [Day.js](https://day.js.org)
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
        ├── about
        ├── career
        ├── contact
        ├── header
        ├── hero
        ├── projects
        ├── moving-techs
        ├── ui
    ├── lib
    ├── utils
        ├── hooks
```

| Folder             | Description                                    |
| ------------------ | ---------------------------------------------- |
| **e2e**            | e2e tests in the app                           |
| **app**            | Pages                                          |
| **assets**         | Images and static files for application        |
| **components**     | Page's components                              |
| **header**         | Page's header                                  |
| **ui**             | Reusable ui components                         |
| **about**          | Components related to the about section        |
| **career**         | Components related to the career section       |
| **contact**        | Components related to the contact section      |
| **hero**           | Components related to the hero section         |
| **projects**       | Components related to the projects section     |
| **moving-techs**   | Components related to the moving techs section |
| **lib**            | Configuration of libraries used in the project |
| **utils**          | Auxiliary and reusable functions               |
| **hooks**          | Reusable custom react hooks                    |

## Conventions

| Files        | Description                   |
| ------------ | ----------------------------- |
| **.tsx**     | Component implementation      |
| **index.ts** | File to export the components |

## Commands

-   `dev`: run development server
-   `build`: creates the production build version
-   `cypress`: open cypress
-   `format`: run prettier and eslint in all the files
-   `e2e-test`: run all the e2e tests.
-   `commit`: commit staged changes

<p align="center">Made with 🤍 by Arthur</p>
