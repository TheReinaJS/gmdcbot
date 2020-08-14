const discord = require('discord.js')
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')

exports.run = async(client, message, args) => {

  
if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply(`Bu komutu kullanabilmek için **Yönetici** yetkisine sahip olmalısın.`)
if (!args[0]) return message.reply(`Hatalı Kullanım! Örnek Kullanım: **z!mute-kanal ayarla/sıfırla @rol`)
   
  
  if (args[0] == 'ayarla') {
  
  let kanal = message.mentions.channels.first() || message.guild.channels.find(c => c.name === args[1].join('-'))
  if (!kanal) return message.channel.send(`Ayarlamam için bir kanal etiketlemelisin.`)
  
  db.set(`jailkanal_${message.guild.id}`, kanal.id)
  message.channel.send(`Mute logunun tutulacağı kanal başaryıla ${kanal} olarak ayarlandı.`)
  } 
  

  if (args[0] == 'sıfırla') {
    db.delete(`jailkanal_${message.guild.id}`)
    message.channel.send(`Mute logunun tutulduğu kanal başarıyla sıfırlandı.`)
  }
  
  
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 0
};

exports.help = {
 name: 'mute-kanal',
 description: 'Birisi mute atılınca hangi kanala mesaj atılacağını ayarlarsınız.',
 usage: 'mute-kanal ayarla #kanal',
}; 