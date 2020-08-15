const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async (bot, message, args) => {

if (!message.member.hasPermission('ADMINISTRATOR')) {
  
const embed = new Discord.MessageEmbed()

.setColor('RED')
.setDescription('**Giriş Kanalını Kapatmak İçin `Yönetici` İznine Sahip Olmalısın!')

return message.channel.send(embed)
}
  
let zatenkapalı = await db.fetch(`reklambanayar_${message.guild.id}`)
if(zatenkapalı == 'kapali') {
  
const embed = new Discord.MessageEmbed()

.setColor('GREEN')
.setDescription('Giriş Kanalı Sıfırlandı!')

message.channel.send(embed)  
};
  
if(zatenkapalı == 'acik') {
  
db.delete(`hgK_${message.guild.id}`)
db.set(`hgK_${message.guild.id}`, 'kapali')
  
const embed = new Discord.MessageEmbed()

.setColor('GREEN')
.setDescription(`Giriş Kanalı Kapatıldı!`);

message.channel.send(embed)  
};
  
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['hgkapat'],
    permLevel: 0
};

exports.help = {
    name: 'hg-kapat',
    description: 'Hoşgeldin kanalını kapatmaya yarar.',
    usage: 'hg-kapat'
};