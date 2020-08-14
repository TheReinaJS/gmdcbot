const db = require('quick.db');
const Discord = require('discord.js')

exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission('ADMINISTRATOR'))
        return message.channel.send('Bu komutu kullanmak için `Yönetici` yetkisine sahip olmalısın!')
  
    if (!args[0]) return message.channel.send('lütfen **aç** veya **kapat** yazın. Örnek kullanım : **z!reklam-kick aç veya kapat**')

    if (args[0] == 'aç') {
        db.set(`reklamkick_${message.guild.id}`, 'acik')
        message.channel.send(`Otomatik reklam engel aktif **3 Uyarıdan sonra kicklenicektir**`)

    }
    if (args[0] == 'kapat') {
        db.set(`reklamkick_${message.guild.id}`, 'kapali')
        message.channel.send(`Otomatik reklam engel kapatıldı!`)

    }

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'reklam-kick',
    description: 'Otomatik reklam kick sistemini açıp kapatır',
    usage: 'reklam-kck aç/kapat'
};