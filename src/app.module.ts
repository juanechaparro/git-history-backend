import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GitModule } from './git.history/git module';

@Module({
  imports: [GitModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
