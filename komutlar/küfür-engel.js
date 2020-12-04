//takashiakira tarafından yazılmıştır. Başka yerlerde paylaşılması yasaktır!

const db = ('quick.db')
const Discord = ('discord.js')
const ayarlar = require('../ayarlar.json');

exports.run = async (bot, message, args) => {
    if (!args[0]) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`Lütfen *Aç* veya *Kapat* diye belirtiniz. ${ayarlar.prefix}küfürengel aç `).setColor("RED"));
    if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('Bu komutu kullanabilmek için `Sunucuyu Yönet` Yetkisine sahip olmalısınız')

    if(args[0] == 'aç') {
        db.set(`kufur_${message.guild.id}`, 'acik').then(i =>{
            return message.channel.sendEmbed(new Discord.RichEmbed().setDescription('Küfür engel başarıyla açılmıştır `Üyeleri Yasakla` yetkisine sahip olanların küfürü engellenmeyecektir').setColor('RANDOM'));
        })
    }
    if (args[0] == 'kapat'){
        db.set(`kufur_$(messsage.guild.id)`, 'kapali').then(i =>{
            return message.channel.sendEmbed(new Discord.RichEmbed().setDescription('Küfür engel başarıyla kapatılmıştır.').setColor('RANDOM'));
        })
    }
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['küfür-engel'],
    kategori: "moderasyon",
    permLevel: 3
};

exports.help = {
    name: 'küfürengel',
    description: 'Küfür engelleme sistemini açıp/kapatır',
    usage: 'küfür-engelleme'
};