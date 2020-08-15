const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (client, message, args) => {
  let prefix = args.slice(0).join(" ");
  if (!prefix) {
    const embed = new Discord.RichEmbed()
      .setColor("RED")
      .setDescription(`Lütfen Bir Prefix Belirtiniz! Örnek : ${prefix}prefix **!**`)
      .setFooter(client.user.username, client.user.avatarURL);

    message.channel.send(embed);
    return;
  }
  const embed = new Discord.RichEmbed()
      .setColor("GREEN")
      .setDescription(`Prefix ; \`${prefix}\` Olarak Ayarlandı!`)
      .setFooter(client.user.username, client.user.avatarURL);

    message.channel.send(embed);
  db.set(`prefix_${message.guild.id}`, prefix)
};

module.exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 3
};

module.exports.help = {
  name: "prefix",
  description: "prefix",
  usage: "prefix"
};