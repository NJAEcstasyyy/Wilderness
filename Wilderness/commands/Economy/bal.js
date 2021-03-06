const db = require("quick.db");
const Discord = require("discord.js");
const economy = new db.table("Economy")
const item = new db.table("Items")

module.exports.run = (client, message, args) => {
  const ecoEmbed = new Discord.MessageEmbed();
  	.setTitle(`${message.author.username} : Inventaire)

  let user = message.author;

  let argent = economy.fetch(`money_${message.guild.id}_${user.id}`);
  if (argent === null) argent = 0;

return message.channel.send(`**Solde actuel : ${argent}$**`)
}

module.exports.help = {
  name:"bal",
  cooldown:10,
}
