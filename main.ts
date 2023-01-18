import TelegramBot from './bot.ts'
import Config from './config.ts'
import BotDatabase from './db.ts'

const config = new Config()
const database = new BotDatabase(config)
new TelegramBot(config, database)
