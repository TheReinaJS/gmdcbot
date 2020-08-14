const { Discord, MessageEmbed } = require("discord.js");
const db = require("quick.db");

exports.run = async function(client, message, args) {
  if (!message.member.hasPermission("MANAGE_GUILD")) {
    const embed = new MessageEmbed()
      .setColor("#0AFF00")
      .setDescription(`Bu komutu kullanabilmek için **Sunucuyu Yönet** yetkisine sahip olmalısın.`)
      .setFooter(`${client.user.username} Log  sistemi.`,message.guild.iconURL({ dynamic: true }))
      .setTimestamp();
    message.channel.send(embed).then(a => a.delete({ timeout: 10000 }));
    return;
  }
  if (await db.fetch(`logKanal_${message.guild.id}`)) {
    const embed = new MessageEmbed()

      .setColor("#0AFF00")
      .setDescription(`Log kanalı zaten ayarlı.\nSıfırlamak için **z!log-sıfırla**`)
      .setFooter(`${client.user.username} Log  sistemi.`,message.guild.iconURL({ dynamic: true }))
      .setTimestamp();
    message.channel.send(embed).then(a => a.delete({ timeout: 10000 }));

    return;
  }
  const channel = message.mentions.channels.first();
  if (!channel) {
    const embed = new MessageEmbed()
      .setColor("#0AFF00")
      .setDescription(`Ayarlamam için bir kanal belirtmelisin.\nDoğru kullanım **z!log #kanal**`)
      .setFooter(`${client.user.username} Log  sistemi.`,message.guild.iconURL({ dynamic: true }))
      .setTimestamp();
    message.channel.send(embed).then(a => a.delete({ timeout: 10000 }));
    return;
  } else {
    await db.set(`logKanal_${message.guild.id}`, channel.id);
    const embed = new MessageEmbed()
      .setColor("#0AFF00")
      .setDescription(`Log kanalı başarıyla ${channel.name} olarak ayarlandı.`)
      .setFooter(`${client.user.username} Log  sistemi.`,message.guild.iconURL({ dynamic: true }))
      .setTimestamp();
    message.channel.send(embed).then(a => a.delete({ timeout: 10000 }));
  }
};

exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'mod-log',
  description: 'Mesajınızı tersden yazar.',
  usage: 'mesajdöndür <mesaj>'
};
