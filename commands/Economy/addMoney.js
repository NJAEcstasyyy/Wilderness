const db = require("quick.db");
const Discord = require("discord.js");
const economy = new db.table("Economy")

module.exports.run = (client, message, args) => {
  let user = message.mentions.members.first() || message.author;
  let Banker = "294930487670210560"
  let argent = economy.fetch(`money_${message.guild.id}_${user.id}`);
  if (message.author.id !== Banker) {
  	message.delete()
  	message.channel.send(":x: ~ Vous n'êtes pas autorisé à gérer l'économie.")
  }
  if (argent === null) argent = 0;
economy.add(`money_${message.guild.id}_${user.id}, args[1]`)
return message.channel.send(`Vous venez de donner ${args[1]} à ${message.mentions.members.first}`)

}

module.exports.help = {
  name:"addMoney",
}
