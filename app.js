'use strict'
const http = require('http')
const Bot = require('messenger-bot')

let bot = new Bot({
  token: 'EAAEuQOiFK34BAOPZCzoJ4GBU4vsOpfouBWi3ZCzlNaxbAKZCwZCQjc1OMjN9IhgAeTMU7ZCXkHDafw4DpyaiF7XZCK9kZBE2HwfZA1GqUxCusqbmd8e2C4zHyhxqUQ5JSZC4WaZAgOZBi5CtgZCN6lXt7zpRVMvC9Pywfey4bVhSZCcNgCQZDZD',
  verify: 'VERIFY_TOKEN'
})

bot.on('error', (err) => {
  console.log(err.message)
})

bot.on('message', (payload, reply) => {
  let text = payload.message.text

  bot.getProfile(payload.sender.id, (err, profile) => {
    if (err) throw err

    reply({ text }, (err) => {
      if (err) throw err

      console.log(`Echoed back to ${profile.first_name} ${profile.last_name}: ${text}`)
    })
  })
})

http.createServer(bot.middleware()).listen(3000)