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


client.on('message', message => {
        if (message.content.startsWith(prefix + "uptime")) {
    let ms = client.uptime;
    let cd = 24 * 60 * 60 * 1000; // Calc days
    let ch = 60 * 60 * 1000; // Calc hours
    let cm = 60 * 1000; // Calc minutes
    let cs = 1000; // Calc seconds
    let days = Math.floor(ms / cd);
    let dms = days * cd; // Days, in ms
    let hours = Math.floor((ms - dms) / ch);
    let hms = hours * ch; // Hours, in ms
    let minutes = Math.floor((ms - dms - hms) / cm);
    let mms = minutes * cm; // Minutes, in ms
    let seconds = Math.round((ms - dms - hms - mms) / cs);
    if (seconds === 60) {
        minutes++; // Increase by 1
        seconds = 0;
    }
    if (minutes === 60) {
        hours++; // Inc by 1
        minutes = 0;
    }
    if (hours === 24) {
        days++; // Increase by 1
        hours = 0;
    }
    let dateStrings = [];

    if (days === 1) {
        dateStrings.push('**1** day');
    } else if (days > 1) {
        dateStrings.push('**' + String(days) + '** days');
    }

    if (hours === 1) {
        dateStrings.push('**1** hour');
    } else if (hours > 1) {
        dateStrings.push('**' + String(hours) + '** hours');
    }

    if (minutes === 1) {
        dateStrings.push('**1** minute');
    } else if (minutes > 1) {
        dateStrings.push('**' + String(minutes) + '** minutes');
    }

    if (seconds === 1) {
        dateStrings.push('**1** second');
    } else if (seconds > 1) {
        dateStrings.push('**' + String(seconds) + '** seconds');
    }

    let dateString = '';
    for (let i = 0; i < dateStrings.length - 1; i++) {
        dateString += dateStrings[i];
        dateString += ', ';
    }
    if (dateStrings.length >= 2) {
        dateString = dateString.slice(0, dateString.length - 2) + dateString.slice(dateString.length - 1);
        dateString += 'and ';
    }
    dateString += dateStrings[dateStrings.length - 1];
    message.channel.send(dateString);
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
     if (message.content === prefix + "help.us") {
		 message.channel.send('**The Message Was Sent On Private**');
            
	
		 


 message.author.sendMessage(`
 **
__~~The King Bot~~__ By King OF Game Team
╱╭╮╭╮╱╱╱╱╭╮╭━╮╱╱╱╱╱╱╭━━╮╱╱╱╭╮
╭╯╰┫┃╱╱╱╱┃┃┃╭╯╱╱╱╱╱╱┃╭╮┃╱╱╭╯╰╮
╰╮╭┫╰━┳━━┫╰╯╯╭┳━╮╭━━┫╰╯╰┳━┻╮╭╯
╱┃┃┃╭╮┃┃━┫╭╮┃┣┫╭╮┫╭╮┃╭━╮┃╭╮┃┃
╱┃╰┫┃┃┃┃━┫┃┃╰┫┃┃┃┃╰╯┃╰━╯┃╰╯┃╰╮
╱╰━┻╯╰┻━━┻╯╰━┻┻╯╰┻━╮┣━━━┻━━┻━╯
╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╭━╯┃
╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╰━━╯
● Bot Prefix: ' * ' ●
●  Bot commands: ●
*perm | **your role permissions**
*message <player> <msg> | **message player from the bot**
*invite | **invite bot to your server**
*ser-av| **server avatar**
*bot | **informations bot**
*ping | **your ping**
*mute <mention>  | **mute player**
*unmute <mention> | **unmute player**
*kick <mention> | **kick player**
*server | **informations about server**
*uptime | **to see uptime**
*roll | **roll**
*help.ar | **commands in arabic**
*help.us | **commands in english**
*bc <message> | **to message all server members**
*invs | **your server invite link**
*staff | **staff bot**
=======================================================================================
Server Support : https://discord.gg/4qpRqE2
=======================================================================================
https://discordapp.com/oauth2/authorize?client_id=388700863893602304&scope=bot&permissions=0
=============================================================================================
`);

    }
});


client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help.ar") {
		 message.channel.send('**تم ارسالك في الخاص**');
            
	
		 


 message.author.sendMessage(`
 **
__~~The King Bot~~__ By King OF Game Team
╱╭╮╭╮╱╱╱╱╭╮╭━╮╱╱╱╱╱╱╭━━╮╱╱╱╭╮
╭╯╰┫┃╱╱╱╱┃┃┃╭╯╱╱╱╱╱╱┃╭╮┃╱╱╭╯╰╮
╰╮╭┫╰━┳━━┫╰╯╯╭┳━╮╭━━┫╰╯╰┳━┻╮╭╯
╱┃┃┃╭╮┃┃━┫╭╮┃┣┫╭╮┫╭╮┃╭━╮┃╭╮┃┃
╱┃╰┫┃┃┃┃━┫┃┃╰┫┃┃┃┃╰╯┃╰━╯┃╰╯┃╰╮
╱╰━┻╯╰┻━━┻╯╰━┻┻╯╰┻━╮┣━━━┻━━┻━╯
╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╭━╯┃
╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╰━━╯
● اختصار البوت: ' * ' ●
●  اوامر البوت: ●
*perm | **لرؤية البرمشن حقك**
*message <player> <msg> | ** ل منارسال رسالة لشخص**
*invite | **للحصول على رابط دعوة البوت**
*ser-av| **شعار السيرفر**
*bot | **معلومات البوت**
*ping | **لرؤية بينغ**
*mute <mention>  | **لعدم جعل العضو يتكلم**
*unmute <mention> | **فك الميوت عن العضو**
*kick <mention> | **لطرد عضو من سيرفر**
*server | **معلومات السيرفر**
*uptime | **مدة التشغيل**
*roll | **قرعة**
*help.ar | **لارسال الاوامر بالعربي**
*help.us | **لارسال الاوامر بالانجليش** 
*bc <message> | **لارسال رسالة**
*invs | **للحصول على رابط دخول سيرفرك **
*staff | **طاقم عمل البوت**
=======================================================================================
Server Support : https://discord.gg/4qpRqE2
=======================================================================================
https://discordapp.com/oauth2/authorize?client_id=388700863893602304&scope=bot&permissions=0
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
 ╱╭╮╭╮╱╱╱╱╭╮╭━╮╱╱╱╱╱╱╭━━╮╱╱╱╭╮
╭╯╰┫┃╱╱╱╱┃┃┃╭╯╱╱╱╱╱╱┃╭╮┃╱╱╭╯╰╮
╰╮╭┫╰━┳━━┫╰╯╯╭┳━╮╭━━┫╰╯╰┳━┻╮╭╯
╱┃┃┃╭╮┃┃━┫╭╮┃┣┫╭╮┫╭╮┃╭━╮┃╭╮┃┃
╱┃╰┫┃┃┃┃━┫┃┃╰┫┃┃┃┃╰╯┃╰━╯┃╰╯┃╰╮
╱╰━┻╯╰┻━━┻╯╰━┻┻╯╰┻━╮┣━━━┻━━┻━╯
╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╭━╯┃
╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╰━━╯
 __Powered By__: King Of Game Team


Server Support : https://discord.gg/4qpRqE2

https://discordapp.com/oauth2/authorize?client_id=388700863893602304&scope=bot&permissions=0
`);

message.channel.send('**تم الارسال في الخاص**');

    }
});

