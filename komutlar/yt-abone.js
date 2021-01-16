let Discord = require("discord.js")//sharpen
let database = require("quick.db")
let ayarlar = require("../ayarlar.json")



exports.run = async(client, message, args) => {//sharpen
let abonesorumlusu = await database.fetch(`abonesorumlusu.${message.guild.id}`)
let abonemesaj = await database.fetch(`abonemesaj.${message.guild.id}`)//sharpen
let abonerol = await database.fetch(`abonerol.${message.guild.id}`)
  let abonekisi = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
if(!abonerol) return message.channel.send(`${message.author} Verilecek Abone Rolü Ayarlı Değil!`).then(msg => msg.delete(100))
  if(!abonemesaj) return message.channel.send(`${message.author} Abone Mesaj Kanalı Ayarlı Değil!`).then(msg => msg.delete(100))
  if(!abonesorumlusu) return message.channel.send(`${message.author} Abone sorumlusu rolü ayarlanmamış!`).then(msg => msg.delete(100))
  message.delete()
  let user = message.mentions.users.first()
  if(!message.member.roles.cache.has(abonesorumlusu)) return message.channel.send(`${message.author} Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin.`).then(msg => msg.delete(100))
  
  if(!message.mentions.users.first()) return message.channel.send(`${message.author} Bir Üye Etiketle!`).then(msg => msg.delete(100))
   await(abonekisi.roles.add(abonerol))
  const embed = new Discord.MessageEmbed()
  .setTitle(`Başarılı!`)
.setThumbnail("https://cdn.discordapp.com/attachments/798513335439065098/798638180546248755/replace_logo.png")
  .addField(`・Yetkili:`, `${message.author}`, true)
  .addField(`・Abone:`, `${user}`, true)
  .addField(`・Mesaj:`,`[Tıkla](https://discord.com/channels/${message.guild.id}/${message.channel.id}/${message.id})`, true)
  .setColor(`#9b00ff`)
  .setFooter(`${client.user.username} | YouTuber Sistemi`)
         .setImage("https://cdn.discordapp.com/attachments/799591806068981790/799913490940166174/youtube.gif")
  message.guild.channels.cache.get(abonemesaj).send(embed).then(msg => msg.delete(100))
  
}//sharpen

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['abone'],
  perm: 0 //sharpen
}
exports.help = {
  name: 'abone'
}

exports.play = {
  kullanım: 'abone @üye',
  açıklama: 'Etiketlenen Üyeye Abone Rolü Verirsiniz.',
  kategori: 'Abone'
}
//sharpen//sharpen//sharpen