import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { BoardsModule } from './boards/boards.module';
import { ColumnsModule } from './columns/columns.module';
import { TasksModule } from './tasks/tasks.module';
import { CommentsModule } from './comments/comments.module';
import { RealtimeModule } from './realtime/realtime.module';
import { TelegramBotModule } from './telegram-bot/telegram-bot.module';
import { AiModule } from './ai/ai.module';
import { MailerModule } from './mailer/mailer.module';
import { ChatsModule } from './chats/chats.module';

@Module({
  imports: [AuthModule, UsersModule, BoardsModule, ColumnsModule, TasksModule, CommentsModule, RealtimeModule, TelegramBotModule, AiModule, MailerModule, ChatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
