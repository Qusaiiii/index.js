	const Discord = require('discord.js');
	const client = new Discord.Client()
	const fs = require('fs');
	const prefix = "#"
	const moment = require('moment');

  

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
client.on('ebnklb',function(ebnklb) {
    
    if(ebnklb.content.startsWith("<@470918643224674304>")) {
        ebnklb.channel.send('Hey Im **RqlixMC-System**  A Nice Bot Developed By:`ImRoyal_Radddar`')
        ebnklb.channel.send('My Prefix `#`')

    }
});
client.on("message", message => {
    var prefix = "#";
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('  ⚠  ** **');
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Done | تــم",
        color: 0x06DF00,
        description: "تم مسح الرسائل بنجاح",
        footer: {
          text: "RqlixMC v0.1"
        }
      }}).then(msg => {msg.delete(3000)});
                          }

     

        
    

         
     });
client.on('message', async message =>{
  var prefix = "#";

const ms = require("ms");
if (message.author.omar) return;
if (!message.content.startsWith(prefix)) return;
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
if(!message.member.hasPermission('MANAGE_ROLES')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `MANAGE_ROLES`' ).then(msg => msg.delete(60))
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(60))
var command = message.content.split(" ")[0];
command = command.slice(prefix.length);
var args = message.content.split(" ").slice(1);
    if(command == "mute") {
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!tomute) return message.reply("**يجب عليك المنشن اولاّ**:x: ") .then(m => m.delete(5000));
if(tomute.hasPermission("MANAGE_MESSAGES"))return      message.channel.send('**للأسف لا أمتلك صلاحية** `MANAGE_MASSAGEES`');
    let muterole = message.guild.roles.find(`name`, "muted");
    
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "muted",
          color: "&000000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
    
    let mutetime = args[1];
    if(!mutetime) return message.reply("**يرجى تحديد وقت الميوت**:x:");
  
    await(tomute.addRole(muterole.id));
    message.reply(`<@${tomute.id}> تم اعطائه ميوت ومدة الميوت : ${ms(ms(mutetime))}`);
setTimeout(function(){
      tomute.removeRole(muterole.id);
      message.channel.send(`<@${tomute.id}> **انقضى الوقت وتم فك الميوت عن الشخص**:white_check_mark: `);
    }, ms(mutetime));
  
  

  }
if(command === `unmute`) {
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.sendMessage("**ليس لديك صلاحية لفك عن الشخص ميوت**:x: ").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(6000))

  let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!toMute) return message.channel.sendMessage("**عليك المنشن أولاّ**:x: ");

  let role = message.guild.roles.find (r => r.name === "muted");
  
  if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("**لم يتم اعطاء هذه شخص ميوت من الأساس**:x:")

  await toMute.removeRole(role)
  message.channel.sendMessage("**لقد تم فك الميوت عن شخص بنجاح**:white_check_mark:");

  return;

  }

});
client.on('message', async message => {
            if(message.content.includes('discord.gg')){ 
                if(message.member.hasPermission("MANAGE_GUILD")) return;
        if(!message.channel.guild) return;
        message.delete()
          var command = message.content.split(" ")[0];
    let muterole = message.guild.roles.find(`name`, "Muted");
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "Muted",
          color: "#000000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
           if(!message.channel.guild) return message.reply('** This command only for servers**');
     message.member.addRole(muterole);
    const embed500 = new Discord.RichEmbed()
      .setTitle("Muted Ads")
            .addField(`**  You Have Been Muted **` , `**Reason : Sharing Another Discord Link**`)
            .setColor("c91616")
            .setThumbnail(`${message.author.avatarURL}`)
            .setAuthor(message.author.username, message.author.avatarURL)
        .setFooter(`${message.guild.name} `)
     message.channel.send(embed500)
     message.author.send('`**لقد تمت معاقبتك بسبب نشر روابط في السيرفر ** `');
   
       
    }
})
client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id !== '292357771943477252') return;

