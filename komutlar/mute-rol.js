const Discord = require('discord.js')
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')

exports.run = async(client, message, args) => {

  
if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply(`Bu komutu kullanabilmek için **Yönetici** yetkisine sahip olmalısın.`)
if (!args[0]) return message.reply(`Hatalı Kullanım! Örnek Kullanım: **z!mute-rol ayarla/sıfırla @rol`)
   
  
  if (args[0] == 'ayarla') {
  
  let rol = message.mentions.roles.first() || message.guild.roles.find(c => c.name === args[1].join(' '))
  if (!rol) return message.channel.send(`Ayarlamam için bir rol etiketlemelisin.`)
  
  db.set(`jailrol_${message.guild.id}`, rol.id)
  message.channel.send(`Mute rolü başaryıla ${rol} olarak ayarlandı.`)
  } 
  

  if (args[0] == 'sıfırla') {
    db.delete(`jailrol_${message.guild.id}`)
    message.channel.send(`Mute rolü başarıyla sıfırlandı.`)
  }
  
  
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 0
};

exports.help = {
 name: 'mute-rol',
 description: 'Birisi mute atılınca hangi role sahip olacağını ayarlarsınız.',
 usage: 'mute-rol ayarla @rol',
}; 