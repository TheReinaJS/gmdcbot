const Discord = require('discord.js'); 
 
exports.run = async(client, message, args) => {

 const Embed = new Discord.MessageEmbed()
.setTimestamp()
.setThumbnail(client.user.avatarURL)
.setColor("BLACK")
.setTitle('Otorol Yardım Menüsüne Hoşgeldin ^^')
.addField("**》** ``z!otorol @rol #kanal``", `Sunucuya gelen üyelere verilicek rolü ve kanalı ayarlarsınız.`)
.addField("**》** ``z!otorol sıfırla``", `Ayarlanan log kanalını sıfırlarsınız.`)
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
  name: 'otorol-yardım',
  description: 'Yardım Menüsünü Gösterir.',
  usage: 'yardım'
};
