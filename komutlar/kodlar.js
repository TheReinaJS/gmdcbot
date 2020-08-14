const Discord = require('discord.js');
exports.run = function(client, message, args) {

message.author.send(new Discord.MessageEmbed()
  .setDescription('**KİNSTA KOD ALMA BİLGİ**')
  .addField(`** **`, `\`Ücretsiz\` **__JavaScript__**`)
  .addField(`** **`, `\`3 İnvite\`  **</Alt Yapı/>**`)
  .addField(`** **`, `\`15 İnvite\` **</Gold Üye/>**`)
  .addField(`** **`, `\`30 İnvite\`  **</Premium/>**`)
  .setColor("BLACK"))
  
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kodlar',
};