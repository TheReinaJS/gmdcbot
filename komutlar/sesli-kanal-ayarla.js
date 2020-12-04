const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");
let p = ayarlar.prefix;
module.exports.run = async (client, message, args) => {
let voice = message.guild.channels.cache.get(args[0]) || message.guild.channels.cache.find(a => a.name == args[0])

if(!voice || voice.type !== 'voice') return message.channel.send(`Bir Sesli Kanal İD'si Girmen Gerekmekte`)
  
  
  db.set(`seslikanal.${message.guild.id}`, voice.id)
  message.channel.send(`Sesli Kanal Başarıyla ${voice} Olarak Ayarlandı!`)
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sesli-kanal-ayarla"],
  permLevel: 0
};

module.exports.help = {
  name: 'seslikanalayarla'
};
