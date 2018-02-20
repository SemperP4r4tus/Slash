const Discord = require("discord.js");

const SLASH = "TOKEN_HERE";
const PREFIX = "//";





var fortunes = [
    "Yes",
    "No",
    "Maybe",
    "Ask again later",
    "idk"
];

var bot = new Discord.Client();

var servers = {};

bot.on("ready", function() {
    console.log("IT'S ALIVE!");
});



bot.on('ready', () => { bot.user.setActivity('//help  |  //h') })

bot.on('guildMemberAdd', member => {
    member.send("Welcome to the server! Use ``//help`` or ``//h`` to know your commands!");
});

bot.on('guildMemberAdd', member => {
    member.send("Make sure to join my support server if you haven't(If you got this message after joining my support server, ignore this second message)! To join, type ``//server``");
});

bot.on("message", function(message) {

    


    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLowerCase()) {
        
        
		case "server":
			message.channel.send("Join the support server! https://discord.gg/zPZcBna ");
            break;
        case "ping":
            message.channel.sendMessage('Pong! Your pong is `' + `${Date.now() - message.createdTimestamp}` + ' ms`')
            break;
        case "patreon":
            message.channel.send("Use this link to donate to my patreon! https://www.patreon.com/sempersenpai");
        break;
        case "8ball": 
            if (args[1]) message.channel.send(fortunes[Math.floor(Math.random() * fortunes.length)]);
            else message.channel.send("Can't read that.");
            break;
        case "invite":
            message.channel.send("Use this link to invite me to your! http://bit.ly/slashbot");
        break;
        case "time":
            var embed = new Discord.RichEmbed()
                .addField("Time", "Your time is right below!")
                .setColor(0x000000)
                .setFooter("Time")
                .setTimestamp()
            message.channel.sendEmbed(embed);
        break;
        case "mhelp":
            var embed = new Discord.RichEmbed()
                .addField("kick", "Kick any member by tagging them.")
                .addField("say", "Has the bot say something in chat. Useful for adding rules.")
                .addField("ban", "Ban anyone with a simple command!")
                .setColor(0x000000)
                .setFooter("Developed by SemperP4r4tus#4589")
                .setThumbnail(message.author.avatarURL);
            message.channel.sendEmbed(embed);
        break;
        case "ehelp":
            var embed = new Discord.RichEmbed()
                .addField("time", "Get the time with a simple command!")
                .addField("server", "Join my support server.")
                .addField("invite", "Invite me to your server!")
                .addField("ping", "Get your pong message!")
                .addField("noticeme", "Your senpai will notice you.")
                .addField("8ball", "Ask Slashbot a question from the mystical magic 8 ball!")
                .addField("patreon", "Help support the creator by donating on Patreon!")
                .addField("help/h", "Get help")
                .setFooter("Not case-sensitive", message.author.avatarURL)
            message.channel.sendEmbed(embed);
        break;
        case "perms":
            
        break;
        case "help":
            var embed = new Discord.RichEmbed()
                .addField("mhelp", "Commands that only the Owner, Admin, and Moderator roles can use.")
                .addField("ehelp", "Commands for everyone to use.")
                .setColor(0x000000)
                .setFooter("These are not case-sensitive.")
                .setThumbnail(message.author.avatarURL);
            message.channel.sendEmbed(embed); 
        break;
        case "h":
            var embed = new Discord.RichEmbed()
                .addField("mhelp", "Commands that only the Owner, Admin, and Moderator roles can use.")
                .addField("ehelp", "Commands for everyone to use.")
                .setColor(0x000000)
                .setFooter("These are not case-sensitive.")
                .setThumbnail(message.author.avatarURL);
            message.channel.sendEmbed(embed); 
        break;
        case "noticeme":
            message.channel.send(message.author.toString() + "*Senpai notices you from afar*");
            break;
        case "say":
                if (!message.member.roles.some(r=>["Owner", "Admin", "Moderator, Developer"].includes(r.name))) return message.channel.send("You don't have the permissions for this command!");
                message.delete();
                let text = args.slice(1).join(" ");
                message.channel.send(text);
            break;
                case "kick":
                if (!message.member.roles.some(r=>["Owner", "Admin", "Moderator"].includes(r.name))) return message.channel.send("You don't have the permissions for this command!");
                let member = message.mentions.members.first();
                member.kick();
        break;
        case "ban":
                if (!message.member.roles.some(r=>["Owner", "Admin", "Moderator"].includes(r.name))) return message.channel.send("You don't have the permissions for this command!");
                let banMember = message.guild.member(message.mentions.users.first());
                banMember.ban ()
        break;
        case "weather":
        var weather = require("weather-js");

        weather.find({search: 'San Francisco, CA', degreeType: 'F'}, function(err, result) {
            if(err) console.log(err);
           
            channel.log(JSON.stringify(result, null, 2));
            message.channel.send(JSON.stringify(result, null, 2));
          });
        break;
            default:
            message.channel.send("Invalid command! Check your spelling or use `//help`");
    
    }
});

bot.login(SLASH);