const Discord = require('discord.js')

exports.run = async (client, message, args) => { 
  
  const embed = new Discord.MessageEmbed()
  .setColor("BLACK")
  .setTitle('YARDIM MENÜSÜNE HOŞGELDİN ^^')
  .setDescription('Botu Kullanırken Rollerde En Üste Almayı Unutma.\n``-sil``\nİstediğiniz miktarda mesaj silersiniz.\n\n``-avatar``\nAvatar  profilinizi atar.\n\n``-istatistik``\nBot hakkında bilgi verir.\n\n``-davet``\nBotun davet linkini atar.\n\n``-ever-here-engel``\nEveryone Here Engel Sistemini görüntülersiniz.\n\n``-hata-bildir``\nBotta bulduğunuz hatayı kurucuya bildirirsiniz.\n\n``-isim-değiştir``\nBelirlediğiniz kullanıcının ismini değiştirirsiniz.\n\n``-istek-bildir``\nBotta istediğiniz komudu kurucuya bildirirsiniz.\n\n``-korona``\nSeçilen ülkü kodunu girerek korona hakkındaki istatistikleri görüntülersiniz.\n\n``-kullanıcıbilgim``\nSizin veya etiketledğiniz kullanıcının bilgilernini gösterir.\n\n``-küfür-engel``\nKüfür Engel Sistemini açarsınız.\n\n``-otorol``\nSunucuya yeni gelen üyeye ayarlanan rölü verir.\n\n``-ping``\nBotun pingi hakkında bilgi verir.\n\n``-prefix``\nSunucuza özel prefix ayarlarsınız.\n\n``-prefix-sıfırla``\nAyarlanan prefixi sıfırlarsınız.\n\n``-reklamengel``\nReklam engel sistemini açarsınız.\n\n``-reklamtaraması``\nSunucunuzda reklam taramasını yaparsınız.\n\n``-sa-as``\nSa diyen kişiye otomatik as cevabını verir\n\n``-sunucubilgi``\nSunucu hakkında bilgi verir\n\n``-slowmode``\nYavaş mod sistemini çalıştırırsınız.')
  
 message.channel.send(embed)
}

exports.conf = {
  enabled: false,
  guildOnly: false,
  permLevel: 0,
  aliases: ['help', 'h', 'y', 'yardım']
}

exports.help = {
  name: 'yardım',
  description: 'Yardım menüsünü gösterir.Kodlayan Alycia Debnam',
  usage: 'yardım'
}