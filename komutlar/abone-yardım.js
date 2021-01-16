const Discord = require('discord.js'); 
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix

module.exports.run = async(client, message, args) => {
 
 let sayfalar = [`
      > **<a:SharpenEmojiPack29:799942303518294056> • Youtube Komutları**
      
      > <a:SharpenEmojiPack33:799942305452130335> [${prefix}abone](https://discord.com/oauth2/authorize?client_id=794482280437514241&scope=bot&permissions=8)
      > **• Abone Rolu Verirsiniz.**
      > <a:SharpenEmojiPack33:799942305452130335> [${prefix}abone-mesaj](https://discord.com/oauth2/authorize?client_id=794482280437514241&scope=bot&permissions=8) 
      > **• Abone Mesajinin Nereye Gitceğini Belirlersiniz.**
      > <a:SharpenEmojiPack33:799942305452130335> [${prefix}abone-sorumlusu @rol](https://discord.com/oauth2/authorize?client_id=794482280437514241&scope=bot&permissions=8) 
      > **• Abone Sorumlusunun Rolunu Ayarlayabilirsin.**
      > <a:SharpenEmojiPack33:799942305452130335> [${prefix}abone-rol @rol](https://discord.com/oauth2/authorize?client_id=794482280437514241&scope=bot&permissions=8)
      > **• Abone Rolunu Ayarlarsınız.**`]; 
  let page = 1; 
 
  const embed = new Discord.MessageEmbed()
    .setTitle("Abone Rol Bot Youtube Komutları") 
    .setTitle("Abone Rol Bot Youtube Komutları") 
    .setColor("#501c67")
    .setFooter(`Sayfa ${page} - ${sayfalar.length}`) 
    .setDescription(sayfalar[page-1])
    .setTimestamp()
   .setImage('https://cdn.discordapp.com/attachments/798513335439065098/799910916937744384/standard_1.gif')
 
  message.channel.send(embed).then(msg => { 
   
     msg.react('797033410484109323').then( r => { 
      msg.react('797033472274464779') 
     
      const backwardsFilter = (reaction, user) => reaction.emoji.name === 'sol' && user.id === message.author.id;
      const forwardsFilter = (reaction, user) => reaction.emoji.name === 'RainbowOkGif' && user.id === message.author.id; 
     
      const backwards = msg.createReactionCollector(backwardsFilter, { time: 60000 }); 
      const forwards = msg.createReactionCollector(forwardsFilter, { time: 60000 }); 
     
      
      backwards.on('collect', r => { 
        if (page === 1) return; 
        page--; 
        embed.setTitle("Replace Bot Sunucu Komutları")
        embed.setDescription(sayfalar[page-1]); 
        embed.setFooter(`Sayfa ${page} - ${sayfalar.length}`);
        embed.setColor("#501c67")
        embed.setTimestamp()
        embed.setImage('https://cdn.discordapp.com/attachments/798513335439065098/799910916937744384/standard_1.gif')
        msg.edit(embed) 
      })
     
      forwards.on('collect', r => { 
        if (page === sayfalar.length) return; 
        page++; 
        embed.setTitle("Replace Bot Sunucu Komutları")
        embed.setDescription(sayfalar[page-1]); 
        embed.setFooter(`Sayfa ${page} - ${sayfalar.length}`);
        embed.setTimestamp()
        embed.setColor("#501c67")
        embed.setImage('https://cdn.discordapp.com/attachments/798513335439065098/799910916937744384/standard_1.gif')
        msg.edit(embed) 
      })
   
    })
 
  })
 
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yardım-youtube","youtube",],
  permLevel: 0
};

module.exports.help = {
  name: 'sunucu',
  description: 'Sunucu komutlarını gösterir.',
  usage: 'youtube'
};