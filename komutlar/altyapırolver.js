const Discord = require('discord.js');
exports.run = function(client, message) {
  
  var role = message.guild.roles.cache.find(role => role.id === "741847424569573477"); 
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