const Discord = require('discord.js'); 
 
exports.run = async(client, message, args) => {

 const Embed = new Discord.MessageEmbed()
.setTimestamp()
.setThumbnail(client.user.avatarURL)
.setColor("BLACK")
.setTitle('Jail Yardım Menüsüne Hoşgeldin ^^')
.addField("**》** ``z!jail-kanal ayarla #kanal``", `Jail atılan kullanıcıyı loglaması için işe yarar.`)
.addField("**》** ``z!jail-rol ayarla @rol``", `Jail atılan kullanıcıya verilicek rölü ayarlarsınız.`)
.addField("**》** ``z!jail-yetkilisi ayarla @rol``", `Jail atabilecek yetkiliyi ayarlarsınız.`)
.addField("**》** ``z!jail @üye <10s,10m,10h,10d> sebep``", `Jail atma komutu.`)
.addField("**》** ``z!jail-kanal sıfırla``", `Ayarlanan jail log kanalını sıfırlarsınız.`)
.addField("**》** ``z!jail-rol sıfırla``", `Jail atılınca kullanıcıya verilen rölü sıfırlarsınız.`)
.addField("**》** ``z!jail-yetkilisi sıfırla``", `Jail yetkilisini sıfırlarsınız.`)
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
  name: 'jail-yardım',
  description: 'Yardım Menüsünü Gösterir.',
  usage: 'yardım'
};
