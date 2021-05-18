const Discord = require("discord.js");
exports.run = async (client, message, args) => {

const gamerwolf = new Discord.MessageEmbed()

.setColor('#7289DA')
.setDescription(`<:841392996469309472:844249729020854292> Pingim ・ ${client.ws.ping}`)
  
return message.channel.send(gamerwolf)
  
  
}
  
exports.conf = {
  enabled: true,  
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  usage: 'ping'
}; 