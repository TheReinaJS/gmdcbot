const Discord = require('discord.js')
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')
exports.run = async (client, message, args) => {
let rol = message.mentions.roles.first()
let kanal = message.mentions.channels.first()
if(!rol) return message.channel.send('lütfen bir rol etiketle. Örnek Kullanım: ``z!otorol @rol #kanal``')
if(!kanal) return message.channel.send('lütfen bir kanal etiketle. Örnek Kullanım: ``z!otorol @rol #kanal``')
db.set(`otorolrol_${message.guild.id}`, rol.id)
db.set(`otorolkanal_${message.guild.id}` ,kanal.id)
const embed = new Discord.MessageEmbed()
.setColor("BLACK")
.setDescription(`Otorol rolü **@${rol.name}** olarak, bildirimin gideceği kanal ise **#${kanal.name}** olarak ayarlandı\n\n**Not: Botun Rolü en üstte olmaz ise rol vermez.**`)
message.channel.send(embed)
};
    
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 0
};
exports.help = {
 name: 'otorol',
};