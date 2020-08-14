const Discord = require('discord.js'); 
 
exports.run = async(client, message, args) => {

 const Embed = new Discord.MessageEmbed()
.setTimestamp()
.setThumbnail(client.user.avatarURL)
.setColor("BLACK")
.setTitle('Everyone Engel Yardım Menüsüne Hoşgeldin ^^')
.addField("**》** ``z!everyone-kick``", `Kullanıcı everyone veya here attıktan sonra 3 kez uyarılma hakkı sunulur 3. uyarıda kick atılır.`)
.addField("**》** ``z!everyone-kick kapat``", `Everyone kick sistemini kapatır.`)
.addField("**》** ``z!everyone-engel``", `Sunucunuzda everyone here kullanımını engeller.`)
.addField("**》** ``z!everyone-engel kapat``", `Everyone engel sistemini kapatır.`)
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
  name: 'everyone-yardım',
  description: 'Yardım Menüsünü Gösterir.',
  usage: 'yardım'
};
