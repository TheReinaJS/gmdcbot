let database = require("quick.db")//sharpen
let ayarlar = require("../ayarlar.json")



exports.run = async(client, message) => {//sharpen
  if(!message.member.permissions.has('ADMINISTRATOR')) return message.reply('Bu komutu kullanmak için yetkin yetersiz')
  
  let rol = message.mentions.roles.first()
  if(!rol) return message.channel.send(`Bir rol etiketlemen gerekmekte örnek: ${ayarlar.prefix}abonerol @rol`)
  
  
  database.set(`abonerol.${message.guild.id}`, rol.id)
  message.channel.send(`Abone rolü başarıyla ${rol} olarak ayarlandı.`)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['abone-rol'],//sharpen
  perm: 0
}
exports.help = {
  name: 'abone-rol'
}

exports.play = {
  kullanım: 'abone-rol @rol',
  açıklama: 'Abone Rolünü Ayarlarsınız',
  kategori: 'Abone'
}