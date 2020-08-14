const Discord = require('discord.js')
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')

exports.run = async(client, message, args) => {
  
  if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply(`Bu komutu kullanabilmek için **Yönetici** Yetkisine sahip olmalısın. `)
    if (!args[0]) return message.reply(`Hatalı Kullanım! Örnek Kullanım: **z!ban-kanal ayarla/sıfırla #kanal`)
    if (args[0] == 'ayarla') {
 let kanal = message.mentions.channels.first() || message.guild.channels.get(args.join(' '))
  if (!kanal)     return message.channel.send(`Ayarlamam için bir kanal etiketlemelisin.`)
    db.set(`bankanal_${message.guild.id}`, kanal.id)
  let bankanal = await db.set(`bankanal_${message.guild.id}`, kanal.id)
  message.channel.send(`Ban kanalı başarıyla ${kanal} olarak ayarlandı.`)
  } 
  

  if (args[0] == 'sıfırla') {
    

    
    
    db.delete(`bankanal_${message.guild.id}`)

    message.channel.send(`Ban kanalı başarıyla sıfırlandı.`)
  }
};
  
  
    
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 0
};

exports.help = {
 name: 'ban-kanal',
 description: 'Birisi banlanınca hangi kanala mesaj gideceğini ayarlarsınız.',
 usage: 'ban-kanal ayarla/sıfırla #kanal',
 kategori: 'SUNUCU LOG',
 permLvl: 'ADMINISTRATOR'
};