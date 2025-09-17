import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('home')
  home() {
    return { titulo: this.appService.getTitulo() };
  }

  @Get('/curriculo')
  @Render('curriculo')
  buscarCurriculo() {
    return { redirect: '/'};
  }

  @Get('/contato')
  @Render('contato')
  contato() {
    return {};
  }

  @Post('/contato-enviar')
  @Render('contato-enviado')

  contatoEnviar(@Body() dados: any) {
    
    console.log(dados);

    return { 
      nome_enviado: dados.nome, 
      email_enviado: dados.email, 
      mensagem_enviada: dados.mensagem 
    };
  }
}
