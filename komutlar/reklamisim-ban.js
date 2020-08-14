const db = require('quick.db');
const Discord = require('discord.js')

exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission('ADMINISTRATOR'))
        return message.channel.send('Bu komutu kullanabilmek için **Yönetici** yetkisine sahip olmalısın!')
    if (!args[0]) return message.channel.send('lütfen **aç** veya **kapat** yazın. Örnek Kullanım : **z!reklamisimban aç/kapat**')

    if (args[0] == 'aç') {
        db.set(`reklamisimban_${message.guild.id}`, 'acik')
        message.channel.send(`Reklam isim ban sistemi açıldı. \n Kapatmak için : **z!reklamisimban kapat**`)

    }
    if (args[0] == 'kapat') {
        db.set(`reklamisimban_${message.guild.id}`, 'kapali')
        message.channel.send(`Reklam isim ban sistemi kapatıldı. \n Açmak için : **z!reklamisimban aç**`)

    }

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'reklamisim-ban',
    description: 'Reklam isim ban sistemini açıp kapatır',
    usage: 'reklamisimban aç/kapat'
};