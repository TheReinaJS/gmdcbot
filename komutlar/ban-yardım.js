const Discord = require('discord.js'); 
 
exports.run = async(client, message, args) => {

 const Embed = new Discord.MessageEmbed()
.setTimestamp()
.setThumbnail(client.user.avatarURL)
.setColor("BLACK")
.setTitle('Ban Yardım Menüsüne Hoşgeldin ^^')
.addField("**》** ``z!ban-kanal ayarla``", `Banlanan kullanıcıları log kanalına göndermesi ayarlarsınız.`)
.addField("**》** ``z!ban-yetkilisi ayarla @rol``", `Ban atabilecek yetkiliyi ayarlarsınız.`)
.addField("**》** ``z!ban @kullanıcı sebep``", `Kullanıcıyı sunucudan yasaklamaya yarar.`)
.addField("**》** ``z!unban <ID>t``", `Yasaklanan kullanıcının yasağını kaldırır.`)
.addField("**》** ``z!ban-kanal sıfırla``", `Ayarlanan ban log kanalını sıfırlarsınız.`)
.addField("**》** ``z!ban-yetkilisi sıfırla``", `Ayarlanan ban yetkilisini sıfırlarsınız.`)
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
  name: 'ban-yardım',
  description: 'Yardım Menüsünü Gösterir.',
  usage: 'ban'
};
