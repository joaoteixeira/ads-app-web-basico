import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChamadoModule } from './modules/chamado/chamado.module';

@Module({
  imports: [ChamadoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
