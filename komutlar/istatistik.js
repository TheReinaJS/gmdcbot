const Discord = require('discord.js');
const moment = require('moment');
const ayarlar = require('../ayarlar.json');
require('moment-duration-format');
exports.run = async(client, message, args) => {

let batuhan = new Discord.MessageEmbed()
.setThumbnail(message.author.displayAvatarURL())
.setAuthor(client.user.username, client.user.avatarURL)
.addField("Veriler", `Toplam sunucu: **${client.guilds.cache.size}** \nToplam kullanıcı: **${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}** \nToplam kanal: **${client.channels.cache.size}**`)
.setTimestamp()
.setColor("BLACK")
message.channel.send(batuhan)
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    permLevel: 0,
    aliases: ['bot']
  };
  
  exports.help = {
    name: 'bot-bilgi',
    description: 'Türkiyenin Saatini Gösterir',
    usage: 'istatistik'
  };