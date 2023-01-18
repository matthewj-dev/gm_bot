import Surreal from 'https://deno.land/x/surrealdb@v0.5.0/mod.ts'
import Config from './config.ts'

export default class BotDatabase {
    private db: Surreal = new Surreal()

    constructor(config: Config) {
        this.setup_db(config)
    }

    private async setup_db(config: Config): Promise<void> {
        try {
            // Signin as a namespace, database, or root user
            await this.db.signin({
                user: config.Database.Username,
                pass: config.Database.Password,
            })

            // Select a specific namespace / database
            await this.db.use(config.Database.NS, config.Database.DB)

            console.info(`SurrealDb connected!`)
        } catch (e) {
            console.error('ERROR', e)
        }
    }

    create_message(user_id: number, message: string): void {
        this.db
            .create('message', {
                user_id: user_id,
                content: message,
                timestamp: Date.now(),
            })
            .then((result) => console.debug(result))
    }
}
