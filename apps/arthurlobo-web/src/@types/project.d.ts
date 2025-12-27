type TProjectsName =
    | "arthurlobo.com"
    | "fullstack-monorepo-template"
    | "user-management-api"
    | "exp-bio"
    | "time-capsule"
    | "habits"
    | "feedget"
    | "yazitv";

type TProject = {
    title: TProjectsName;
    description: string;
    image: string;
    link: string;
    technologies: string[];
};
