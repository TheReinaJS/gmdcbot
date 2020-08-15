const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (client, message, args) => {
  let prefix = await db.fetch(`prefix_${message.guild.id}`)
  if (!prefix) {
    const embed = new Discord.MessageEmbed()
      .setColor("RED")
      .setDescription(`Prefix Zaten Ayarlanmamış!`)
      .setFooter(client.user.username, client.user.avatarURL);

    message.channel.send(embed);
    return;
  }
  const embed = new Discord.MessageEmbed()
      .setColor("GREEN")
      .setDescription(`Prefix Başarıyla Sıfırlandı!`)
      .setFooter(client.user.username, client.user.avatarURL);

    message.channel.send(embed);
  db.delete(`prefix_${message.guild.id}`)
};

module.exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["prefixsıfırla"],
  permLevel: 3
};

module.exports.help = {
  name: "prefix-sıfırla",
  description: "prefix-sıfırla",
  usage: "prefix-sıfırla"
};
