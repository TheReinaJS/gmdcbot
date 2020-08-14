const db = require('quick.db');
const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  if (!args[0]) return message.channel.send('Hatalı kullanım! Örnek Kullanım: **z!everyone-engel aç/kapat**')
  
  
  if (args[0] == 'aç') {
    db.set(`hereengel_${message.guild.id}`, 'acik')
      message.channel.send('Everyone Engel başarıyla açıldı!')
   
  }
  if (args[0] == 'kapat') {
    
    db.set(`hereengel_${message.guild.id}`, 'kapali').
      message.channel.send('Everyone Engel başarıyla kapatıldı!')
  
  } 


}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'everengel',
  description: 'hereengel',
  usage: 'everengel'
};