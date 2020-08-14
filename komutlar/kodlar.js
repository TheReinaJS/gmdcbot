const discord = require('discord.js')
const db = require('quick.db')
const ms = require('parse-ms')

let cooldown = 8.64e+7 
exports.run = async(client, message, args) => {

      if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Bu Komudu Kullanabilmek İçin **Yönetici** Yetkisine Sahip Olmalısın!')
  let zaman = await db.fetch(`sunucutanıt_${message.guild.id}`)
      
      if (zaman !== null && cooldown - (Date.now() - zaman) > 0) {
        let süre = ms(cooldown - (Date.now() - zaman))
      message.channel.send(`Sunucunu **${süre.hours}** Saat **${süre.minutes}** Dakika Sonra Tanıtabilirsin!`)
return;
      } else { 

      }  

let kanal = '742043005870932069'

    const davetlinki = await client.channels.cache.get(message.channel.id).createInvite({ maxAge: 0})

const embed = new discord.MessageEmbed()
.setColor('BLACK')
.setDescription('Merhaba İlk Önce Botumuzu Kullandığımız için Teşekkür Ederiz. \n\n Sunucunuz [Destek](https://discord.gg/YqdbJDR) Sunucumuzda Paylaşıldı!')
message.channel.send(embed)
  const sunucutanıtıldı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())
.setTitle(`Yeni Bir Sunucu Tanıtıldı!`)
.setColor('BLACK')
.addField(`Sunucunun İsmi;`, `**${message.guild.name}**`)
.addField(`Sunucudaki Kullanıcı Sayısı;`, `**${message.guild.memberCount}**`)
.addField(`Sunucuyu Tanıtan Kullanıcı;`, `${message.author} (${message.author.id})`)
.addField(`Sunucunun Sahibi;`, `${message.guild.owner} (${message.guild.owner.id})`)
.addField(`Sunucunun Davet Linki;`, `${davetlinki.url}`)
.setThumbnail(`${client.user.avatarURL()}`)
client.channels.cache.get(sunucutanıtıldı).send(kanal)

        db.set(`sunucutanıt_${message.guild.id}`, Date.now())

}
exports.conf = {
  name: true,
  guildonly: false,
  aliases: [],
  permlevel: 0
}
exports.help = {
  name: 'sunucutanıt'
}