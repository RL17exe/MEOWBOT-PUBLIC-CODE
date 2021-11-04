const Discord = require('discord.js');
const ms = require('ms');
const bot = new Discord.Client();
const client = new Discord.Client();

const token = 'NO-PEEKING';

const PREFIX = 'meow!';

var randomColor = Math.floor(Math.random()*16777215).toString(16);

bot.on('ready', () =>{
    console.log('MeowBot is ready!');
      bot.user.setActivity('meow!help', { type: 'PLAYING' });
})

bot.on('message', message=>{
    if(message.content === 'Hello')
    {
        message.reply("Hello");
    }
})

bot.on('message', message=>{
    if(message.content === 'Bonjour')
    {
        message.reply("Bonjour");
    }
})

bot.on('message',message =>{
    if(message.content === "MeowBot")
    {
    }
})

bot.on('message', message =>{
    if(message.content === "rol")
    {
        var ar = []
        if (message.member.hasPermission("0x2"))  {ar.push("KICK_MEMBERS")}
        if (message.member.hasPermission("0x4"))  {ar.push("BAN_MEMBERS").join(', ')}
        message.channel.send(ar)
    }
})

bot.on('message',message=>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){

    case 'ping': {
          message.channel.send(`Pong Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
      break;
    }
        break;
        case 'testeed':
            randomColor = Math.floor(Math.random()*16777215).toString(16);
            const embed5 = new Discord.MessageEmbed()  
            .addField("This is a simple test")
            .setColor(randomColor)
            .setTimestamp()
            message.channel.send(embed5);
        break;
        case 'clear':
        if(message.member.hasPermission('MANAGE_MESSAGES')){
            if(!args[1]) return message.reply('please choose the number of messages! Exemple : **!clear 5**')
            {
            message.channel.bulkDelete(args[1])
            message.channel.send("Done !")
            setTimeout(()=>{ message.channel.bulkDelete(1); }, 3000);
            }
        }
        else return message.reply("you do not have permission!")

        break;
        case 'userbeta':
            let member2 = message.mentions.users.first() || message.author
            let user = message.mentions.users.first() || message.author;
            const member = message.guild.member(user);
            let embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setThumbnail(member2.avatarURL())
            .addField("Name:", `${user.username}`, true)
            .addField("ID:", `${user.id}`, true)
            .addField("Nickname:", `${member.nickname !== null ? `${member.nickname}` : 'None'}`, true)
            .addField("Status:", `${user.presence.status}`, true)
            .addField("In Server", message.guild.name, true)
            .addField("Game:", `${user.presence.game ? user.presence.game.name : 'None'}`, true)
            .addField("Bot:", `${user.bot}`, true)
            .addField("Joined The Server On:", `(member.joinedAt).format("dddd, MMMM Do YYYY")}`, true)
            .addField("Account Created On:", `${moment.utc(user.createdAt).format("dddd, MMMM Do YYYY")}`, true) 
            .addField("Roles:", member.roles.cache.map(roles => `${roles}`).join(', '), true)
            .setFooter(`Replying to ${message.author.username}#${message.author.discriminator}`)
  break;
  
        message.channel.send({ embed: embed });
    return;
        case 'avatar':
            if(!args[1]){
            randomColor = Math.floor(Math.random()*16777215).toString(16);
            const embed2 = new Discord.MessageEmbed()
            .setTitle(message.author.username + "'s avatar")
            .setImage(message.author.avatarURL())
            .setColor (randomColor)
            .setTimestamp()
            message.channel.send(embed2);
            }
            else 
            {
                let member = message.mentions.users.first()
                let nume = member.username 
                randomColor = Math.floor(Math.random()*16777215).toString(16);
                const embed9 = new Discord.MessageEmbed()
                .setTitle (nume + "'s avatar")
                .setImage (member.avatarURL())
                .setColor (randomColor)
                .setTimestamp ()
                message.channel.send(embed9);
            }
        break;
case 'help':
            randomColor = Math.floor(Math.random()*16777215).toString(16);
            const embed3 = new Discord.MessageEmbed()
            .setAuthor("MeowBot",bot.user.avatarURL())
            .setTitle("Available commands:")
        .addField("***`Fun Commands`***","Look down")
        .addField("meow!helpfuncmd","Fun Command")
        .addField("***`Informative Commands`***","Loook Downn")
        .addField("meow!helpinfocmd","Info Commands")
        .addField("***`Moderating Commands`***","LookDown")
        .addField("meow!helpmodcmd","Commands For Moderators")
            .addField("Creators","\"Nighttentr. tg :beginner:#5769")
            .addField("Wanna Invite me?","https://xzx.ro/meowbotinvite")
            .setColor(randomColor)
            .setTimestamp()
            message.channel.send(embed3);
        break;

case 'helpfuncmd':
                randomColor = Math.floor(Math.random()*16777215).toString(16);
            const embed15 = new Discord.MessageEmbed()
            .setAuthor("MeowBot",bot.user.avatarURL())
            .setTitle("Available commands:")
            .addField("meow!slap [name]","Slaps somebody")
                   message.channel.send(embed15);
     break;
case 'helpinfocmd':
                randomColor = Math.floor(Math.random()*16777215).toString(16);
            const embed16 = new Discord.MessageEmbed()
            .setAuthor("MeowBot",bot.user.avatarURL())
            .setTitle("Available commands:")
            .addField("meow!ping", "pong!")
            .addField("meow!bot","Shows up bot information")
            .addField("meow!setup","Info you about 2 important steps before you can use MeowBot")
            .addField("meow!avatar","Shows your avatar")
            .addField("meow!user", "Beta")
            .addField("meow!serverinfo","Shows server info")
            .addField("meow!roles" , "Shows a list of all roles on the server")
                   message.channel.send(embed16);
      break;
case 'helpmodcmd':
                randomColor = Math.floor(Math.random()*16777215).toString(16);
            const embed17 = new Discord.MessageEmbed()
            .setAuthor("MeowBot",bot.user.avatarURL())
            .setTitle("Available commands:")
            .addField("meow!clear", "Clears a certain amount of messages 99 max")
            .addField("meow!mute [name] [time (1s/1m/1h/1d)] [reason]","Temporary mutes an user")
            .addField("meow!unmute [name]","Unmute the muted user")
            .addField("meow!permban [name]","Coming Soon")
            .addField("meow!kick [name]","Coming Soon")
                   message.channel.send(embed17);

        case 'bot':

            randomColor = Math.floor(Math.random()*16777215).toString(16);
            const embed4 = new Discord.MessageEmbed()
            .setTitle("MeowBot's informations")
            .addField("**Version**" , "Beta 1.5")
            .setColor(randomColor)
            .addField("Current Server",message.guild.name)
            .setFooter("Created by \'\'Nightentr. tg ek waf🔰#5769 ")
            .setThumbnail(bot.user.avatarURL())
            .setTimestamp()
            message.channel.send(embed4);
        break;
        case 'slap':
            if(!args[1]) return message.reply("please choose someone !")
            if(args[1].charAt(0)!= "<") return message.reply("you need to mention him/her/it!")
            if(args[1].charAt(0) === "<") return message.channel.send(args[1] + " got slapped by " + message.author.username)
        break;
        case 'roles':
            var ar = []
            //var everyoneidtag = ["<@&741591696281698415>"]
            randomColor = Math.floor(Math.random()*16777215).toString(16);
            const embed8 = new Discord.MessageEmbed()
            .setTitle("Available roles:")
            .setAuthor(message.guild.name , message.guild.iconURL())
            .setTimestamp()
            .setColor(randomColor) 
            message.guild.roles.cache.forEach(role => ar.push(`<@&${role.id}>`))
            embed8.setDescription(ar)
            message.channel.send(embed8);
        break;

        case 'setup':
            randomColor = Math.floor(Math.random()*16777215).toString(16);
            const embed9 = new Discord.MessageEmbed()  
            .addField("If you want to fully setup MeowBot , you need to create 2 roles","Muted and MuteByPass")
            .setColor(randomColor)
            .setTimestamp()
            message.channel.send(embed9);
    }

})
{
  module.exports = {
    name: "meow!ban",
    description: "Ban a member from the server",

    async run (client, message, args) {

        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('You can\'t use that!')
        if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send('I don\'t have the right permissions.')
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(!args[0]) return message.channel.send('Please specify a user');

        if(!member) return message.channel.send('Can\'t find this user.');
        if(!member.bannable) return message.channel.send('This user can\'t be banned It\'s a mod/admin');

        if(member.id === message.author.id) return message.channel.send('You can\'t ban yourself!');

        let reason = args.slice(1).join(" ");

        if(!reason) reason = 'Unspecified';

        member.ban({ reason: 'your reason here' })

        const banembed = new Discord.MessageEmbed()
        .setTitle('Member Banned')
        .setThumbnail(member.user.displayAvatarURL())
        .addField('User Banned', member)
        .addField('Kicked by', message.author)
        .addField('Reason', reason)
        .setFooter('Time kicked', client.user.displayAvatarURL())
        .setTimestamp()

        message.channel.send(banembed);
    }
}
}
bot.on('message',message=>{
    let messageArray = message.content.split(" ");
    let args = messageArray.slice(1);
    let cmd = messageArray[0];

    if(cmd === 'meow!tempmute'){
        if(message.member.hasPermission('MANAGE_MESSAGES')){
            var member = message.guild.member(message.mentions.users.first() );
            if(!args[0]) return message.reply('please provide an user to tempmute.')
            let role = message.guild.roles.cache.find(role => role.name === "Muted");
            var reason = args[2] ;
            if(!role) return message.reply("couldn't find the 'muted' role.")
            if(message.member.hasPermission('SEND_MESSAGES')){
            
                let time = args[1];
                if(!time) {
                    return message.reply("you didn't specify a time!");
                }
                member.roles.add(role.id);
                randomColor = Math.floor(Math.random()*16777215).toString(16);
                const embed6 = new Discord.MessageEmbed()
                .addField("Muted User",`${member.user}`)
                .addField("Muted by",`@${message.author.username}`)
                .addField("Time muted", `${ms(ms(time))}`)
                .addField("Reason", reason)
                .setTimestamp()
                .setColor(randomColor)
                message.channel.send(embed6)
                setTimeout(function() {
                    member.roles.remove(role.id);
                    message.channel.send(`${member.user} has been unmuted`)
                } , ms(time)) ;
            }
            else
            message.channel.send("That user is already muted!")
        }
        else return message.reply("you do not have permission!")
    }
    if(cmd === 'meow!unmute'){
        if(message.member.hasPermission('MANAGE_MESSAGES')){
            var member = message.guild.member(message.mentions.users.first() );
            if(!args[0]) return message.reply('Please provide a member to unmute.')
            let role = message.guild.roles.cache.find(role => role.name === "Muted");
            member.roles.remove(role.id);
            message.channel.send(`${member.user} has been unmuted`)
        }
    }
    
})
bot.on('message', message =>{
    if(message.content === 'meow!serverinfo'){
    function checkDays(date) {
        let now = new Date();
        let diff = now.getTime() - date.getTime();
        let days = Math.floor(diff / 86400000);
        return days + (days == 1 ? " day" : " days") + " ago";
    };
    let verifLevels = ["None", "Low", "Medium", "(╯°□°）╯︵  ┻━┻", "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻"];
    let region = message.guild.region
    verifLevels = message.guild.verificationLevel
    let memtotal = message.guild.memberCount  //bot.guilds.cache.size = in cate servere este botul
    let serverpic = message.guild.iconURL()
    randomColor = Math.floor(Math.random()*16777215).toString(16);   
    const embed7 = new Discord.MessageEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL())
        .addField("Name", message.guild.name, true)
        .addField("Owner", `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`, true)
        .addField("Region", region, true)
        .addField("Members", memtotal, true)
        .addField("Verification Level", verifLevels, true)
        .addField("Creation Date", `${message.channel.guild.createdAt.toUTCString().substr(0, 16)} (${checkDays(message.channel.guild.createdAt)})`, true)
        .setThumbnail(serverpic)
        .setColor(randomColor)
        .setTimestamp()
        .setFooter(`${message.guild.owner.user.username}`, `${message.guild.owner.user.avatarURL()}`)
    message.channel.send(embed7);
    }
})
bot.stop('org');
bot.login(token)
