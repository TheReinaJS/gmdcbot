const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message, args) => {
  
if (!message.member.hasPermission("MANAGE_GUILD")) {
  
const embed = new Discord.RichEmbed()

.setColor("RED")
.setDescription("**Çıkış Kanalını Ayarlamak İçin `Sunucuyu Yönet` İznine Sahip Olmalısın!");
  
return message.channel.send(embed);
}
  
let kinal = db.fetch(`baybayK_${message.guild.id}`);
if (db.has(`baybayK_${message.guild.id}`)) {
  
const embed = new Discord.RichEmbed()

.setColor("RED")
.setDescription(`**Çıkış Kanalı <#${kinal}> Olarak Ayarlı! Kapatmak İçin** \`${ayarlar.prefix}çıkış-kanal kapat\``);
  
return message.channel.send(embed);
}
  
if (args[0] === 'kapat') {
  
db.delete(`${message.guild.id}.baybayK`)
  
const kinda = new Discord.MessageEmbed() 
  
.setDescription(`Çıkış Kanalı Başarıyla Sıfırlandı!`)
.setColor("GREEN")
  
return message.channel.send(kinda)
}

let kanal = message.mentions.channels.first();

if (!kanal) {
  
const embed = new Discord.RichEmbed()

.setColor("RED")
.setDescription(`**Çıkış Kanalını Etiketlemedin! \`Doğru Kullanım : ${ayarlar.prefix}çıkış-kanal #kanal\`**`);
  
return message.channel.send(embed);
}
  
db.set(`baybayK_${message.guild.id}`, kanal.id);

const embed = new Discord.RichEmbed()

.setColor("GREEN")
.setDescription(`**Çıkış Kanalı ${kanal} Olarak Ayarlandı!**`);
  
message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["baybay-kanal", "bb-kanal","çıkışkanal","bbkanal","bay-bay-kanal","baybaykanal"],
  permLevel: 0
}; 

exports.help = {
  name: "çıkış-kanal",
  description: "Baybay kanalını ayarlamaya yarar.",
  usage: "çıkış-kanal"
};