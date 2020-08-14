const Discord = require("discord.js");
const ms = require("ms");
const ayarlar = require('../ayarlar.json');
const prefix = ayarlar.prefix;

module.exports.run = async (client, message, args) => {
  const db = require('quick.db');
let botisim = message.guild.members.cache.get(client.user.id).displayName
let data = await db.fetch(`jailrol_${message.guild.id}`)
if(!data)  return message.channel.send(`Mute rolünü bulamadım. Bilgi Almak için **z!mute-yardım**`)
let data2 = await db.fetch(`jailyetkilisi_${message.guild.id}`)
if(!data2)  return message.channel.send(`mute yetkilisi rolünü bulamadım. Bilgi Almak için **z!mute-yardım**`)
let data3 = await db.fetch(`jailkanal_${message.guild.id}`)
if(!data3)  return message.channel.send(`mute kanalını bulamadım. Bilgi Almak için **z!mute-yardım**`)
let rol = message.guild.roles.cache.get(data)
if(!rol) return message.channel.send(`mute rolü ayarlı değil. Bilgi Almak için **z!mute-yardım**`)
let yetkili = message.guild.roles.cache.get(data2)
if(!yetkili) return message.channel.send(`mute yetkilisi ayarlı değil. Bilgi Almak için **z!mute-yardım**`)
let kanal = message.guild.channels.cache.get(data3)
if(!kanal) return message.channel.send(`mute log kanalı ayarlı değil. Bilgi Almak için **z!mute-yardım**`)

  if (!message.member.roles.cache.has(`${yetkili.id}`)) return message.channel.send(`**${ayarlar.prefix}mute** isimli komutu kullanabilmek için ${yetkili} rolüne sahip olman gerekiyor.`)
  let kişi = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
  if(!kişi) return message.channel.send(`Mutelemem gereken kullanıcıyı etiketlemelisin.`)
  if(kişi.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu kişiyi susturamam.`)
  
  let zaman = args[1]
  if(!args[1]) return message.channel.send(`Mute süresini belirtmelisin`)

let sebep = args.join(' ').slice(args[1].length+args[0].length + 1)
if(!sebep) sebep = 'Sebep belirtilmemiş.'
  
  const wasted = new Discord.MessageEmbed()
  .setAuthor(message.author.tag, message.author.avatarURL)
  .setColor(`#f3c7e1`)
  .addField(`**Mute atılan kişi:**`, kişi, true)
  .addField(`**Muteyi Atan Kişi:**`, `<@${message.author.id}>`, true)
  .addField(`**Sebep:**`, sebep, true)
  .addField(`**Süre:**`, zaman.replace(/d/, ' gün').replace(/s/, ' saniye').replace(/m/, ' dakika').replace(/h/, ' saat'), true)
  .setImage("https://cdn.discordapp.com/attachments/719947493923750001/720273268489191514/ban5.gif")
  .setTimestamp()
  .setFooter(`${message.channel.name} kanalında kullanıldı.`)
  .setThumbnail(message.author.avatarURL)
  
  const bitti = new Discord.MessageEmbed()
  .setAuthor(message.author.tag, message.author.avatarURL)
  .setDescription(`Muteli kişinin mutesi bitti.`)
  .addField(`**Mutesi biten kullanıcı:**`, kişi, true)
  .addField(`**Muteyi Atan Kişi:**`, `<@${message.author.id}>`, true)
  .setTimestamp()
  .setColor(`#f3c7e1`)
  .setFooter(`Mute süresi bitti. ${message.channel.name} kanalında mute atıldı!`)
  .setThumbnail(message.author.avatarURL)
  
 kişi.roles.add(rol.id);
    kişi.roles.cache.forEach(r => {
kişi.roles.remove(r.id)
db.set(`${message.guild.id}.jail.${kişi.id}.roles.${r.id}`, r.id )})
    db.set(`${message.guild.id}.jail.${kişi.id}`, 'Venosa')
    kanal.send(wasted)
    message.channel.send(`${kişi} isimli kişi başarıyla mutelendi.`)
    setTimeout(async () =>{
    kişi.roles.remove(rol.id)
    kanal.send(bitti)
  }, ms(zaman));
            setTimeout(async () =>{
message.guild.roles.cache.forEach(async r => {
const i = await db.fetch(`${message.guild.id}.jail.${kişi.id}.roles.${r.id}` )
if(i != r.id)  return ;
if(i){kişi.roles.add(i)}
db.delete(`${message.guild.id}.jail.${kişi.id}.roles.${r.id}`)
})
          db.delete(`${message.guild.id}.jail.${kişi.id}`)
              }, ms(zaman));
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
exports.help = {
 name: 'mute',
 description: 'Bir kişiyi belirlediğiniz rol ile mute yollarsınız.',
 usage: 'mute @üye <10s,10m,10h,10d> sebep',
 
};
