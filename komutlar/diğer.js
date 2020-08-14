const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.MessageEmbed()
.setTimestamp()
.setThumbnail(client.user.avatarURL)
.setColor("BLACK")
.setTitle('Diğer Yardım Menüsüne Hoşgeldin ^^')
.setDescription('<@712691670860169326> botunu rollerde en üste almayı unutmayın.\n\n👑 ``z!sa-as aç``\nSunucunuzda sa diyen birisine bot otomatik as cevabını verir.\n\n💄 ``z!davetsıralaması``\nSunucunuzda davet yapan kişilerin davet istatistiğini gösterir.\n\n👢 ``z!gif-ara``\nArattığınız gifi yanıtlar.\n\n🧶 ``z!davet``\nBotumuzu sunucuna eklemek istiyorsan komutu yazmalısın.\n\n👓 ``z!ping``\nBotun pingi hakkında bilgi verir.\n\n🧵 ``z!afk``\nSunucuda afk moduna girersiniz ve etiket atan kişiye uyarı gider.\n\n👜 ``z!yapımcım``\nBotun yapımcısı hakkında bilgi verir.\n\n🎩 ``z!sunucu-bilgi``\nSunucu hakkında istatitik çıkarır.\n\n🎒 ``z!sunucuresmi``\nSunucunun avatarını gönderir\n\n🧤 ``z!yılbaşı``\nYıl başına kalan zamanı gösterir.\n\n🏫 ``z!kullanıcıbilgim``\nSizin hakkında bilgi çıkarır.\n\n⚡️``z!evlenmeteklifi``\nSevdiğiniz birisine çıkma teklifi edersiniz.\n\n🚏 ``z!istatistik``\nBot hakkında bilgi edinirsiniz.\n\n🦾 ``z!bot-bilgi``\nBot Hakkında Bilgi verir.')
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
  name: 'diğer',
  description: 'Sunucu Genel Komutlarını Gösterir',
  usage: 'genel [komut]'
  
};