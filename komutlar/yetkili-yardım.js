const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.MessageEmbed()
.setTimestamp()
.setThumbnail(client.user.avatarURL)
.setTitle("Yetkili Yardım Menüsüne Hoşgeldin ^^")
.setColor("RANDOM")
.setDescription('<@712691670860169326> botunu rollerde en üste almayı unutmayın.\n\n☄️ ``z!temizle``\nYazılan sayıya göre mesaj siler.\n\n☔️ ``z!süreli-rol``\nSunucunuzdaki kişiye süreli rol verirsiniz.\n\n🪀 ``z!sunucuismi-değiştir``\nSunucunuzun ismini değiştirirsiniz.\n\n🥌 ``z!sayaç-ayarla``\nSunucunuza gelen kişilerin otomatik bir şekilde sayacını ayarlarsınız.\n\n🥅 ``z!sayaç-sıfırla``\nAyarlanan sayacı sıfırlarsınız.\n\n🚀 ``z!reklam-kick``\nSunucunuzda 3 uyarıdan sonra banlanacaktır\n\n🎷 ``z!reklamisim-ban``\nSunucunuza giren kullanıcı reklam var ise banlanıcak.\n\n🚁 ``z!slowmode``\nYazı yazma süresini belirlersiniz.\n\n👽 ``z!sohbet-aç``\nYazı yazma permini aktifleştirir.\n\n🤖 ``z!sohbet-kapat``\nYazı yazma permini kapatır.')
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
  name: 'yetkili',
  description: 'Sunucu sunucu Komutlarını Gösterir',
  usage: 'sunucu [komut]'
  
};