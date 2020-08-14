const Discord = require('discord.js'); 
 
exports.run = async(client, message, args) => {

 const Embed = new Discord.MessageEmbed()
.setTimestamp()
.setThumbnail(client.user.avatarURL)
.setColor("BLACK")
.setTitle('Mute Yardım Menüsüne Hoşgeldin ^^')
.addField("**》** ``z!mute-kanal ayarla #kanal``", `Susturulan kullanıcıyı loglaması için işe yarar.`)
.addField("**》** ``z!mute-rol ayarla @rol``", `Susturulucak  kullanıcıya verilicek rölü ayarlarsınız.`)
.addField("**》** ``z!mute-yetkilisi ayarla @rol``", `Susturabilecek yetkiliyi ayarlarsınız.`)
.addField("**》** ``z!mute @üye <10s,10m,10h,10d> sebep``", `Mute atma komutu.`)
.addField("**》** ``z!mute-kanal sıfırla``", `Ayarlanan mute log kanalını sıfırlarsınız.`)
.addField("**》** ``z!mute-rol sıfırla``", `Susturulduğunda kullanıcıya verilen rölü sıfırlarsınız.`)
.addField("**》** ``z!mute-yetkilisi sıfırla``", `Susturma yetkilisini sıfırlarsınız.`)
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
  name: 'mute-yardım',
  description: 'Yardım Menüsünü Gösterir.',
  usage: 'yardım'
};
