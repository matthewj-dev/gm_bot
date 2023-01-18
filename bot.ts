import { Bot } from 'https://deno.land/x/grammy@v1.13.0/mod.ts'
import BotDatabase from './db.ts'
import Config from './config.ts'

export default class TelegramBot {
    constructor(config: Config, db: BotDatabase) {
        // Create an instance of the `Bot` class and pass your authentication token to it.
        const bot = new Bot(config.Telegram_Token) // <-- put your authentication token between the ""

        // You can now register listeners on your bot object `bot`.
        // grammY will call the listeners when users send messages to your bot.

        // Handle the /start command.
        bot.command('start', (ctx) => ctx.reply('Welcome! Up and running.'))
        // Handle other messages.
        bot.on('message:text', (message_context) => {
            db.create_message(message_context.from.id, '')
        })

        // Now that you specified how to handle messages, you can start your bot.
        // This will connect to the Telegram servers and wait for messages.

        // Start the bot.
        bot.start()
    }
}