if (message.content.startsWith(prefix + 'setplaying')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**:white_check_mark:  : ${argresult}**`)
} else 

if (message.content.startsWith(prefix + 'setwatching')) {
client.user.setActivity(argresult, {type:'WATCHING'});
    message.channel.sendMessage(`**:white_check_mark:  : ${argresult}**`)
} else 
if (message.content.startsWith(prefix + 'setlistening')) {
client.user.setActivity(argresult, {type:'LISTENING'});
    message.channel.sendMessage(`**:white_check_mark:  : ${argresult}**`)
} else 

if (message.content.startsWith(prefix + 'setstreaming')) {
  client.user.setGame(argresult, "https://www.twitch.tv/Justin-Ly0001");
    message.channel.sendMessage(`**:white_check_mark:  : ${argresult}**`)
}

});
client.on("guildMemberAdd", member => {
let welcomer = member.guild.channels.find("name","welcome");
      if(!welcomer) return;
      if(welcomer) {
         moment.locale('ar-ly');
         var h = member.user;
        let norelden = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(h.avatarURL)
        .setAuthor(h.username,h.avatarURL)
        .addField(': تاريخ دخولك الدسكورد',`${moment(member.user.createdAt).format('D/M/YYYY h:mm a')} **\n** \`${moment(member.user.createdAt).fromNow()}\``,true)            
         .addField(': تاريخ دخولك السيرفر',`${moment(member.joinedAt).format('D/M/YYYY h:mm a ')} \n\`\`${moment(member.joinedAt).startOf(' ').fromNow()}\`\``, true)      
         .setFooter(`${h.tag}`,"https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif")
     welcomer.send({embed:norelden});          
               
 
      }
      });
client.on("message",function(message) {
    if(message.content.startsWith("#stats")) {
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
let ms = 1000;
let v1 = new Discord.RichEmbed()
  v1.setTimestamp(new Date())
  v1.setColor("RED")
  v1.setDescription('***__ Collecting Data __***')
  v1.setFooter("& | RqlixMC |") 
let heroo = new Discord.RichEmbed()
.setColor('RANDOM')
.setTimestamp(new Date())
.setThumbnail(client.user.avatarURL)
.setAuthor(client.user.username,client.user.avatarURL)
.addField("MyPrefix :",`**[ ${prefix} ]**`,true)
.addField("Guilds :","**[ "+client.guilds.size+" ]**",true)
.addField("Channels :","**[ "+client.channels.size+" ]**",true)
.addField("Users :","**[ "+client.users.size+" ]**",true)
.addField("MyName : ","**[ "+client.user.username+" ]**",true)
.addField("MyID :","**[ "+client.user.id+" ]**",true)
.addField("RamUsage :",`**[ ${(process.memoryUsage().rss / 1048576).toFixed()}MB ]**`,true)
.addField("UpTime :",`**[** **Days:** \`${days}\` **Hours:** \`${hours}\` **Minutes:** \`${minutes}\` **Seconds:** \`${seconds}\` **]**`,true)
.setFooter("RqlixMC v0.1 |")
  message.channel.send({embed:v1}).then(m => m.edit({embed:heroo})),ms; 
    }
});
var x1 = "#color 1"
var x2 = "#color 2"
var x3 = "#color 3"
var x4 = "#color 4"
var x5 = "#color 5"
var x6 = "#color 6"
var x7 = "#color 7"
var x8 = "#color 8"
var x9 = "#color 9"
var x10 = "#color 10"
var x11 = "#color 11"
var x12 = "#color 12"
var x13 = "#color 13"
var x14 = "#color 14"
var x15 = "#color 15"
var x16 = "#color 16"
var x17 = "#color 17"
var x18 = "#color 18"
var x19 = "#color 19"
var x20 = "#color 20"
var x21 = "#color 21"
var x22 = "#color 22"
var x23 = "#color 23"
var x24 = "#color 24"
var x25 = "#color 25"
var x26 = "#color 26"
var x27 = "#color 27"
var x28 = "#color 28"
var x29 = "#color 29"
var x30 = "#color 30"
var x31 = "#color 31"
var x32 = "#color 32"
var x33 = "#color 33"
var x34 = "#color 34"
var x35 = "#color 35"
var x36 = "#color 36"
var x37 = "#color 37"
var x38 = "#color 38"
var x39 = "#color 39"
var x40 = "#color 40"
var x41 = "#color 41"
var x42 = "#color 42"
var x43 = "#color 43"
var x44 = "#color 44"
var x45 = "#color 45"
var x46 = "#color 46"
var x47 = "#color 47"
var x48 = "#color 48"
var x49 = "#color 49"
var x50 = "#color 50"
var x51 = "#color 51"
var x52 = "#color 52"
var x53 = "#color 53"
var x54 = "#color 54"
var x55 = "#color 55"
var x56 = "#color 56"
var x57 = "#color 57"
var x58 = "#color 58"
var x59 = "#color 59"
var x60 = "#color 60"
var x61 = "#color 61"
var x62 = "#color 62"
var x63 = "#color 63"
var x64 = "#color 64"
var x65 = "#color 65"
var x66 = "#color 66"
var x67 = "#color 67"
var x68 = "#color 68"
var x69 = "#color 69"
var x70 = "#color 70"
var x71 = "#color 71"
var x72 = "#color 72"
var x73 = "#color 73"
var x74 = "#color 74"
var x75 = "#color 75"
var x76 = "#color 76"
var x77 = "#color 77"
var x78 = "#color 78"
var x79 = "#color 79"
var x80 = "#color 80"
var x81 = "#color 81"
var x82 = "#color 82"
var x83 = "#color 83"
var x84 = "#color 84"
var x85 = "#color 85"

