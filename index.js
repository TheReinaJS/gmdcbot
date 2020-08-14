const discord = require('discord.js');
const fs = require('fs');
const jimp = require("jimp");
const http = require('http');
const express = require('express');
const ayarlar = require('./ayarlar.json');
const app = express();
const db = require('quick.db');
const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', async () => {
   client.appInfo = await client.fetchApplication();
  setInterval( async () => {
    client.appInfo = await client.fetchApplication();
  }, 600);
  
});

const log = message => {
  console.log(` ${message}`);
};
require('./util/eventLoader.js')(client);

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`Yüklenen komut: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});
client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
           reject(e);
        }
    });
};
client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};
client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};
client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};
client.login(process.env.TOKEN)

//_________________________________________________________________________________________________________________________________//
client.on("message", async (msg, member, guild) => {
    let i = await db.fetch(`saas_${msg.guild.id}`);
    if (i === "açık") {
      if (msg.content.toLowerCase() === "sa") {
        msg.reply("**Aleyküm Selam, Hoşgeldin**");
      }
    }
  });
//_________________________________________________________________________________________________________________________________//

//_________________________________________________________________________________________________________________________________//
const ms = require("parse-ms");
const { DiscordAPIError } = require("discord.js");
client.on("message", async message => {
  if (message.author.bot) return;
  if (!message.guild) return;
  if (message.content.includes(`afk`)) return;
 
  if (await db.fetch(`afk_${message.author.id}`)) {
    db.delete(`afk_${message.author.id}`);
    db.delete(`afk_süre_${message.author.id}`);
    const embed = new Discord.MessageEmbed()
    .setColor('#006400')
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription(`AFK Modundan başarıyla çıkıldı.`)
    message.channel.send(embed)
  }
 
  var USER = message.mentions.users.first();
  if (!USER) return;
  var REASON = await db.fetch(`afk_${USER.id}`);
 
  if (REASON) {
    let süre = await db.fetch(`afk_süre_${USER.id}`);
    let timeObj = ms(Date.now() - süre);
    const afk = new Discord.MessageEmbed()
    .setColor('#FF0000')
    .setDescription(`**BU KULLANICI AFK**\n\n**AFK Olan Kullanıcı:** \`${USER.tag}\`\n**AFK süresi:** \`${timeObj.hours}saat\` \`${timeObj.minutes}dakika\` \`${timeObj.seconds}saniye\`\n**Sebep:** \`${REASON}\``)
    message.channel.send(afk)
  }
});
//_________________________________________________________________________________________________________________________________//

//_________________________________________________________________________________________________________________________________//
client.on("message", async message => {
  let ever = await db.fetch(`ever_${message.guild.id}`);
  let sayı = await db.fetch(`sayi_${message.author.id}`);
  if (ever === "acik") {
    const a = message.content;
    if (a === "@everyone" || a === "@here") {
      if (message.member.hasPermission("BAN_MEMBERS")) return;
      db.add(`sayi_${message.author.id}`, 1);
      if (sayı == null) {
        const embed = new Discord.MessageEmbed()
          .setColor("BLACK")
          .setDescription(
            "Bu 1. uyarın! Everyone, Here yasak Lütfen tekrarlama! Aksi taktirde atılacaksın!\n(1/3)"
          )
          .setFooter(client.user.username, client.user.avatarURL);
        message.channel.send(embed);
        message.delete();
        return;
      }
      if (sayı === 1) {
        const embed = new Discord.MessageEmbed()
          .setColor("BLACK")
          .setDescription(
            "Bu 2. uyarın! Everyone, Here yasak Lütfen tekrarlama! Aksi taktirde atılacaksın!\n(2/3)"
          )
          .setFooter(client.user.username, client.user.avatarURL);
        message.channel.send(embed);
        message.delete();
        return;
      }
      if (sayı > 2) {
        message.delete();
        const embed = new Discord.MessageEmbed()
          .setColor("BLACK")
          .setDescription("Uyarıların bitti sunucudan atılıyorsun.")
          .setFooter(client.user.username, client.user.avatarURL);
        message.channel.send(embed);
        db.delete(`sayi_${message.author.id}`);
        message.member.kick();
        return;
      }
    }
  } else {
    return;
  }
});
//_________________________________________________________________________________________________________________________________//


