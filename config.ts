export default class Config {
    Telegram_Token = ''
    Database = {
        Address: '',
        Username: '',
        Password: '',
        NS: '',
        DB: '',
    }

    constructor() {
        Deno.readTextFile('gm_bot.config').then((file) => {
            const config_file = JSON.parse(file)
            this.Telegram_Token = config_file['telegram_token']
            this.Database = config_file['Database']
        })
    }
}
