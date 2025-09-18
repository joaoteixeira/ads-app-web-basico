import { Controller, Body, Get, Post, Render, Res } from "@nestjs/common";
import { Chamado } from "./chamado.entity";
import { Response } from "express";

@Controller('chamados')
export class ChamadoController {
    private listaChamados: Chamado[] = [];
    private proximoId: number = 1;

    @Get()
    @Render('chamado/index')
    listar() {
        return { listaChamados: this.listaChamados };
    }

    @Get('/novo')
    @Render('chamado/form-novo')
    criarForm() {
        return {};
    }

    @Post('/novo')
    criarSalvar(@Body() dados:any, @Res() response: Response) {
        const chamado: Chamado = {
            ...new Chamado(), 
            id: this.proximoId++,
            titulo: dados.titulo,
            descricao: dados.descricao
        };

        this.listaChamados.push(chamado);

        return response.redirect('/chamados');
    }


}