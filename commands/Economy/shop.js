const db = require("quick.db");
const Discord = require("discord.js");

module.exports.run = (client, message, args) => {
  const Shop = new Discord.MessageEmbed();
  	.setColor("#32a852")
  	.setTitle("Shop ~ Wilderness")
  	.setDescription("Ici se trouve le magasin, vous pourrez y acheter différents items.")
  	.addFields(
  		{ name: '\u200b', '\u200b'}
  		{ name: '╔════════════════╗'}
  		{ name: '══ Consommables ══'}
  		{ name: '╚════════════════╝'}
  		{ name: '\u200b', '\u200b'}
  		{ name: '1 ~ Burger-Frite', value: 'Prix : 15$' },
  		{ name: '2 ~ Salade', value: 'Prix : 10$' },
  		{ name: '3 ~ Glace', value: 'Prix : 10$' },
  		{ name: '4 ~ Crème au chocolat', value: 'Prix : 7$' },
  		{ name: '5 ~ Coca', value: 'Prix : 3$' },
  		{ name: '6 ~ IceTea', value: 'Prix : 3$' },
  		{ name: '7 ~ Eau', value: 'Prix : 1$' },
  		{ name: '8 ~ Entre-côtes', value: 'Prix : 20$' },
  		{ name: '\u200b', '\u200b'}
  		{ name: '╔════════════════╗'}
  		{ name: '═ 	Items Divers  ═'}
  		{ name: '╚════════════════╝'}
  		{ name: '\u200b', '\u200b'}
  		{ name: '10 ~ Cigarettes', value:'Prix : 12$'}
  		{ name: '11 ~ Chewing-Gum', value:'Prix : 3$'}
  		{ name: '12 ~ Paquet de bonbons', value:'Prix : 5$'}
  		{ name: '\u200b','\u200b'}
  		{ name: '╔════════════════╗'}
  		{ name: '══    Alcool    ══'}
  		{ name: '╚════════════════╝'}
  		{ name: '13 ~ Whisky', value:'Prix : 17$'}
  		{ name: '14 ~ Ricard', value:'Prix : 12$'}
  		{ name: '15 ~ Champagne', value:'Prix : 75$'}
  		{ name: '16 ~ Bière', value:'Prix : 12$'}
  		{ name: '17 ~ Vodka', value:'Prix : 20$'}
  	)
  	message.delete();
  	message.channel.send(Shop);
}

module.exports.help = {
  name:"shop"
}
