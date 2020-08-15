const Discord = require('discord.js');
exports.run = function(client, message) {
  
    if(!message.member.roles.has("728928753215995914")) return message.channel.send(`<a:hyr:728937091068854282> ・ Sadece **Yetkili** Bu Komudu Kullanabilir !`)
  
  var role = message.guild.roles.cache.find(role => role.id === "VERİLİCEKROLID"); 
  if (message.member.roles.cache.has(role.id)) return message.channel.send("Zaten bu role sahipsin!")
  message.member.roles.add(role.id);
  message.channel.send(`Rol verildi!`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'altyapı',
};