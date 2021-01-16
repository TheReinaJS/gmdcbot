const Discord = require ("discord.js");

exports.run = (client, message) => {

const EmbedFwhyCode = new Discord.MessageEmbed()

.setColor("RANDOM")
.setThumbnail("https://cdn.discordapp.com/attachments/784405293139623967/784476446009589800/780535841630060554.gif")
.setDescription(`
▬▬▬▬▬「 :closed_lock_with_key: **Yardım Menüsü** :closed_lock_with_key: 」▬▬▬▬▬

> **» +aduketçek :** Etiketlediğiniz kişiye aduket çekersiniz.
 **» +slowmode :** Bot komutu kullandığınız kanalda yavaş mod uygular.`)
.setImage('https://media.discordapp.net/attachments/781872196654071819/784490263925489695/standard_8.gif')


 
.setFooter(client.user.username + "", client.user.avatarURL)
.setTimestamp();

return message.channel.send(EmbedFwhyCode)
.then; //FwhyCode

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'yardım', 
    description: 'The Help Command',
    usage: 'help'
};