//_________________________________________________________________________________________________________________________________//
client.on("message", async msg => {
  
let hereengelle = await db.fetch(`hereengel_${msg.guild.id}`)
 if (hereengelle == 'acik') {
   
      const here = ["@here", "@everyone"];
  if (here.some(word => msg.content.toLowerCase().includes(word)) ) {
    if (!msg.member.hasPermission("ADMINISTRATOR")) {
      msg.delete()
       msg.channel.send(`<@${msg.author.id}>`).then(message => message.delete());
        var e = new Discord.MessageEmbed()
        .setColor("BLACK")
        .setAuthor("Everyone Engel Sistemi")
        .setDescription(`Bu sunucuda Everyone ve Here yasak!`)
        msg.channel.send(e);
        }
    }
 } else if (hereengelle == 'kapali') {
 
}
});
//_________________________________________________________________________________________________________________________________//


//_________________________________________________________________________________________________________________________________//
client.on('channelUpdate', async channel => {
  const guild = channel.guild;
  const logKanalID = await db.fetch(`logKanal_${guild.id}`)
  if(logKanalID == null || !logKanalID) return
  const logKanal = guild.channels.cache.get(logKanalID)
  guild.fetchAuditLogs(11).then(a=>{
    const kanal = a.entries.first()
    var degişiklik;
    var multiply;
    if(kanal.changes[0].key =='name') {
      degişiklik = 'İsim güncellemesi.'
      multiply = `Eski isim: ${kanal.changes[0].old}\nYeni isim: ${kanal.changes[0].new}`
    }
    if(kanal.changes[0].key =='nsfw') {
        degişiklik = 'NSFW'
      if(kanal.changes[0].old == false) {
       multiply = `NSFW Özelliği açıldı.`
      }
      else if(kanal.changes[0].old == true) multiply = `NSFW Özelligi kapatıldı.`
    }
    if (kanal.changes[0].key == "id") {
      degişiklik = "Kanaldaki bir rolün yada kişinin yetkisi güncellendi.";
      if (kanal.changes[1].key == "type") {
        if (kanal.changes[1].old == "member" || kanal.changes[1].new == "member") {
          if (kanal.changes[1].old == "member") {
            multiply = `<@${kanal.changes[0].old}>'in üzerinde birşeyler oldu.`;
          } else {
            multiply = `<@${kanal.changes[0].new}>'in üzerinde birşeyler oldu.`;
          }
        } else if (kanal.changes[1].old == "role" || kanal.changes[1].new == "role") {
          if (kanal.changes[1].old == "role") {
            multiply = `<@&${kanal.changes[0].old}>'in üzerinde birşeyler oldu.`;
          } else {
            multiply = `<@&${kanal.changes[0].new}>'in üzerinde birşeyler oldu.`;
          }
        }
      }
    }else if(kanal.changes[0].key.includes('allow')) return
   if(kanal.changes[0].key == 'rate_limit_per_user') {
     degişiklik = 'Kanaldaki mesaj atma süresi güncellendi.'
     if(kanal.changes[0].old != 0) {
       multiply = `Kanalın mesaj gönderilme süresi kapatıldı.`
     }else if (kanal.changes[0].old == 0) {
       multiply = `Kanalın mesaj gönderilme süresi ayarlandı. Süre: ${kanal.changes[0].new} Saniye.`
     }
   }
    var user = a.entries.first().executor
    const embed = new Discord.MessageEmbed()
    .setColor('#0AFF00')
    .setTitle('Kanal güncellendi.')
    .addField('Kanalı Güncelliyen:',user.username,true)
    .addField('Güncellenen kanal:',kanal.target.name,true)
    .addField('Güncellenen:',degişiklik,true)
    .addField('Güncelleme Bilgisi:',multiply,true)
    .setFooter(`${client.user.username} Log sistemi.`,guild.iconURL({dynamic:true}))
    .setTimestamp()
    logKanal.send(embed)
  })
})
client.on('channelCreate', async channel => {
    if(!channel.guild) return
    const  guild = channel.guild;
    const logKanalID = await db.fetch(`logKanal_${guild.id}`)
    if(logKanalID == null || !logKanalID) return
    const logKanal = guild.channels.cache.get(logKanalID)
    guild.fetchAuditLogs(10).then(a=>{
    const kanal = a.entries.first()
    const user = a.entries.first().executor
    const embed = new Discord.MessageEmbed()
    .setColor('#0AFF00')
    .setTitle('Kanal oluşturuldu.')
    .addField('Kanalı oluşturan:',user.username,true)
    .addField('Kanalın ismi:',kanal.target.name,true)
    .addField('Kanal ID:',kanal.target.id,true)
    .setFooter(`${client.user.username} Log sistemi.`,guild.iconURL({dynamic:true}))
    .setTimestamp()
    logKanal.send(embed)
   })   
})
client.on('channelDelete', async channel => {
    const  guild = channel.guild;
    const logKanalID = await db.fetch(`logKanal_${guild.id}`)
    if(logKanalID == null || !logKanalID) return
    const logKanal = guild.channels.cache.get(logKanalID)
    guild.fetchAuditLogs(12).then(a=>{
    const kanal = a.entries.first()
    const user = a.entries.first().executor
    const embed = new Discord.MessageEmbed()
    .setColor('#0AFF00')
    .setTitle('Kanal silindi.')
    .addField('Kanalı silen:',user.username,true)
    .addField('Kanalın ismi:',channel.name,true)
    .addField('Kanal ID:',channel.id,true)
    .setFooter(`${client.user.username} Log sistemi.`,guild.iconURL({dynamic:true}))
    .setTimestamp()
    logKanal.send(embed)
   })   
})
client.on('emojiCreate', async emoji => {
    const guild = emoji.guild;
    const logKanalID = await db.fetch(`logKanal_${guild.id}`)
    if(logKanalID == null || !logKanalID) return
    const logKanal = guild.channels.cache.get(logKanalID)
    guild.fetchAuditLogs(60).then(a=>{
    const user = a.entries.first().executor
    const embed = new Discord.MessageEmbed()
    .setColor('#0AFF00')
    .setTitle('Emoji oluşturuldu.')
    .addField('Emojiyi oluşturan:',user.username,true)
    .addField('Emoji ismi:',emoji.name,true)
    .addField('Emoji ID:',emoji.id,true)
    .setThumbnail(emoji.url)
    .setFooter(`${client.user.username} Log sistemi.`,guild.iconURL({dynamic:true}))
    .setTimestamp()
    logKanal.send(embed)
    })
})
client.on('emojiDelete', async emoji => {
    const guild = emoji.guild;
    const logKanalID = await db.fetch(`logKanal_${guild.id}`)
    if(logKanalID == null || !logKanalID) return
    const logKanal = guild.channels.cache.get(logKanalID)
    guild.fetchAuditLogs(62).then(a=>{
    const user = a.entries.first().executor
    const embed = new Discord.MessageEmbed()
    .setColor('#0AFF00')
    .setTitle('Emoji silindi.')
    .addField('Emojiyi silen:',user.username,true)
    .addField('Emoji ismi:',emoji.name,true)
    .addField('Emoji ID:',emoji.id,true)
    .setThumbnail(emoji.url)
    .setFooter(`${client.user.username} Log sistemi.`,guild.iconURL({dynamic:true}))
    .setTimestamp()
    logKanal.send(embed)
    })
})
client.on('roleCreate', async role => {
  const guild = role.guild;
  const logKanalID = await db.fetch(`logKanal_${guild.id}`)
  if(logKanalID == null || !logKanalID) return
  const logKanal = guild.channels.cache.get(logKanalID)
  guild.fetchAuditLogs(30).then(a=>{
  const rol = a.entries.first()
  const user = a.entries.first().executor
  const embed = new Discord.MessageEmbed()
    .setColor('#0AFF0')
    .setTitle('Rol oluşturuldu.')
    .addField('Rolü oluşturan:',user.username,true)
    .addField('Oluşturulan rol:',rol.target.name,true)
    .addField('Rol ID:',role.id,true)
    .setFooter(`${client.user.username} Log sistemi.`,guild.iconURL({dynamic:true}))
    .setTimestamp()
    logKanal.send(embed)
   })
})
client.on('roleDelete', async role => {
  const guild = role.guild;
  const logKanalID = await db.fetch(`logKanal_${guild.id}`)
  if(logKanalID == null || !logKanalID) return
  const logKanal = guild.channels.cache.get(logKanalID)
  guild.fetchAuditLogs(32).then(a=>{
  const rol = a.entries.first()
  const user = a.entries.first().executor
  const embed = new Discord.MessageEmbed()
    .setColor(role.hexColor)
    .setTitle('Rol silindi.')
    .addField('Rolü silen:',user.username,true)
    .addField('Silinen rol:',role.name,true)
    .addField('Rol ID:',role.id,true)
    .setFooter(`${client.user.username} Log sistemi.`,guild.iconURL({dynamic:true}))
    .setTimestamp()
    logKanal.send(embed)
   })
})
client.on('messageUpdate', async (oldMessage,newMessage) =>{
  if(!oldMessage.guild && !newMessage.guild) return
  if( newMessage == '') return
  if(oldMessage.author.bot && newMessage.author.bot) return
  const guild = oldMessage.guild || newMessage.guild
  const logKanalID = await db.fetch(`logKanal_${guild.id}`)
  if(logKanalID == null || !logKanalID) return
  const logKanal = guild.channels.cache.get(logKanalID)
  const embed = new Discord.MessageEmbed()
   .setColor('#0AFF00')
     .setTitle('Mesaj güncellendi.')
     .addField('Mesaj sahibi:',oldMessage.author.tag)
     .addField('Eski mesaj:',oldMessage,true)
     .addField('Yeni mesaj:',newMessage,true)
     .setFooter(`${client.user.username} Log sistemi.`,guild.iconURL({dynamic:true}))
     .setTimestamp()
     .setThumbnail(oldMessage.author.avatarURL({size:4096,dynamic:true}))
    logKanal.send(embed)
  
})
client.on('messageDelete', async message => {
  if(!message.guild) return
  if(message.author.bot) return
  const guild = message.guild
  const logKanalID = await db.fetch(`logKanal_${guild.id}`)
  if(logKanalID == null || !logKanalID) return
  const logKanal = guild.channels.cache.get(logKanalID)
  const embed = new Discord.MessageEmbed()
   .setColor('#0AFF00')
     .setTitle('Mesaj silindi.')
     .addField('Mesaj sahibi:',message.author.tag)
     .addField('Silinen mesaj:',message.content,true)
     .setFooter(`${client.user.username} Log sistemi.`,guild.iconURL({dynamic:true}))
     .setTimestamp()
     .setThumbnail(message.author.avatarURL({size:4096,dynamic:true}))
    logKanal.send(embed)
    
})
//_________________________________________________________________________________________________________________________________//


