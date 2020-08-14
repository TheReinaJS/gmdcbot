const Discord = require('discord.js'); 
 
exports.run = async(client, message, args) => {

 const Embed = new Discord.MessageEmbed()
.setTimestamp()
.setThumbnail(client.user.avatarURL)
.setColor("BLACK")
.setTitle('Uyarı Yardım Menüsüne Hoşgeldin ^^')
.addField("**》** ``z!uyar @kullanıcı [sebep]``", `Etiketlediğiniz kullanıcıyı uyarı verirsiniz.`)
.addField("**》** ``z!uyarı-sil @kullanıcı [sebep]``", `Uyarılan kullanıcının uyarılarını silersiniz.`)
.addField("**》** ``z!uyarılar @kullanıcı``", `Kullanıcının tüm uyarılarını görürsünüz.`)
.addField("**》** ``z!uyarılog-ayarla #kanal``", `Uyar komutunu kullanan yetkilinin loga göndermesini sağlar.`)
.addField("**》** ``z!uyarılog-sıfırla``", `Ayarlanan uyarı log kanalını sıfırlarsınız.`)
.addField(`➥ Menüler`, `👌🏼 [Destek Sunucusu](https://discord.gg/R6r2aUf) | 👉🏼 [Bot Davet Linki](https://discord.com/api/oauth2/authorize?client_id=712691670860169326&permissions=8&scope=bot) `)
.setFooter(`${message.author.tag}` , client.user.avatarURL)
message.channel.send(Embed)
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

module.exports.help = {
  name: 'uyarı-yardım',
  description: 'Yardım Menüsünü Gösterir.',
  usage: 'yardım'
};
