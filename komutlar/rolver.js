const Discord = require('discord.js');
exports.run = function(client, message) {
  
  var role = message.guild.roles.cache.find(role => role.id === "741847275818582116"); 
  if (message.member.roles.cache.has(role.id)) return message.channel.send("Zaten bu role sahipsin!")
  message.member.roles.add(role.id);
  message.channel.send(`Alt yapı rolü verildi!`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'js',
};