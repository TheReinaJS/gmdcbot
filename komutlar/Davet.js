const Discord = require("discord.js");

exports.run = (client, message) => {

const mhelp = new Discord.MessageEmbed()
.setColor('#7289DA')
.setDescription(`**Botu Kendi Sunucuna ・ **[Davet Et](https://discordapp.com/oauth2/authorize?client_id=844208181668479016&scope=bot&permissions=8) `)  
message.channel.send(mhelp)

}; 
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: ["Davet"], 
    permLevel: 0 
  };
 
  exports.help = {
    name: 'davet', 
    description: 'yardım menüsü',
    usage: 'yardım'
  };