//_________________________________________________________________________________________________________________________________//
client.on('guildMemberAdd', async member => {
  const reklamisim = ["discord.gg/", "https://discord.gg", "invite", "join", "twitch", "instagram", "facebook", "dlive", "nolive", "discordbots.org", "discordapp", "j4j", "j4jdm", "J4J", "youtube","discord.app", "discord.gg", "invite", "discordapp", "discordgg", ".com", ".net", ".xyz", ".tk", ".pw", ".io", ".me", ".gg", "www.", "https", "http", ".gl", ".org", ".com.tr", ".biz", ".party", ".rf.gd", ".az", "https", "http", "www\\.", "www//.)", "www", "bet", "ga", "ml", "tk", "cf", "xyz", "store", "ml", "bot", "club", "co", "site", "uk", "biz", "net", "org", "www"]; 
  let reklamisimban = await db.fetch(`reklamisimban_${member.guild.id}`) 
  if (reklamisimban === 'kapali') return; 
  if (reklamisimban === 'acik') { 
   if (reklamisim.some(word => member.user.username.includes(word)) ) { 
      member.ban({ 
          reason: `Kullanıcının isminde reklam olduğu için banlandı.`, 
        }) 
    } 
  } 

});
//_________________________________________________________________________________________________________________________________//

//_________________________________________________________________________________________________________________________________//
client.on("message", async message => {
    let uyarisayisi = await db.fetch(`reklamuyari_${message.author.id}`);
    let reklamkick = await db.fetch(`reklamkick_${message.guild.id}`)
    let kullanici = message.member;
    if (reklamkick == 'kapali') return;
    if (reklamkick == 'acik') {
        const reklam = ["discord.app", "discord.gg", "invite", "discordapp", "discordgg", ".com", ".net", ".xyz", ".tk", ".pw", ".io", ".me", ".gg", "www.", "https", "http", ".gl", ".org", ".com.tr", ".biz", ".party", ".rf.gd", ".az", "https", "http", "www\\.", "www//.)", "www", "bet", "ga", "ml", "tk", "cf", "xyz", "store", "ml", "bot", "club", "co", "site", "uk", "biz", "net", "org", "www"];
        if (reklam.some(word => message.content.toLowerCase().includes(word))) {
            if (!message.member.hasPermission("ADMINISTRATOR")) {
                message.delete();
                db.add(`reklamuyari_${message.author.id}`, 1) 
                if (uyarisayisi === null) {
                    let uyari = new Discord.MessageEmbed()
                        .setColor("BLACK")
                        .setFooter('Reklam kick sistemi', client.user.avatarURL)
                        .setDescription(`<@${message.author.id}> reklam kick sistemine yakalandın! Reklam yapmaya devam edersen kickleniceksin (1/3)`)
                        .setTimestamp()
                    message.channel.send(uyari)                
}
                if (uyarisayisi === 1) {
                    let uyari = new Discord.MessageEmbed()
                        .setColor("BLACK")
                        .setFooter('Reklam kick sistemi', client.user.avatarURL)
                        .setDescription(`<@${message.author.id}> reklam kick sistemine yakalandın! Reklam yapmaya devam edersen kickleniceksin (2/3)`)
                        .setTimestamp()
                    message.channel.send(uyari)
                }
                if (uyarisayisi === 2) {
                    message.delete();
                    await kullanici.kick({
                        reason: `Reklam kick sistemi`,
                    })
                    let uyari = new Discord.MessageEmbed()
                        .setColor("BLACK")
                        .setFooter('Reklam kick sistemi', client.user.avatarURL)
                        .setDescription(`<@${message.author.id}> 3 adet reklam uyarısı aldığı için kicklendi. Bir kez daha yaparsa banlanacak`)
                        .setTimestamp()
                    message.channel.send(uyari)
                }
                if (uyarisayisi === 3) {
                    message.delete();
                    await kullanici.ban({
                        reason: `Reklam ban sistemi`,
                    })
                    db.delete(`reklamuyari_${message.author.id}`)
                    let uyari = new Discord.MessageEmbed()
                        .setColor("BLACK")
                        .setFooter('Reklam kick sistemi', client.user.avatarURL)
                        .setDescription(`<@${message.author.id}> kick yedikten sonra tekrar devam ettiği için banlandı.`)
                        .setTimestamp()
                    message.channel.send(uyari)
                }

            }
        }
    }
});
//_________________________________________________________________________________________________________________________________//

