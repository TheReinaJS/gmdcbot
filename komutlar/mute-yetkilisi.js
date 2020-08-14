const Discord = require('discord.js')
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')

exports.run = async(client, message, args) => {
  
  
if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply(`Bu komutu kullanabilmek için **Yönetici** yetkisine sahip olmalısın.`)
if (!args[0]) return message.reply(`Hatalı Kullanım! Örnek Kullanım: **z!mute-yetkilisi ayarla/sıfırla @rol`)
   
  
  if (args[0] == 'ayarla') {
  
  let yetkilirol = message.mentions.roles.first() || message.guild.roles.find(c => c.name === args[1].join(' '))
  if (!yetkilirol) return message.channel.send(`Ayarlamam için bir rol etiketlemelisin.`)
  
  db.set(`jailyetkilisi_${message.guild.id}`, yetkilirol.id)
  message.channel.send(`Mute yetkilisi başarıyla ${yetkilirol} olarak ayarlandı.`)
  } 
  

  if (args[0] == 'sıfırla') {
    db.delete(`jailyetkilisi_${message.guild.id}`)
    message.channel.send(`Mute yetkilisi başarıyla sıfırlandı.`)
  }
  
  
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 0
};

exports.help = {
 name: 'mute-yetkilisi',
 description: 'Hangi role sahip kişilerin mute atabileceğini ayarlarsınız.',
 usage: 'mute-yetkilisi ayarla @rol',
}; 
 