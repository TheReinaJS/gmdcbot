const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.MessageEmbed()
.setTimestamp()
.setThumbnail(client.user.avatarURL)
.setTitle("Moderasyon Yardım Menüsüne Hoşgeldin ^^")
.setColor("BLACK")
.setDescription('<@712691670860169326> botunu rollerde en üste almayı unutmayın.\n\n🍳 ``z!reklam-engel``\nSunucunuzda reklam yapmayı engeller herhangi bir reklam yapılamaz.\n\n✊🏿 ``z!küfür-engel``\nSunucunuzda kullanıcılar küfür edemez veya mesajını düzenleyip küfür edemez.\n\n🎤 ``z!reklam-ban``\nSunucunuzda reklam yapan kişileri banlar.\n\n🌂 ``z!reklamban-kapat``\nSunucunuzda reklam ban sistemini kapatır.\n\n🧳 ``z!capslock-engel``\nSunucunuzda kullanıcılar Capslock açıp yazı yazamazlar.\n\n🎩 ``z!rol-koruma``\nSunucunuzdaki kullanıcılar rol silerse geri açar.\n\n🧦 ``z!otorol-sistemi``\nSunucunuza gelen kişilere otomatik rol verir.\n\n💼 ``z!emoji-kur``\nSunucunuzda 50 adet emoji kurar.\n\n👒 ``z!reklamisim-ban``\nKullanıcının isminde reklam var ise sunucudan direk banlanır.\n\n👑 ``z!emoji-bilgi``\nBelirttiğiniz emojinin bilgilerini verir.')
.addField(`➥ Menüler`, `👌🏼 [Destek Sunucusu](https://discord.gg/R6r2aUf) | 👉🏼 [Bot Davet Linki](https://discord.com/api/oauth2/authorize?client_id=712691670860169326&permissions=8&scope=bot) `)
.setFooter(`${message.author.tag}` , client.user.avatarURL)
message.channel.send(embedyardim);
   
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'moderasyon',
  description: 'Sunucu Yetkili Komutlarını Gösterir',
  usage: 'moderasyon [komut]'
  
};