const db = require("quick.db");
const Discord = require("discord.js");

module.exports.run = (client, message, args) => {
  const Blackmarket = new Discord.MessageEmbed();
  	.setColor("#000000")
  	.setTitle("Blackmarket ~ Wilderness")
  	.setDescription("Ici se trouve le magasin, vous pourrez y acheter différents items.")
  	.addFields(
  		{ name: '\u200b', '\u200b'}
  		{ name: '╔════════════════╗'}
  		{ name: '══   Drogues    ══'}
  		{ name: '╚════════════════╝'}
  		{ name: '\u200b', '\u200b'}
  		{ name: '19 ~ Cannabis (1g)', value: 'Prix : 4$' },
  		{ name: '20 ~ Cocaine (1g)', value: 'Prix : 6$' },
  		{ name: '21 ~ Méthamphétamine (1g)', value: 'Prix : 10$' },
  		{ name: '\u200b', '\u200b'}
  		{ name: '╔════════════════╗'}
  		{ name: '══    Armes     ══'}
  		{ name: '╚════════════════╝'}
  		{ name: '\u200b', '\u200b'}
  		{ name: '22 ~ Glock-18', value:'Prix : 4500$'}
  		{ name: '23 ~ AK-47', value:'Prix : 7000$'}
  		{ name: '24 ~ M16A4', value:'Prix : 6000$'}
  		{ name: '\u200b','\u200b'}
  		{ name: '╔════════════════╗'}
  		{ name: '═   Munitions    ═'}
  		{ name: '╚════════════════╝'}
  		{ name: '25 ~ Boîte de munitions (x50): Glock-18', value:'Prix : 130$'}
  		{ name: '26 ~ Boîte de munitions (x50): AK-47', value:'Prix : 250$'}
  		{ name: '27 ~ Boîte de munitions (x50): M16A4', value:'Prix : 183$'}
      { name: '28 ~ Caisse de munitions (x30): Glock-18', value:'Prix : 4000$'}
      { name: '29 ~ Caisse de munitions (x30): AK-47', value:'Prix : 7500$'}
      { name: '30 ~ Caisse de munitions (x30): M16A4', value:'Prix : 5500$'}
  	)
  	message.delete();
  	message.channel.send(Shop);
}

module.exports.help = {
  name:"shop"
}