//_________________________________________________________________________________________________________________________________//
client.on("message", async message => {
  let kişiuyari = await db.fetch(`uyarisayisi_${message.author.id}${message.guild.id}`);
  let sınır = await db.fetch(`reklamsınır_${message.guild.id}`);
  let reklambanayar = await db.fetch(`reklambanayar_${message.guild.id}`);
  let kullanici = message.member;
  const reklambankelimeler = [
    "discord.app",
    "discord.gg",
    "invite",
    "discordapp",
    "discordgg",
    ".com",
    ".net",
    ".xyz",
    ".tk",
    ".pw",
    ".io", 
    ".me",
    ".gg",
    "www.",
    "https", 
    "http", 
    ".gl", 
    ".org", 
    ".com.tr", 
    ".biz",
    ".party",
    ".rf",
    ".gd", 
    ".az",
    ".cf",
    ".me", 
    ".in"
  ];
  if (reklambanayar == "kapali") return;
  if (reklambanayar == "acik") {
    if (
      reklambankelimeler.some(word =>
        message.content.toLowerCase().includes(word)
      )
    ) {
      if (!message.member.hasPermission("ADMINISTRATOR")) {
        message.delete();
        db.add(`uyarisayisi_${message.author.id}${message.guild.id}`, 1);
        let reklambanuyari = new Discord.RichEmbed()
          .addField(
            `Reklam Engellendi`,
            `Sunucu Reklamını Atan Kişi: **${message.author.tag}**\nUyarı Sayısı: **${kişiuyari}/${sınır}**`
          )
          .setTimestamp()
          .setFooter(`${client.user.username}`, client.user.avatarURL);
        message.channel
          .send(reklambanuyari)
          .then(message => message.delete(10000));
        if (kişiuyari == sınır) {
          message.delete();
          kullanici.ban({
            reason: `${client.user.username} Reklam Oto Ban Sistemi`
          });
          db.set(`uyarisayisi_${message.author.id}${message.guild.id}`, 1);
          let yeteramkreklamban = new Discord.RichEmbed()
            .addField(
              `Reklam Ban Sistemi Reklam Yapan Kişiyi Banladı`,
              `Reklamdan Banlanan Kişi: **${kullanici}**`
            )
            .setTimestamp(new Date())
            .setFooter(
              `${client.user.username}`,
              client.user.avatarURL
            );
          message.channel.send(yeteramkreklamban);
        }
      }
    }
  }
});
//_________________________________________________________________________________________________________________________________//

