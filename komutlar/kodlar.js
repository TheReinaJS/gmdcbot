const Discord = require('discord.js')


exports.run = (client, message, args) => {
  
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("Bu Komutu Kullanmaya Yetkin Yok!!").then(m => m.delete(5000));
  
var user = message.guild.member(message.mentions.users.cache.first() || message.guild.members.cache.get(args[0]));
  
message.guild.setName(args.join(" ")).then(() => message.channel.cache.send(`Sunucunun İsmi \`${args.join(" ")}\` Yapıldı`)).catch(_ => message.channel.cache.send(`Yeterli Yetkim YOK!`))
}

exports.conf = { 
enabled: true, guildOnly: true, 
permlevel: 3, 
aliases: ["guild-name-change"]
}

exports.help = {
name: "sunucu-ismi-değiştir", 
description: "sunucu ismi değiştirir", 
usage: "sunucu-ismi-değiştir <yeni isim>"
}