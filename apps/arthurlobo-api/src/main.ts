import { NestFactory } from "@nestjs/core";

import { apiEnv } from "@repo/env";

import { AppModule } from "./app.module";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    await app.listen(apiEnv.API_PORT ?? 3001);
}

void bootstrap();
