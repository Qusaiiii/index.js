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

╭━━━╮╱╱╱╱╱╱╱╱╱╱╱╱╭━━╮╱╱╱╭╮
┃╭━╮┃╱╱╱╱╱╱╱╱╱╱╱╱┃╭╮┃╱╱╭╯╰╮
┃╰━╯┣━━┳━━┳━┳╮╱╭╮┃╰╯╰┳━┻╮╭╯
┃╭━━┫┃━┫┃━┫╭┫┃╱┃┃┃╭━╮┃╭╮┃┃
┃┃╱╱┃┃━┫┃━┫┃┃╰━╯┃┃╰━╯┃╰╯┃╰╮
╰╯╱╱╰━━┻━━┻╯╰━╮╭╯╰━━━┻━━┻━╯
╱╱╱╱╱╱╱╱╱╱╱╱╭━╯┃
╱╱╱╱╱╱╱╱╱╱╱╱╰━━╯
**
●  Bot commands: ● 
/perm
/message <player> <msg>
/invite
/clear
/ping
/dog
/ban
/kick
/server
/uptime
/roll
/bc
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
 ╭━━━╮╱╱╱╱╱╱╱╱╱╱╱╱╭━━╮╱╱╱╭╮
┃╭━╮┃╱╱╱╱╱╱╱╱╱╱╱╱┃╭╮┃╱╱╭╯╰╮
┃╰━╯┣━━┳━━┳━┳╮╱╭╮┃╰╯╰┳━┻╮╭╯
┃╭━━┫┃━┫┃━┫╭┫┃╱┃┃┃╭━╮┃╭╮┃┃
┃┃╱╱┃┃━┫┃━┫┃┃╰━╯┃┃╰━╯┃╰╯┃╰╮
╰╯╱╱╰━━┻━━┻╯╰━╮╭╯╰━━━┻━━┻━╯
╱╱╱╱╱╱╱╱╱╱╱╱╭━╯┃
╱╱╱╱╱╱╱╱╱╱╱╱╰━━╯
 
__Owner__: Peery#0609

__Thanks__: Dnager ᴿᵉˣ , ˣ₄#1865 / !「H E R O ˣ₄」ᴿᵉˣ , ๖ۣۜŦⱢ༻#1318

https://discordapp.com/oauth2/authorize?client_id=369567748142923797&scope=bot&permissions=0
`);

message.channel.send('**تم الارسال في الخاص**');

    }
});

client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "invite") {


 message.author.sendMessage(`

╭━━━╮╱╱╱╱╱╱╱╱╱╱╱╱╭━━╮╱╱╱╭╮
┃╭━╮┃╱╱╱╱╱╱╱╱╱╱╱╱┃╭╮┃╱╱╭╯╰╮
┃╰━╯┣━━┳━━┳━┳╮╱╭╮┃╰╯╰┳━┻╮╭╯
┃╭━━┫┃━┫┃━┫╭┫┃╱┃┃┃╭━╮┃╭╮┃┃
┃┃╱╱┃┃━┫┃━┫┃┃╰━╯┃┃╰━╯┃╰╯┃╰╮
╰╯╱╱╰━━┻━━┻╯╰━╮╭╯╰━━━┻━━┻━╯
╱╱╱╱╱╱╱╱╱╱╱╱╭━╯┃
╱╱╱╱╱╱╱╱╱╱╱╱╰━━╯
 
بامكانك دعوة البوت من هنا

https://discordapp.com/oauth2/authorize?client_id=369567748142923797&scope=bot&permissions=0
`);

message.channel.send('**تم الارسال في الخاص**');

    }
});


client.on("ready", () => {
  const Games = [`/help`]
  setInterval(() => { client.user.setGame(`${Games[Math.floor(Math.random() * Games.length)] }`) }, 10000)
});


client.on('message', function(msg) {
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField(':globe_with_meridians:** نوع السيرفر**',`[** __${msg.guild.region}__ ]`,true)
      .addField(':medal:** __الرتب__**',`[** __${msg.guild.roles.size} **]`,true)
      .addField(':red_circle:**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField(':large_blue_circle:**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField(':pencil:**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField(':microphone:**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField(':crown:**__ الأونـر__**',`**${msg.guild.owner}**`,true)
      .addField(':id:**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)
      .addField(':date:**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });


client.on("message", function(message) {
 if(message.author.bot) return;
 if(message.channel.type === "dm") return;
let messageArray = message.content.split(" ");
let command = messageArray[0];
let args = message.content.split(" ").slice(2);
let toSend = message.mentions.users.first();
        
         var currentTime = new Date(),
          hours = currentTime.getHours() ,
          minutes = currentTime.getMinutes(),
          Year = currentTime.getFullYear() - 2000,
          Month = currentTime.getMonth() + 1,
          Day = currentTime.getDate();
          var suffix = 'AM';
          if (hours >= 12) {
             suffix = 'PM';
              hours = hours - 12;
         }
          if (hours == 0) {
              hours = 12;
          }
let xFive = new Discord.RichEmbed()
    .setColor("ORANGE")
    .setAuthor(message.author.username,message.author.avatarURL)
    .setThumbnail(message.author.avatarURL)
    .setFooter("SenioR TeaM. || "+"- "+Month+"."+Year+"."+Day+" -"+hours+":"+minutes+" "+suffix)
    .addField("Message","**"+args+"**")
if(command === `${prefix}message`) {
    if(toSend.bot) return message.reply("**# You cannot send a message to a bot!** :sparkler:");
    if(args < 1) return message.reply("**# Please , Specify a valid arguments!** :sparkler:");
    toSend.send({embed:xFive});
    message.reply("** :white_check_mark: , Sent a Message to **<@"+toSend.id+">")
 }
});


client.on("guildCreate", guild => {
client.channels.get("RoomID").send(`The's bot (BotName) has been **added** ❤ from this server **(${guild.name})** , Server Owner 👑 **(${guild.owner.user.username})**`)
});