//_________________________________________________________________________________________________________________________________//
client.on("message", msg => {
 if(!db.has(`reklam_${msg.guild.id}.reklam`)) return;
        const reklam = [".com", ".net", ".xyz", ".tk", ".pw", ".io", ".me", ".gg", "www.", "https", "http", ".gl", ".org", ".com.tr", ".biz", "net", ".rf.gd", ".az", ".party", "discord.gg",];
        if (reklam.some(word => msg.content.includes(word))) {
          try {
            if (!msg.member.hasPermission("BAN_MEMBERS")) {
                  msg.delete();
                    return msg.reply('Bu sunucuda reklam yapamazsın.')
   
 
  msg.delete(3000);                              
 
            }              
          } catch(err) {
            console.log(err);
          }
        }
    });
//_________________________________________________________________________________________________________________________________//

//_________________________________________________________________________________________________________________________________//
client.on("message", async msg => {
    if (msg.channel.type === "dm") return;
      if(msg.author.bot) return;  
        if (msg.content.length > 4) {
         if (db.fetch(`capslock_${msg.guild.id}`)) {
           let caps = msg.content.toUpperCase()
           if (msg.content == caps) {
             if (!msg.member.hasPermission("ADMINISTRATOR")) {
               if (!msg.mentions.users.first()) {
                 msg.delete()
                 return msg.channel.send(`${msg.author}, Bu sunucuda, büyük harf ile yazamazsın.`)
     }
       }
     }
   }
  }
});
//_________________________________________________________________________________________________________________________________//

