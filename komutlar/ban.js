const Discord = require('discord.js');
const moment = require('moment')
const talkedRecently = new Set();
const ayarlar = require('../ayarlar.json');
const prefix = ayarlar.prefix;

exports.run = async (bot, message, args, client) => {
  
const db = require('quick.db');
let data2 = await db.fetch(`banyetkilisi_${message.guild.id}`)
if(!data2)  return message.channel.send(`Ban yetkilisi rölünü bulamadım. Bilgi almak için: **z!ban-yardım**`)
let data3 = await db.fetch(`bankanal_${message.guild.id}`)
if(!data3)  return message.channel.send(`Ban Log Kanalını bulamadım. Bilgi almak için: **z!ban-yardım**`)
let yetkili = message.guild.roles.cache.get(data2)
if(!yetkili) return message.channel.send(`Ban yetkilisini bulamadım. Bilgi almak için: **z!ban-yardım**`)
let kanal = message.guild.channels.cache.get(data3)
if(!kanal) return message.channel.send(`Ban kanalı ayarlı değil. Bilgi almak için: **z!ban-yardım**`)
  

   if (!message.member.roles.cache.has(`${yetkili.id}`)) return message.channel.send(`**${ayarlar.prefix}ban** adlı komutu kullanabilmek için ${yetkili} rolüne sahip olman gerekiyor.`)
    let reason = args.slice(1).join(' ')
    
    if (!args[0]) return message.channel.send(`:warning: Yasaklamam gereken kullanıcıyı etiketlemelisin.`)
    let user = message.mentions.users.first() || bot.users.get(args[0]) || message.guild.members.find(u => u.user.username.toLowerCase().includes(args[0].toLowerCase())).user

    if (!user) return message.channel.send(`Etiketlediğin kullanıcıyı sunucuda bulamadım. Bir daha dene.`)
    let member = message.guild.member(user)
    if (!member) return message.channel.send(`Etiketlediğin kullanıcıyı sunucuda bulamadım. Bir daha dene.`)
    if (member.hasPermission("BAN_MEMBERS")) return message.channel.send(`Bu kullanıcıyı yasaklayamam.`)
   member.send(`**Venosa Ban** sistemi ile ${message.guild.name} (${message.guild.id}) sunucusunda ${message.author} (${message.author.id}) tarafından ${reason} sebebiyle yasaklandın.`)
        member.ban(`${message.author.tag} tarafından ${reason}`)
                message.channel.send(` ${user.tag}, isimli kişi başarıyla yasaklandı.`)
        const yasaklandı = new Discord.MessageEmbed()
  .setAuthor(user.tag, user.avatarURL)
  .setDescription(`Bir kişi sunucudan yasaklandı!`)
  .addField(`**Yasaklanan kişi:**`, user, true)
  .setColor(`#f3c7e1`)
  .addField(`**Yasaklayan kişi:**`, `<@${message.author.id}>`, true)
  .addField(`**Yasaklanma sebebi:**`, reason ? reason : 'Sebep belirtilmemiş.', true)
  .setThumbnail(user.avatarURL)
  .setTimestamp()
  .setFooter(`${message.channel.name} kanalında kullanıldı.`)
kanal.send(yasaklandı)
   }

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ban',
  description: 'Etiketlediğiniz kişiyi sebebi ile sunucudan banlar.',
	usage: 'bans kişi sebep',
  kategori: 'SUNUCU',
  permLvl: 'ADMINISTRATOR'
};