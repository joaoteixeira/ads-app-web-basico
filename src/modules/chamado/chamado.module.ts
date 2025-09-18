import { Module } from "@nestjs/common";
import { ChamadoController } from "./chamado.controller";

@Module({
    controllers: [ChamadoController],
    providers: [],
})
export class ChamadoModule {}