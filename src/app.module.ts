import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VideoModule } from './video/video.module';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
	imports: [VideoModule, ScheduleModule.forRoot()],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule { }
