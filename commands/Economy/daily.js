const db = require("quick.db");
const Discord = require("discord.js");
const economy = new db.table("Economy")

module.exports.run = (client, message, args) => {
  function getRandomNumber(min, max) {
  	min = Math.ceil(min);
  	max = Math.floor(max);
  	return Math.floor(Math.random() * (max-min)) + min;
  }
  let daily = getRandomNumber(50, 500);
  let user = message.mentions.members.first() || message.author;
  let argent = economy.fetch(`money_${message.guild.id}_${user.id}`);
  if (argent === null) argent = 0;
  }
economy.add(`money_${message.guild.id}_${user.id}`, getRandomNumber)
return message.reply("vous venez de recevoir votre prime quotidienne!")
}

module.exports.help = {
  name:"daily",
  cooldown:"86400",
}
