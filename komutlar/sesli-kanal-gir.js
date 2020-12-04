const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");
let p = ayarlar.prefix;
module.exports.run = async (client, message, args) => {
  let seslikanal = await db.fetch(`seslikanal.${message.guild.id}`)
  if(!seslikanal) return message.channel.send(`Sesli Kanal Ayarlanmamış`)
client.channels.cache.get(seslikanal).join()  
  return message.channel.send(`Başarıyla Sesli Kanala Giriş Yapıldı`)
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sesli-kanal-gir"],
  permLevel: 0
};

module.exports.help = {
  name: 'seslikanalgir'
};
