const Telegraf = require('telegraf')

const bot = new Telegraf("1332711625:AAGVh3akaKlM7qu06QTnE5ewGAetuJQLZzM")
bot.start((ctx) => ctx.reply('go away'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply(''))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()
bot.hears('good', (ctx) => ctx.reply('Im glad to hear this'))