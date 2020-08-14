const Discord = require('discord.js');

exports.run = (client, message) => {
  
  const lexa = new Discord.MessageEmbed()
  .setColor('#6600FF')
  .setTitle("Venosa Davet Menüsüne Hoşgeldin ^^")
  .setDescription(`[Botu Davet Et](https://discord.com/api/oauth2/authorize?client_id=712691670860169326&permissions=8&scope=bot) | [Ana Sunucu](https://discord.gg/ReaCn6v) | [Destek Sunucu](https://discord.gg/R6r2aUf)`)
  message.channel.send(lexa)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['botdavet', 'davetet', 'botdavetet'],
  permLevel: 0
}
exports.help = {
  name: "davet",
  usage: "z!bot-davet",
  description: "botu davet eder."
}