const Discord = require('discord.js');
const client = new Discord.Client();
const jimp = require("jimp");
const db = require('quick.db');
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
require('./util/eventLoader')(client);

//-------------------- 7/24 Uptime --------------------//
//-------------------- 7/24 Uptime --------------------//
//-------------------- 7/24 Uptime --------------------//

const express = require('express');
const app = express();
const http = require('http');
    app.get("/", (request, response) => {
    console.log(`7/24 Hizmet Vermekteyim!`);
    response.sendStatus(200);
    });
    app.listen(process.env.PORT);
    setInterval(() => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
    }, 280000);

//-------------------- 7/24 Uptime --------------------//
//-------------------- 7/24 Uptime --------------------//
//-------------------- 7/24 Uptime --------------------//

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

client.login(ayarlar.token)

//-------------------- Küfür Engel --------------------//
//-------------------- Küfür Engel --------------------//
//-------------------- Küfür Engel --------------------//

client.on("message", async msg => {
  
  
 const i = await db.fetch(`${msg.guild.id}.kufur`)
    if (i) {
        const kufur = ["oç", "amk", "ananı sikiyim", "ananıskm", "piç", "amk", "amsk", "sikim", "sikiyim", "orospu çocuğu", "piç kurusu", "kahpe", "orospu", "mal", "sik", "yarrak", "am", "amcık", "amık", "yarram", "sikimi ye", "mk", "mq", "aq", "ak", "amq",];
        if (kufur.some(word => msg.content.includes(word))) {
          try {
            if (!msg.member.hasPermission("BAN_MEMBERS")) {
                  msg.delete();
              
              const kinda = new Discord.MessageEmbed()
              
              .setDescription('Bu Sunucuda Küfür Edemezsin.')
              .setColor("BLACK")
              
              return msg.reply(kinda)
            }              
          } catch(err) {
            console.log(err);
          }
        }
    }
    if (!i) return;
});

client.on("messageUpdate", msg => {
  
  
 const i = db.fetch(`${msg.guild.id}.kufur`)
    if (i) {
        const kufur = ["oç", "amk", "ananı sikiyim", "ananıskm", "piç", "amk", "amsk", "sikim", "sikiyim", "orospu çocuğu", "piç kurusu", "kahpe", "orospu", "mal", "sik", "yarrak", "am", "amcık", "amık", "yarram", "sikimi ye", "mk", "mq", "aq", "ak", "amq",];
        if (kufur.some(word => msg.content.includes(word))) {
          try {
            if (!msg.member.hasPermission("BAN_MEMBERS")) {
                  msg.delete();
              
              const kinda = new Discord.MessageEmbed()
              
              .setDescription('Bu Sunucuda Küfür Edemezsin.')
              .setColor("BLACK")
              
              return msg.reply(kinda)
            }              
          } catch(err) {
            console.log(err);
          }
        }
    }
    if (!i) return;
});

//-------------------- Küfür Engel --------------------//
//-------------------- Küfür Engel --------------------//
//-------------------- Küfür Engel --------------------//

//-------------------- Ever Here Engel --------------------//
//-------------------- Ever Here Engel --------------------//
//-------------------- Ever Here Engel --------------------//

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
        .setDescription(`Bu Sunucuda Everyone ve Here Yasak!`)
        msg.channel.send(e);
        }
    }
 } else if (hereengelle == 'kapali') {
 
}
});

//-------------------- Ever Here Engel --------------------//
//-------------------- Ever Here Engel --------------------//
//-------------------- Ever Here Engel --------------------//

//-------------------- Otorol Sistemi --------------------//
//-------------------- Otorol Sistemi --------------------//
//-------------------- Otorol Sistemi --------------------//

client.on('guildMemberAdd', async member => {
  
  let kanal1 = await db.fetch(`otorolkanal_${member.guild.id}`);
  let rol1 = await db.fetch(`otorolrol_${member.guild.id}`);
  
  let kanal = member.guild.channels.cache.get(kanal1)
  let rol = member.guild.roles.cache.get(rol1)
  
  if (!kanal) return;
  if (!rol) return;
  
  const embed = new Discord.MessageEmbed()
  
  .setColor("BLACK")
  .setDescription(`Sunucuya Katılan **${member}** Adlı Kullanıcıya Başarıyla \`${rol.name}\` Rolü Verildi.`)
  
  kanal.send(embed)
  member.roles.add(rol)
  
  });

//-------------------- Otorol Sistemi --------------------//
//-------------------- Otorol Sistemi --------------------//
//-------------------- Otorol Sistemi --------------------//

//-------------------- Afk Sistemi --------------------//
//-------------------- Afk Sistemi --------------------//
//-------------------- Afk Sistemi --------------------//

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

.setColor('GREEN')
.setAuthor(message.author.username, message.author.avatarURL)
.setDescription(`Afk Modundan Başarıyla Çıkıldı.`)

message.channel.send(embed)
}
 
var USER = message.mentions.users.first();
if (!USER) return;
var REASON = await db.fetch(`afk_${USER.id}`);
 
if (REASON) {
let süre = await db.fetch(`afk_süre_${USER.id}`);
let timeObj = ms(Date.now() - süre);
  
const afk = new Discord.MessageEmbed()

.setColor('RED')
.setDescription(`**BU KULLANICI AFK**\n\n**Afk Olan Kullanıcı :** \`${USER.tag}\`\n**Afk Süresi :** \`${timeObj.hours}saat\` \`${timeObj.minutes}dakika\` \`${timeObj.seconds}saniye\`\n**Sebep :** \`${REASON}\``)

message.channel.send(afk)
}
});

//-------------------- Afk Sistemi --------------------//
//-------------------- Afk Sistemi --------------------//
//-------------------- Afk Sistemi --------------------//

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
  
const caps = new Discord.MessageEmbed()

.setColor('BLACK')
.setDescription(`${msg.author}, Bu Sunucuda, Büyük Harf İle Yazamazsın.`)

return msg.channel.send(caps)
}
}
  
}
}
}
});