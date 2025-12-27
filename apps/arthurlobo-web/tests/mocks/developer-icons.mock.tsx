jest.mock("developer-icons", () => ({
    React: () => <div data-testid="react-icon" />,
    TypeScript: () => <div data-testid="typescript-icon" />,
    NestJS: () => <div data-testid="nestjs-icon" />,
    NextJs: () => <div data-testid="nextjs-icon" />,
    NodeJs: () => <div data-testid="nodejs-icon" />,
    PostgreSQL: () => <div data-testid="postgresql-icon" />,
}));