//_________________________________________________________________________________________________________________________________//
client.on("guildMemberAdd", async member => {
    let sayı = await db.fetch(`SayaçSayı_${member.guild.id}`)  
    let kanal = await db.fetch(`SayaçKanal_${member.guild.id}`)             
    if(!sayı || !kanal) return
    let sonuç = sayı - member.guild.memberCount
    client.channels.cache.get(kanal).send(`📤  ${member}, **Aramıza katıldı!** \`${sayı}\` **kişiye ulaşmak için** \`${sonuç}\` kişi kaldı Şuan \`${member.guild.memberCount}\` Kişiyiz.`)
    return
    })
    client.on("guildMemberRemove", async member => {
    let sayı = await db.fetch(`SayaçSayı_${member.guild.id}`)                                                   
    let kanal = await db.fetch(`SayaçKanal_${member.guild.id}`)                     
    if(!sayı || !kanal) return
    let sonuç = sayı - member.guild.memberCount
      
    client.channels.cache.get(kanal).send(`📥 ${member}, **Aramızdan ayrıldı!** \`${sayı}\`  kişiye ulaşmak için \`${sonuç}\` kişi kaldı Şuan \`${member.guild.memberCount}\` Kişiyiz.`)
    return
    })  
//_________________________________________________________________________________________________________________________________//

//_________________________________________________________________________________________________________________________________//
client.on("roleDelete", async role => {
  let kanal = await db.fetch(`rolk_${role.guild.id}`);
  if (!kanal) return;
  const entry = await role.guild
    .fetchAuditLogs({ type: "ROLE_DELETE" })
    .then(audit => audit.entries.first());
  if (entry.executor.id == client.user.id) return;
  if (entry.executor.id == role.guild.owner.id) return;
  if(!entry.executor.hasPermission('ROLE_DELETE')) {
      role.guild.roles.create({
    name: role.name,
    color: role.hexColor,
    permissions: role.permissions
  });
   let embed = new Discord.MessageEmbed()
   .setColor('0x36393E')
   .setTitle(`Bir rol silindi !`)
   .setDescription(`Silinen rol adı ${role.name}, Rol koruma sistemi açık olduğu için rol geri oluşturuldu.`)
   client.channels.cache.get(kanal).send(embed)
  }
});
//_________________________________________________________________________________________________________________________________//

