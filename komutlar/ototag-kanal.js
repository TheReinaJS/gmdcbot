const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, params, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için **Yönetici** yetkisine sahip olmalısın.`);
     let otoTagkanal = message.mentions.channels.first();
     if (!otoTagkanal) return message.channel.send('Oto tag sistemini açmak için bir kanal etiketlemesin. Örnek Kullanım: **z!oto-tag-kanal #kanal**')
     db.set(`ototagKanal_${message.guild.id}`, message.mentions.channels.first().id)
     let i = await db.fetch(`ototagKanal_${message.guild.id}`)
            	  	  const embed = new Discord.MessageEmbed()
  .setDescription(`Ototag Kanalı Başarıyla Ayarlandı Kanal <#${i}> Olarak Ayarlandı!` + "\n\n Kapatmak için **z!oto-tag-kapat**")
    .setColor("#F0C30D")
    .setTimestamp();
  message.channel.send(embed);
};

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 0
};

exports.help = {
 name: 'oto-tag-kanal',
 description: 'neblm',
 usage: 'ototagkanal'
};