client.on("guildDelete", guild => {
client.channels.get("RoomID").send(`The's bot (BotName) has been **removed** 😔 from this server **(${guild.name})** , Server Owner 👑 **(${guild.owner.user.username})**`)
});

client.on('guildCreate', guild => {
  var embed = new Discord.RichEmbed()
  .setColor(0x5500ff)
  .setDescription(`**شكراً لك لإضافه البوت الى سيرفرك**`)
      guild.owner.send(embed)
});

client.on('message', message => {
        if (message.author.id === client.user.id) return;
        if (message.guild) {
       let embed = new Discord.RichEmbed()
        let args = message.content.split(' ').slice(1).join(' ');
    if(message.content.split(' ')[0] == prefix + 'bc') {
        if (!args[1]) {
    message.channel.send("**.bc <message>**");
    return;
    }
            message.guild.members.forEach(m => {
       if(!message.member.hasPermission('ADMINISTRATOR')) return;
                var bc = new Discord.RichEmbed()
                .setAuthor(message.author.username, message.author.avatarURL)
                .addField('** الـسيرفر**', `${message.guild.name}`,true)
                .addField(' **الـمرسل **', `${message.author.username}#${message.author.discriminator}`,true)
                .addField(' **الرسالة** ', args)
                .setThumbnail(message.guild.iconURL)
                .setColor('RANDOM')
                m.send(`${m}`,{embed: bc});
            });
            const AziRo = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)   
            .setTitle('✔️ | جاري ارسال رسالتك ') 
            .addBlankField(true)
            .addField('👥 | عدد الاعضاء المرسل لهم ', message.guild.memberCount , true)        
            .addField('📋| الرسالة ', args)
            .setColor('RANDOM')  
            message.channel.sendEmbed(AziRo);          
        }
        } else {
            return;
        }
});

client.on('message', message => {
  var prefix = "/";
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = message.content.split(" ").slice(1);
  if (command == "kick") {
      if(!message.member.hasPermission('KICK_MEMBERS')) return message.reply('You Dont Have **KICK_MEMBERS** Permission!');
        var member= message.mentions.members.first();
        member.kick().then((member) => {
            message.channel.send(member.displayName + " Kicked From " + message.guild.name);
            message.channel.send("By: " + "<@" + message.author.id + ">")
            message.channel.sendMessage(`تم حفظ السبب وستتم مراجعته من قبل الأونر`)
client.channels.get(`ID Chat admin`).sendMessage("** تم طرد هذا الشخص من قبل " + message.guild.owner + " سبب مذكور **" + args.join("  "))
        }).catch(() => {
            message.channel.send(`:x: I cant kick this member`);
        });
    }
});


client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('discord.gg')){
      if(!message.member.hasPermission('ADMINISTRATOR'))
        message.delete()
    return message.reply(`** No Invite Links here **`)
    }
});


client.on('message', message => {
  var prefix = "$";
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = message.content.split(" ").slice(1);
  if (command == "ban") {
      if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply('You Dont Have **BAN_MEMBERS** Permission!');
        var member= message.mentions.members.first();
        member.ban().then((member) => {
            message.channel.send(member.displayName + " Kicked From " + message.guild.name);
            message.channel.send("By: " + "<@" + message.author.id + ">")
            message.channel.sendMessage(`تم حفظ السبب وستتم مراجعته من قبل الأونر`)
client.channels.get(`ID chat admin`).sendMessage("** تم باند هذا الشخص من قبل " + message.guild.owner + " سبب مذكور **" + args.join("  "))
        }).catch(() => {
            message.channel.send(`:x: I cant kick this member`);
        });
    }
});


client.login(process.env.BOT_TOKEN);

var prefix = '/'
