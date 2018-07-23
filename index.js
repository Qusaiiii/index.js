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


client.login('NDcwOTE4NjQzMjI0Njc0MzA0.DjfBsA.L5yvoZ4mp4vtNlw_1qr_FQ4JfBQ');
