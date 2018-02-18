const Discord = require("discord.js");

const TOKEN = "insert token here"
const PREFIX = "//"


var fortunes = [
    "Yes",
    "No",
    "Maybe"
];

var bot = new Discord.Client();

var servers = {};

bot.on("ready", function() {
    console.log("IT'S ALIVE!")
})


bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "ping":
            message.channel.send("Pong!");
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
        case "help":
            var embed = new Discord.RichEmbed()
                .addField("server", "Join my support server here: ")
                .addField("invite", "Invite me to your server!")
                .addField("ping", "Get your pong message!")
                .addField("noticeme", "Your senpai will notice you.")
                .addField("8ball", "Ask Slashbot a question from the mystical magic 8 ball!")
                .addField("patreon", "Help support the creator by donating on Patreon!")
                .setColor(0x000000)
                .setFooter("These commands are not case-sensitive.")
                .setThumbnail(message.author.avatarURL)
            message.channel.sendEmbed(embed); 
            break;
        case "noticeme":
            message.channel.send(message.author.toString() + "*Senpai notices you from afar*");
            break;
        default:
            message.channel.send("Invalid command! Check your spelling or use `//help`");
    
    }
});

bot.login(TOKEN) 