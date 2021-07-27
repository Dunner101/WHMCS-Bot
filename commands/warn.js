const config = require(`../config.json`);
const Discord = require(`discord.js`);
const whmcsGet = require('../functions/whmcsGet.js');
const sql = require('sqlite');
sql.open('./bot.sqlite');
const db = require('quick.db');

exports.run = async (client, msg, args) => {
  if(!msg.member.hasPermission("MANAGE_MESSAGES")) {
    msg.reply('You need the "MANAGE_MESSAGES" permission to execute this command.')
  }
    let member = msg.mentions.users.first();
    
    if(!args[0]) {
    let embed = new Discord.MessageEmbed()
    
    .setDescription(`**You must mention a member and supply a valid reason.**`)
    .setColor('RED')
    
    message.channel.send(embed)
    }
  if(args[0]) {
    .setDescription(`**You must supply a valid reason.**`)
    .setColor('RED')
    
    message.channel.send(embed)
    
  }
    
   else {
     
     let warns = db.fetch(`warns_${member.id}`)
     db.add(`warns_${member.id}`, 1)
     
     let newWarns = db.fetch(`warns_${member.id}`)
     
     let embed = new Discord.MessageEmbed()
     
     .setDescription(`**${member.tag} was warned.They now have ${newWarns}**`)
     .setColor('RED')
     
     message.channel.send(embed)
     
   }
    
    
    }
    
    exports.help = {
    name: `warn`,
    description: `Warns a user.`,
    usage: `warn [@user] reason`
};
