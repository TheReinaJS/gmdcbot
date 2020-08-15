const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
  
if(!message.member.hasPermission("MANAGE_GUILD")) {
  
const embed1 = new Discord.RichEmbed()

.setColor('RED')
.setDescription('**Giriş Kanalını Ayarlamak İçin `Sunucuyu Yönet` İznine Sahip Olmalısın!')

return message.channel.send(embed1)
}
  
let kinal = db.fetch(`hgK_${message.guild.id}`)
if(db.has(`hgK_${message.guild.id}`)) {
  
const embed2 = new Discord.RichEmbed()

.setColor('RED')
.setDescription(`**Giriş Kanalı <#${kinal}> Kanalına Ayarlı! Kapatmak İçin** \`${ayarlar.prefix}giriş-kanal-kapat kapat\``)

return message.channel.send(embed2)
}
  
if (args[0] === 'kapat') {
db.delete(`${message.guild.id}.hgK`)
  
const embed4 = new Discord.MessageEmbed() 
  
.setDescription(`Giriş Kanalı Başarıyla Sıfırlandı!`)
.setColor("GREEN")
  
return message.channel.send(embed4)
}
  
};
  
exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['girişkanalkapat','girişkanal-kapat','giriş-kanalkapat'],
permLevel: 0
};

exports.help = {
name: 'giriş-kanal-kapat',
description: 'Hoşgeldin kanalını ayarlamaya yarar.',
usage: 'giriş-kanal #kanal'
};  