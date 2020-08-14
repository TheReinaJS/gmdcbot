const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async (client, message) => {
  var yetki = new Discord.MessageEmbed()
  .setAuthor(`Venosa`, client.avatarURL)
  .setDescription(`Bu komutu kullanabilmek için Kanalları Yönet iznine sahip olmalısın!`)
  .setColor("RANDOM")
  if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(yetki)
    let args = message.content.split(' ').slice(1);
    const secenekler = args.slice(0).join(' ');
  let every = message.guild.roles.cache.find(r => r.name === '@everyone')
  message.channel.createOverwrite(every, {
  'SEND_MESSAGES': false,
 })
 
const kapali = new Discord.MessageEmbed()
.setTimestamp()
.setAuthor(`Sohbet`, client.avatarURL)
.setColor("RANDOM")
.setDescription('Sohbet kanalı ``Yazılamaz`` durumuna getirildi.\nSohbet kanalını açmak için ``z!aç`` yazmanız gerekmektedir.')
  message.channel.send(kapali)
}

 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['k','skapat','kapat'],
  kategori: 'sohbet',
  permLevel: 0
};

exports.help = {
  name: 'sohbet-kapat',
  description: 'Sohbetinizi kapatmaya yarar. Açmak için !!aç.',
  usage: 'kapat'
};