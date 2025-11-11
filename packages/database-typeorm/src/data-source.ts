import { databaseEnv } from "@repo/env";
import { DataSource, DataSourceOptions } from "typeorm";

export const dataSourceOptions: DataSourceOptions = {
    type: "postgres",
    host: databaseEnv.DB_HOST,
    port: databaseEnv.DB_PORT,
    username: databaseEnv.DB_USERNAME,
    password: databaseEnv.DB_PASSWORD,
    database: databaseEnv.DB_DATABASE,
    synchronize: false,
    entities: ["src/entities/*.entity.{ts,js}"],
    migrations: ["src/migrations/*.{ts,js}"],
};

export const AppDataSource = new DataSource(dataSourceOptions);
