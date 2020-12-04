const Discord = require('discord.js');

exports.run = async (client, message, args) => {
   
  let tag = 'TAG'
    const voiceChannels = message.guild.channels.filter(c => c.type === 'voice');
    let count = 0;
    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
 
    const embed = new Discord.RichEmbed()
        .setColor("BLACK")
        .addField("<a:sag:775385830872973312> Sunucudaki üye sayısı", message.guild.memberCount)
        .addField("<a:sag:775385830872973312> Seslideki üye sayısı", count)
            message.channel.send(embed);

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'say',
    description: 'Say',
    usage: 'say'
};