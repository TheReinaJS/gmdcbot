const Discord = require('discord.js');
const db = require('quick.db');

exports.run = (client, message) => {
  
   if(!message.member.hasPermissions('ADMINISTRATOR')) return message.channel.send(`Bu komutu kullanabilmek için **Mesajları Yönet** yetkisine sahip olmalısın.`)
  
  db.delete(`uyarlog_${message.guild.id}`)
  
  message.channel.send(new Discord.MessageEmbed().setColor('RED').setAuthor("Uyarı Log Kanalı başarıyla sıfırlandı.", message.author.avatarURL))
  
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
}
exports.help = {
  name: "uyarılog-sıfırla"
}