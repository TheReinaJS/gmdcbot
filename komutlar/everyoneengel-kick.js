const db = require('quick.db');
const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "z!";
  if (!message.member.hasPermission("BAN_MEMBERS")) {
    const embed = new Discord.MessageEmbed()
      .setDescription(`Bu komutu kullanabilmek için **Yönetici** yetkisine sahip olmalısın!`)
      .setColor("BLACK")
      .setFooter(client.user.username, client.user.avatarURL);
    message.channel.send(embed);
    return;
  }
  if (!args[0]) {
    const embed = new Discord.MessageEmbed()
      .setColor("BLACK")
      .setTitle("Everyone Engel Sistemi")
      .setDescription(`Hatalı kullanım! Örnek Kullanım: ${prefix}**everyone-kick aç/kapat**`)
      .setFooter(client.user.username, client.user.avatarURL);

    message.channel.send(embed);
    return;
  }
  let kufur = await db.fetch(`ever_${message.guild.id}`);
  if (args[0] == "aç") {
    if (kufur) {
      const embed = new Discord.MessageEmbed()
        .setColor("BLACK")
        .setTitle("Everyone Engel Sistemi")
        .setDescription("Everyone Engel zaten aktif. Kapatmak için: **z!everyone-kick kapat**")
        .setFooter(client.user.username, client.user.avatarURL);

      message.channel.send(embed);
      return;
    } else {
      db.set(`ever_${message.guild.id}`, "acik");
      const embed = new Discord.MessageEmbed()
        .setColor("BLACK")
        .setTitle("Everyone Engel Sistemi")
        .setDescription("Everyone Engel Kick Başarıyla açıldı!")
        .setFooter(client.user.username, client.user.avatarURL);

      message.channel.send(embed);
    }
  } else if (args[0] == "kapat") {
    db.delete(`ever_${message.guild.id}`);
    const embed = new Discord.MessageEmbed()
      .setColor("BLACK")
      .setTitle("Everyone Engel Sistemi")
      .setDescription("Everyone Engel Kick Başarıyla Kapatıldı.")
      .setFooter(client.user.username, client.user.avatarURL);

    message.channel.send(embed);
  }
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2,
  kategori: "sunucu"
};

exports.help = {
  name: "everyone-kick",
  description: "Venosa Everyone Engel Kick Sistemi.",
  usage: "everyone-kick"
};
