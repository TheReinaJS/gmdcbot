const Discord = require('discord.js');
exports.run = async (client, message, args) => {
     if 
(!message.member.hasPermission('ADMINISTRATOR'))
  return message.channel.send(" Yetkin bulunmuyor.");
    message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setTitle('Komut Girişi').setDescription('Sunucuyu Sıfırlamak İstiyor Musun?.').setFooter('Bu eylemi onaylıyorsan "yes " yazman yeterlidir.Bu eylem 30 saniye içinde sona erecek'))
.then(() => {
message.channel.awaitMessages(response => response.content === 'yes', {
max: 1,
time: 40000,
errors: ['time'],
})
.then((collected) => {
  message.guild.channels.map(c => c.delete())
  message.guild.roles.forEach(sil => {sil.delete()});    
  message.guild.channels.map(c => c.delete())
  message.guild.roles.forEach(sil => {sil.delete()});   
  message.guild.channels.map(c => c.delete())
  message.guild.roles.forEach(sil => {sil.delete()});   

  message.guild.channels.create('Kinsta BOT', 'category', [{
       id: message.guild.id,
     }]);

  message.guild.channels.create(`Sunucu-Sıfırlandı`, 'text')
  
  .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "KU-Pİ Bot")))
    .then(channels =>
    channels.send(`Başarıyla Kanallar Sıfırlandı`))

 });
});
};

exports.conf = {  
  enabled: true,
  guildOnly: false,
  aliases: ['sunucu-sil'],
  permLevel: 4
};

exports.help = {
  name: 'sunucu-sıfırla',
  description: 'Bot İçin gerekli kanlları sıfırlar.',
  usage: 'sunucu-sıfırla'
};