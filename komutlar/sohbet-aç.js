const Discord = require('discord.js');
exports.run = (client, message, args) => {
  var yetki = new Discord.MessageEmbed()
  .setDescription(`Bu komutu kullanabilmek için Kanalları Yönet iznine sahip olmalısın!`)
  .setColor("RANDOM")
  if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(yetki)
  let every = message.guild.roles.cache.find(r => r.name === '@everyone')
message.channel.createOverwrite(every, {
  'SEND_MESSAGES': true,
 
})
 
const acik = new Discord.MessageEmbed()
.setTimestamp()
.setAuthor(`Sohbet`, client.avatarURL)
.setColor("RANDOM")
.setDescription('Sohbet kanalı ``Yazılabilir`` durumuna getirildi.\nSohbet kanalını kapatmak için ``z!kapat`` yazmanız gerekmektedir.')
message.channel.send(acik)
}
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['aç','a','saç'],
 kategori: 'sohbet',
  permLevel: 0
};

exports.help = {
  name: 'sohbet-aç',
  description: 'Sohbetinizi açmaya yarar. Kapatmak için !!k.',
  usage: 'aç'
};