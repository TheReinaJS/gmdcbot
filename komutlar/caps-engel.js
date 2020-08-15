const Discord = require('discord.js');
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
  
  if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`Bu Komutu Kullanabilmek İçin **Mesajları Yönet** Yetkisine Sahip Olmalısın`)
  let capslock = await db.fetch(`capslock_${message.guild.id}`)
  
  if (capslock) {
  db.delete(`capslock_${message.guild.id}`)
    
  const embed = new Discord.MessageEmbed()   
    
  .setDescription(`Capslock Engelleme Başarılı Bir Şekilde Deaktif Edildi!`)
  .setColor("GREEN")
  
  return message.channel.send(embed) 
  }
 
  if (!capslock) {
    
  db.set(`capslock_${message.guild.id}`, 'aç')
  
  const embed = new Discord.MessageEmbed()   
    
  .setDescription(`Capslock Engelleme Başarılı Bir Şekilde Akif Edildi!`)
  .setColor("GREEN")
  
  return message.channel.send(embed)  
  }
  
  };


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['caps-engel','capsengel','capslockengel','caps-lock-engel'],
  permLevel: 3
};

exports.help = {
  name: 'capslock-engel',
  description: 'Kinda Code & Only V12.',
  usage: 'capslock-engel'
};