var x86 = "#color 86"

var x87 = "#color 87"

var x88 = "#color 88"
var x89 = "#color 89"
var x90 = "#color 90"
var x91 = "#color 91"
var x92 = "#color 92"
var x93 = "#color 93"
var x94 = "#color 94"
var x95 = "#color 95"
var x96 = "#color 96"
var x97 = "#color 97"
var x98 = "#color 98"
var x99 = "#color 99"
var x100 = "#color 100"

client.on('message', message => {
	if (message.content === x1) {
	    if(!message.channel.guild) return;
		message.member.addRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
    message.member.removeRole(message.guild.roles.find("name", "10"));
	message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}

if (message.content === x2) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.addRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
    message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
if (message.content === x3) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.addRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
    message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
if (message.content === x4) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.addRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
    message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
if (message.content === x5) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.addRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
    message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
if (message.content === x6) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.addRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
    message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
if (message.content === x7) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.addRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
    message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
if (message.content === x8) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.addRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
    message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
if (message.content === x9) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.addRole(message.guild.roles.find("name", "9"));
    message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
if (message.content === x10) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
    message.member.addRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	
	if (message.content === x11) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
message.member.removeRole(message.guild.roles.find("name", "10"));
	message.member.addRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x12) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
    message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
message.member.addRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x13) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
    message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
message.member.addRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x14) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
message.member.addRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x15) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
message.member.addRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x16) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
message.member.addRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x17) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
message.member.addRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x18) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
message.member.addRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
		if (message.content === x19) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
message.member.addRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x20) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
message.member.addRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x21) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
message.member.addRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x22) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
message.member.addRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x23) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
message.member.addRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x24) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
message.member.addRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x25) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
message.member.addRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x26) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
message.member.addRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x27) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
message.member.addRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x28) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
message.member.addRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x29) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
message.member.addRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x30) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
message.member.addRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x31) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
message.member.addRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x32) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
message.member.addRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x33) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.addRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x34) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.addRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x35) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.addRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x36) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.addRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x37) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.addRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x38) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.addRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x39) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.addRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x40) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.addRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x41) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.addRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x42) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.addRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x43) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.addRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x44) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.addRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x45) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.addRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x46) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.addRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x47) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.addRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x48) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.addRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x49) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.addRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x50) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.addRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x51) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.addRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x52) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.addRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x53) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.addRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x54) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.addRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x55) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.addRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x56) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.addRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x57) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.addRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x58) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.addRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x59) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.addRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x60) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.addRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x61) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.addRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x62) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.addRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x63) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.addRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x64) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.addRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x65) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.addRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	

	if (message.content === x66) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.addRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x67) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.addRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x68) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.addRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x69) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.addRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	if (message.content === x70) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.addRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	if (message.content === x71) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.addRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	if (message.content === x72) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.addRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	if (message.content === x73) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.addRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	if (message.content === x74) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.addRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	if (message.content === x75) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.addRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	if (message.content === x76) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.addRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	if (message.content === x77) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.addRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	if (message.content === x78) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.addRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	if (message.content === x79) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.addRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	if (message.content === x80) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.addRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	if (message.content === x81) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.addRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	if (message.content === x82) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.addRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	if (message.content === x83) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.addRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	if (message.content === x84) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.addRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	if (message.content === x85) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));

message.member.addRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}

	if (message.content === x86) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));

message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.addRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}

	if (message.content === x87) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));

message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.addRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}

	if (message.content === x88) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));

message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.addRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}

	if (message.content === x89) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));

message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.addRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}

	if (message.content === x90) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));

message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.addRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}

	if (message.content === x91) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));

message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.addRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}

	if (message.content === x92) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));

message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.addRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}

	if (message.content === x93) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));

message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.addRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}

	if (message.content === x94) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));

message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.addRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}

	if (message.content === x95) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));

message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.addRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}

	if (message.content === x96) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));

message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.addRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}

	if (message.content === x97) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));

message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.addRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}

	if (message.content === x98) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));

message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.addRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}

	if (message.content === x99) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));

message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.addRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}

	if (message.content === x100) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));

message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.addRole(message.guild.roles.find("name", "100"));

	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}


  if (message.content === '#color') {
      if (!message.channel.guild) return;
    message.channel.sendFile('https://cdn.discordapp.com/attachments/442305546008395787/447014844147826700/36d3ebcb8af4bd420528517d747d5c11.jpg');
  }
	
});
client.login('NDcwOTE4NjQzMjI0Njc0MzA0.DjfBsA.L5yvoZ4mp4vtNlw_1qr_FQ4JfBQ');
