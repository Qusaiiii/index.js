	const Discord = require('discord.js');
	const client = new Discord.Client()
	const fs = require('fs');
	const prefix = "#"
	const moment = require('moment');

  client.on('message', message => {
  if(message.content.startsWith("#modapply")) {
    message.channel.send("**:writing_hand: ارسل اسمك في ماين كرافت **").then(e => {
    let filter = m => m.author.id === message.author.id
    let lan = '';
    let md = '';
    let br = '';
    let chaLan = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
    .then(collected => {
      lan = collected.first().content
      collected.first().delete()
e.edit(`**:ارسل لماذا تريد ان تصبح مراقب**`)
let chaMd = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
.then(co => {
  md = co.first().content
        co.first().delete()
        e.edit(`**هل لديك خبرة سابقة و في اية سيرفر**`)
let br = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })//By Codes , - ST I EdiTeD , .#4968//By Codes , - ST I EdiTeD , .#4968
.then(col => {
  br = col.first().content
        col.first().delete()
e.edit("**جاري التقديم علي طلبك...**").then(b => {
        setTimeout(() => {
  b.edit(`**تم التقديم وسيتم الرد فـ اقرب وقت**`)
        },2000);
var gg = message.guild.channels.find('name', 'التقديمات')
if(!gg) return;//By Codes , - ST I EdiTeD , .#4968//By Codes , - ST I EdiTeD , .#4968
if(gg) {
gg.send({embed : new Discord.RichEmbed()//By Codes , - ST I EdiTeD , .#4968//By Codes , - ST I EdiTeD , .#4968
.setDescription(`**اسم ماين كرافت : \n ${lan}\n سبب التقديم :\n ${md} \nالخبرة  :\n ${br}  **`)  
          .setFooter(`RqlixMC v0.1`)//By Codes , - ST I EdiTeD , .#4968//By Codes , - ST I EdiTeD , .#4968//By Codes , - ST I EdiTeD , .#4968
.setTimestamp()//By Codes , - ST I EdiTeD , .#4968//By Codes , - ST I EdiTeD , .#4968//By Codes , - ST I EdiTeD , .#4968//By Codes , - ST I EdiTeD , .#4968
});
}        
})
})
})//By Codes , - ST I EdiTeD , .#4968
})
})
 }//By Codes ,

	var request = require('request');

var mcCommand = '/minecraft'; // Command for triggering

var mcIP = 'RqlixMC.Net'; // Your MC server IP

var mcPort = 25565; // Your MC server port


client.on('message',message => {

    if (message.content === mcCommand) {

        var url = 'http://mcapi.us/server/status?ip=' + mcIP + '&port=' + mcPort;

        request(url, function(err, response, body) {

            if(err) {

                console.log(err);

                return message.reply('Error getting Minecraft server status...');

            }

            body = JSON.parse(body);

            var status = '*Rqlixmc server is currently offline*';

            if(body.online) {

                status = '**Rqlixmc** server is **online** - ';

                if(body.players.now) {

                    status += '**' + body.players.now + '** people are playing!';

                } else {

                    status += '*Nobody is playing!*';

                }

            }

            message.reply(status);

        });

    }

});


client.login('NDcwOTE4NjQzMjI0Njc0MzA0.DjfBsA.L5yvoZ4mp4vtNlw_1qr_FQ4JfBQ');

});