client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "invite") {


 message.author.sendMessage(`

╱╭╮╭╮╱╱╱╱╭╮╭━╮╱╱╱╱╱╱╭━━╮╱╱╱╭╮
╭╯╰┫┃╱╱╱╱┃┃┃╭╯╱╱╱╱╱╱┃╭╮┃╱╱╭╯╰╮
╰╮╭┫╰━┳━━┫╰╯╯╭┳━╮╭━━┫╰╯╰┳━┻╮╭╯
╱┃┃┃╭╮┃┃━┫╭╮┃┣┫╭╮┫╭╮┃╭━╮┃╭╮┃┃
╱┃╰┫┃┃┃┃━┫┃┃╰┫┃┃┃┃╰╯┃╰━╯┃╰╯┃╰╮
╱╰━┻╯╰┻━━┻╯╰━┻┻╯╰┻━╮┣━━━┻━━┻━╯
╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╭━╯┃
╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╰━━╯
 
بامكانك دعوة البوت من هنا

https://discordapp.com/oauth2/authorize?client_id=388700863893602304&scope=bot&permissions=0

Server Support : https://discord.gg/4qpRqE2
`);

message.channel.send('**تم الارسال في الخاص**');

    }
});


client.on('message', function(msg) {
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField(':globe_with_meridians:** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
      .addField(':medal:** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
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
  var prefix = "*";
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


client.on("message", message => {
  let command = message.content.split(" ")[0];
  if (command === "*mute") {
          if(!message.channel.guild) return message.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');
                  if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **");
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'console');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").catch(console.error);
  if (!modlog) return message.reply("**لا يوجد الروم المراد ارسال المعلومات له 'Mute-Log'**");
  if (message.mentions.users.size < 1) return message.reply('** يجب عليك المنشن اولاً **');
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .addField(' Mute ', ' | :white_check_mark: |')
    .addField('تم اعطاء الميوت ل', `${user.username}#${user.discriminator} `)
    .addField('السبب', '**تعكير نظام الشات**')
    .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)
   message.channel.send({embed: embed});

  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);

  if (message.guild.member(user).roles.has(muteRole.id)) {
      client.channels.get(modlog.id).send({embed}).catch(console.error);
  } else {
    message.guild.member(user).addRole(muteRole).then(() => {
      client.channels.get(modlog.id).send({embed}).catch(console.error);
    });
  }

};
    if (command === "*unmute") {
          if(!message.channel.guild) return message.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');         
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **");
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'console');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **");
  if (!modlog) return message.reply("**لا يوجد الروم المراد ارسال المعلومات له 'Mute-Log'**");
  if (message.mentions.users.size < 1) return message.reply('** يجب عليك المنشن اولاً **');
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .addField('UnMute ', ' | :white_check_mark: |')
    .addField('تم فك الميوت عن', `${user.username}#${user.discriminator} `)
    .addField('السبب', '**انتهاء مدة لميوت**')
    .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)
   message.channel.send({embed: embed});

  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **');

  if (message.guild.member(user).removeRole(muteRole.id)) {
      client.channels.get(modlog.id).send({embed});
  } else {
    message.guild.member(user).removeRole(muteRole).then(() => {
      client.channels.get(modlog.id).send({embed});
    });
  }

};


});


client.on("ready", () => {
  const Games = [`*help | *invite`]
  setInterval(() => { client.user.setGame(`${Games[Math.floor(Math.random() * Games.length)] }`) }, 10000)
});


client.on("message", message => {    
          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === "*ser-av"){ 
          const embed = new Discord.RichEmbed()
  
      .setTitle(`صورة ** ${message.guild.name} **`)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor('RANDOM')
    .setImage(message.guild.iconURL)

   message.channel.send({embed});
      }
  });


client.on('message', message => {
     if (message.content === "*bot") {
            if(!message.channel.guild) return message.reply('** This command only for servers **');
     let embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .addField("**عدد السيرفرات الي فيها البوت:**" , client.guilds.size)
  .addField("**المستخدمين:**", client.users.size)
  .addField("**قنوات:**", client.channels.size)
  .setTimestamp()
message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('*pooo')){
 if(!message.author.id === '324672376455299074') return;
message.channel.sendMessage('تم , جار أرسال الرسالة')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
})
    

            
client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help") {
		 message.channel.send('**Choose: *help.ar (arabic) | help.us (english)**');
		 
 
	 }
});


	
client.login('process.env.BOT_TOKEN');


var prefix = '*'
