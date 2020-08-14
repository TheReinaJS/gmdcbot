const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
let udurum = db.fetch(`usohbet.${message.channel.id}`)
if(!udurum || udurum === 'pasif') udurum = "Pasif"
if(!args[0]) return message.channel.send('Ultra Sohbet Temizleme Modu Şu Anda ' + udurum + ' Bu Özelliği Açmak Veya Kapatmak için ``aç`` veya ``kapat`` yazmalısın')
  if(args[0] === 'aç') {
    db.set(`usohbet.${message.channel.id}`,'aktif')
    message.channel.send('**Özellik Bu Kanalda Açıldı**')
    }
  else if (args[0] === 'kapat') {
    db.delete(`usohbet.${message.channel.id}`)
    message.channel.send('**Özellik Bu Kanalda Kapatıldı**')
  }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['us'],
  permLevel: 0,
};

exports.help = {
  name: 'ultrasohbettemizleyici',
  description: '',
  usage: ''
};

