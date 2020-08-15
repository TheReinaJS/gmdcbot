const Discord = require("discord.js");
const moment = require("moment");
const ayarlar = require("../ayarlar.json");

exports.run = (client, message, params) => {
  
    if (!message.guild) {
      
    const ozelmesajuyari = new Discord.MessageEmbed()
    
    .setColor("RED")
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField("Uyarı :","`sunucu-bilgi` Adlı Komutu Özel Mesajlarda Kullanamazsın!"
      
    );
      
    return message.author.send(ozelmesajuyari);
      
    }
  
    if (message.channel.type !== "dm") {
    const guild = message.guild.id
    var tarih = ''
    
    if(moment(guild.createdAt).format('MM') === '01') {
    var tarih = `${moment(guild.createdAt).format('DD')} Ocak ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
    }
    
    if(moment(guild.createdAt).format('MM') === '02') {
    var tarih = `${moment(guild.createdAt).format('DD')} Şubat ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
    }
    
    if(moment(guild.createdAt).format('MM') === '03') {
    var tarih = `${moment(guild.createdAt).format('DD')} Mart ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
    }
    
    if(moment(guild.createdAt).format('MM') === '04') {
    var tarih = `${moment(guild.createdAt).format('DD')} Nisan ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
    }
    
    if(moment(guild.createdAt).format('MM') === '05') {
    var tarih = `${moment(guild.createdAt).format('DD')} Mayıs ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
    }
    
    if(moment(guild.createdAt).format('MM') === '06') {
    var tarih = `${moment(guild.createdAt).format('DD')} Haziran ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
    }
    
    if(moment(guild.createdAt).format('MM') === '07') {
    var tarih = `${moment(guild.createdAt).format('DD')} Temmuz ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
    }
    
    if(moment(guild.createdAt).format('MM') === '08') {
    var tarih = `${moment(guild.createdAt).format('DD')} Ağustos ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
    }
    
    if(moment(guild.createdAt).format('MM') === '09') {
    var tarih = `${moment(guild.createdAt).format('DD')} Eylül ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
    }
    
    if(moment(guild.createdAt).format('MM') === '10') {
    var tarih = `${moment(guild.createdAt).format('DD')} Ekim ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
    }
    
    if(moment(guild.createdAt).format('MM') === '11') {
    var tarih = `${moment(guild.createdAt).format('DD')} Kasım ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
    }
    
    if(moment(guild.createdAt).format('MM') === '12') {
    var tarih = `${moment(guild.createdAt).format('DD')} Aralık ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
    }
  
    const sunucubilgi = new Discord.MessageEmbed()
    
    .setColor("GREEN")
    
    .setAuthor(message.guild.name, message.guild.iconURL)
    
    .addField("👑 Sunucu Sahibi", message.guild.owner)
    .addField(":clipboard: Sunucu Adı", message.guild.name)
    .addField(":iphone: Sunucu ID", message.guild.id)
    .addField("🎭 Rol Sayısı", message.guild.roles.size)
    .addField(":receipt: Kanal Sayısı",message.guild.channels.size)
    .addField("😍 Emoji Sayısı", message.guild.emojis.size)
    .addField(":globe_with_meridians: Sunucu Bölgesi", message.guild.region)
    .addField(":bust_in_silhouette: Üye Sayısı", message.guild.memberCount)
    .addField("🔇 AFK Kanalı", message.guild.afkChannel)
    .addField(':timer: AFK Zaman Aşımı', message.guild.afkTimeout)
    .addField(':tools: Sistem Mesaj Kanalı ', message.guild.systemChannel)
    .addField(":calendar_spiral: Oluşturulma Tarihi", `${tarih}`)
    
    .setThumbnail(message.guild.iconURL);
    
    return message.channel.send(sunucubilgi)
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sunucu-bilgi"],
  permLevel: 0
};

exports.help = {
  name: "sunucubilgi",
  description: "Kinda Code & Only V12",
  usage: "sunucubilgi"
};