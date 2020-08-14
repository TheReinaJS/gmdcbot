const Discord = require('discord.js');
const db = require('quick.db');

exports.run = (client, message) => {
  
   if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`Bu komutu kullanabilmek için **Yönetici** yetkisine sahip olmalısın.`)
  
  let kanal = message.mentions.channels.first();
  if (!kanal) return message.channel.send(new Discord.MessageEmbed().setColor('GREEN').setAuthor("Ayarlamam için bir kanal etiketlemelisin. Örnek Kullanım: **uyarılog-ayarla #kanal**", message.author.avatarURL))
  
  var uyarılog = db.set(`uyarlog_${message.guild.id}`, kanal.id)
  
  message.channel.send(new Discord.MessageEmbed().setColor('BLUE').setAuthor("Uyarı Log Kanalı başarıyla ayarlandı.", message.author.avatarURL))
  
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
}
exports.help = {
  name: "uyarılog-ayarla"
}