//_________________________________________________________________________________________________________________________________//
client.on("message", async msg => {  
  
 const i = await db.fetch(`${msg.guild.id}.kufur`)
    if (i) {
        const kufur = ["oç", "amk", "ananı sikiyim", "ananıskm", "piç", "amk", "amsk", "sikim", "sikiyim", "orospu çocuğu", "piç kurusu", "kahpe", "orospu", "mal", "sik", "yarrak", "am", "amcık", "amık", "yarram", "sikimi ye", "mk", "mq", "aq", "ak", "amq",];
        if (kufur.some(word => msg.content.includes(word))) {
          try {
            if (!msg.member.hasPermission("BAN_MEMBERS")) {
                  msg.delete();
                          
                      return msg.reply('Bu sunucuda küfür edemezsin.')
            }              
          } catch(err) {
            console.log(err);
          }
        }
    }
    if (!i) return;
});
//_________________________________________________________________________________________________________________________________//

//_________________________________________________________________________________________________________________________________//
client.on("messageUpdate", msg => {
    
 const i = db.fetch(`${msg.guild.id}.kufur`)
    if (i) {
        const kufur = ["oç", "amk", "ananı sikiyim", "ananıskm", "piç", "amk", "amsk", "sikim", "sikiyim", "orospu çocuğu", "piç kurusu", "kahpe", "orospu", "mal", "sik", "yarrak", "am", "amcık", "amık", "yarram", "sikimi ye", "mk", "mq", "aq", "ak", "amq",];
        if (kufur.some(word => msg.content.includes(word))) {
          try {
            if (!msg.member.hasPermission("BAN_MEMBERS")) {
                  msg.delete();
                          
                      return msg.reply('Bu sunucuda küfür edemezsin.')
            }              
          } catch(err) {
            console.log(err);
          }
        }
    }
    if (!i) return;
});

client.on('message', async message => {
if (message.content === 'z!fakekatıl') { 
  client.emit('guildMemberAdd', message.member || await message.guild.fetchMember(message.author));
    }
});
//_________________________________________________________________________________________________________________________________//

//_________________________________________________________________________________________________________________________________//
client.on('guildMemberAdd', async member => {
  let kanal1 = await db.fetch(`otorolkanal_${member.guild.id}`);
    let rol1 = await db.fetch(`otorolrol_${member.guild.id}`);
  let kanal = member.guild.channels.cache.get(kanal1)
  let rol = member.guild.roles.cache.get(rol1)
  if (!kanal) return;
  if (!rol) return;
  const embed = new Discord.MessageEmbed()
  .setColor("BLACK")
  .setDescription(`Sunucuya katılan **${member}** adlı kullanıcıya başarıyla \`${rol.name}\` rolü verildi.`)
  kanal.send(embed)
  member.roles.add(rol)
});
//_________________________________________________________________________________________________________________________________//


client.on('guildMemberUpdate', async (eski, yeni) => {
let gifkanal = `741854835741294694` // GIF olan pp'lerin gideceği kanalın ID'sini belirtin.
let pngkanal = `741854835741294694` // GIF olmayan pp'lerin gideceği kanalın ID'sini belirtin.
if(!yeni.avatarURL() || eski.avatarURL() == yeni.avatarURL()) return;
let pp = yeni.avatarURL({ format: 'png', dynamic: true })
if(pp.endsWith('.gif')) {
client.channels.cache.get(gifkanal).send(new Discord.MessageAttachment(pp))
} else {
client.channels.cache.get(pngkanal).send(new Discord.MessageAttachment(pp))
}
})

client.on("message",message => {
  if(!message.author.bot) return;
  let udurum = db.fetch(`usohbet.${message.channel.id}`)
    if(!udurum) return;
     message.delete({timeout : 5000 })
})

