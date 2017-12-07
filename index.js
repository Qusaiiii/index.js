const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.on('message', function(message) {
    if (message.author.bot) return;
    if (message.author.id === client.user.id) return;
    if (message.author.equals(client.user)) return;
    if (!message.content.startsWith(prefix)) return;

    var args = message.content.substring(prefix.length).split(' ');

    switch (args[0].toLocaleLowerCase()) {
          case "clear" :
if(!message.channel.guild) return
                                if(message.member.hasPermissions(0x2000)){ if (!args[1]) {
        message.channel.fetchMessages()
          .then(messages => {
            message.channel.bulkDelete(messages);
       var     messagesDeleted = messages.array().length;
             var embed = new Discord.RichEmbed()
             .setDescription('message Deleted ' + messagesDeleted)
             .setColor('RANDOM')
            message.channel.sendEmbed(embed);
          })
                            } else {
                            let messagecount = parseInt(args[1]);
        message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                  let clear = new Discord.RichEmbed()
                  
                                                   .setColor('RANDOM')
             .setDescription('Messages Deleted ' + args[1])
             message.channel.sendEmbed(clear)
                                                                                        message.delete(10000);
               }
                    } else {
                        var manage = new Discord.RichEmbed()
                        .setDescription('You Do Not Have Permission `MANAGE_MESSAGES')
                        .setColor("RANDOM")
                        message.channel.sendEmbed(manage)
                        return;
                    }
break;

}
}); 


client.on('message', message => {
        if (message.content.startsWith(prefix + "uptime")) {
    let uptime = client.uptime;

    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let notCompleted = true;

    while (notCompleted) {

        if (uptime >= 8.64e+7) {

            days++;
            uptime -= 8.64e+7;

        } else if (uptime >= 3.6e+6) {

            hours++;
            uptime -= 3.6e+6;

        } else if (uptime >= 60000) {

            minutes++;
            uptime -= 60000;

        } else if (uptime >= 1000) {
            seconds++;
            uptime -= 1000;

        }

        if (uptime < 1000)  notCompleted = false;

    }

    message.channel.send("`" + `${days} days, ${hours} hrs, ${minutes} min , ${seconds} sec` + "`");


}
});

client.on('message', message => {
if (message.content.startsWith(prefix + 'ping')) {
if(!message.channel.guild) return;
if (message.author.bot) return;
    message.channel.sendMessage(`**Pong ! :** \`${Date.now() - message.createdTimestamp} ms\`:watch:`);
    }
});

client.on('message', message => {
  
if (message.content.startsWith(prefix + 'perm')) {
         if(!message.channel.guild) return;
         var perms = JSON.stringify(message.channel.permissionsFor(message.author).serialize(), null, 4);
         var zPeRms = new Discord.RichEmbed()
         .setColor('RANDOM')
         .setTitle(':tools: Permissions')
         .addField('Your Permissions:',perms)
                  message.channel.send({embed:zPeRms});

    }
});


client.on('message', function(message) {
    if(message.content.startsWith(prefix + 'roll')) {
        let args = message.content.split(" ").slice(1);
        if (!args[0]) {
            message.channel.send('**حط رقم معين يتم السحب منه**');
            return;
            }
    message.channel.send(Math.floor(Math.random() * args.join(' ')));
            if (!args[0]) {
          message.edit('1')
          return;
        }
    }
});

	
client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help") {
		 message.channel.send('**تم ارسال الاوامر في الخاص**');
            
	
		 


 message.author.sendMessage(`
 **
__~~Peery Bot~~__ By **Peery#0609
**
●  Bot commands: ● 
/perm
/invite
/clear
/ping
/uptime
/roll
/invs
/staff
**
=======================================================================================
https://discordapp.com/oauth2/authorize?client_id=369567748142923797&scope=bot&permissions=0
=============================================================================================
`);

    }
});

client.on('message', message => {
    if (message.content.startsWith(prefix + "invs")) {
     if(!message.channel.guild) return;
if (message.author.bot) return;
        message.channel.createInvite({
        thing: true,
        maxUses: 2,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription("تم ارسالك في الخاص")
   .setFooter("اسم سيررك ",'رابط صوره سيرفرك')
                   .setTimestamp()
				message.channel.send('**تم الارسال في الخاص**');


      message.channel.sendEmbed(Embed11).then(message => {message.delete(3000)})
      message.author.sendEmbed(Embed11)
    }
});

client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "staff") {


 message.author.sendMessage(`
 
 __~~Bot Staff~~__
 
 
__Owner__: Peery#0609

__Codes By__: Dnager ᴿᵉˣ , ˣ₄#1865

https://discordapp.com/oauth2/authorize?client_id=369567748142923797&scope=bot&permissions=0
`);

message.channel.send('**تم الارسال في الخاص**');

    }
});

client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "invite") {


 message.author.sendMessage(`
 
بامكانك دعوة البوت من هنا

https://discordapp.com/oauth2/authorize?client_id=369567748142923797&scope=bot&permissions=0
`);

message.channel.send('**تم الارسال في الخاص**');

    }
});

client.setGame("/help","https://twitch.tv/peery13")


client.login(process.env.BOT_TOKEN);

var prefix = '/'
