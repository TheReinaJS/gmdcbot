const Discord = require('discord.js');
exports.run = function(client, message, args) {
    let type = args.slice(0).join(' ');
    if (type.length < 1) return message.channel.send(
new Discord.MessageEmbed()
.setDescription('lütfen talimatları uygulayın Örnek kullanım: **öneri <öneri>**'));
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setDescription('Öneriniz Talebiniz bildirildi! Yetkililerimiz en kısa sürede inceleyecektir.')
message.channel.send(embed)
const embed2 = new Discord.MessageEmbed()
.setColor("RANDOM")
.setDescription(`**${message.author.tag}** adlı kullanıcının Önerisi:`)
.addField(`Kulanıcı Bilgileri`, `Kullanıcı ID: ${message.author.id}\nKullanıcı Adı: ${message.author.username}\nKullanıcı Tagı: ${message.author.discriminator}`)
.addField("Öneri", type)
.setThumbnail(message.author.avatarURL)
client.channels.cache.get('743683992255201344').send(embed2); //ÖNERİNİN GİDİCEĞİ KANAL ID
};
exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};
exports.help = {
  name: 'öneri',
  description: 'Kinsta Code & Only V12',
  usage: 'Kinsta Code & Only V12'
};