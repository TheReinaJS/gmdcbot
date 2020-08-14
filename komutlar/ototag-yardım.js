const Discord = require('discord.js'); 
 
exports.run = async(client, message, args) => {

 const Embed = new Discord.MessageEmbed()
.setTimestamp()
.setThumbnail(client.user.avatarURL)
.setColor("BLACK")
.setTitle('Ototag Yardım Menüsüne Hoşgeldin ^^')
.addField("**》** ``z!ototag-kanal #kanal``", `Oto tag sistemini loglaması için işe yarar.`)
.addField("**》** ``z!oto-tag [Tag]``", `Sunucua gelen kişilere verilicek otomatik tag ayarlarsınız.`)
.addField("**》** ``z!oto-tag-kapat``", `Oto tag sistemini kapatırsınız.`)
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
  name: 'ototag-yardım',
  description: 'Yardım Menüsünü Gösterir.',
  usage: 'yardım'
};
