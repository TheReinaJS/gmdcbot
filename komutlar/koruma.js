const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.MessageEmbed()
.setTimestamp()
.setThumbnail(client.user.avatarURL)
.setTitle("Koruma Yardım Menüsüne Hoşgeldin ^^")
.setColor("BLACK")
.setDescription('<@712691670860169326> botunu rollerde en üste almayı unutmayın.\n\n🎯 **z!everyone-yardım**\nSunucuda everyone atan kullanıcıları engeller.\n\n🎷 **z!uyarı-yardım**\nSunucunuzdaki kişileri uyarmak için yapılmış bir komut.\n\n🗽 **z!ban-yardım**\nSunucunuzda kullanıcıların banlanmasını engelleyen bir komuttur.\n\n🚨 **z!jail-yardım**\nSunucunuzdaki kullanıcıları cezalandırmak içindir\n\n🛕 **z!mute-yardım**\nSunucunuzdaki kişileri mutelemek için yapılmıştır.\n\n🕋  **z!otorol-yardım**\nSunucuza gelen kişilere otomatik rol vermesi içindir\n\n🌌 **z!mod-log-yardım**\nSunucunuzdaki logu çıkarmak için yapılmıştır.')
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
  name: 'koruma',
  description: 'Sunucu Koruma Komutlarını Gösterir',
  usage: 'koruma [komut]'
  
};