const config = require(`../config.json`);
const Discord = require(`discord.js`);
const whmcsGet = require('../functions/whmcsGet.js');
const sql = require('sqlite');
sql.open('./bot.sqlite');
const db = require('quick.db')


exports.run = async (client, msg, args) => {
  

  
if(!args[0]) {
  
  let warns = db.fetch(`warns_${msg.author.id}`);
  
  if(warns === null)warns = 'This user does not have any warns.';
  
  
  let embed = new Discord.MessageEmbed()
  
  .setTitle(`${msg.author.tag}'s warns.`)
  .addField(`Warns:`, `\`\`\`\n ${warns}\n\`\`\``)
  .setColor('BLUE')
  
  message.channel.send(embed)
  
  
}

 else {
   
   let member = msg.mentions.users.first()
    if(warns === null)warns = 'This user does not have any warns.';
  
  
  let embed = new Discord.MessageEmbed()
  
  .setTitle(`${member.tag}'s warns.`)
  .addField(`Warns:`, `\`\`\`\n ${warns}\n\`\`\``)
  .setColor('BLUE')
  
  message.channel.send(embed)
  
  
}
   
   
   
   
 }












exports.help = {
    name: `warns`,
    description: `Shows the amount of warns a user has.`,
    usage: `warns [@user]`
};
