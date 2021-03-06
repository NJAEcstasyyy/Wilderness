module.exports.run = (client, message, args) => {
	if (message.content.startsWith(`${config.prefix}clear`)) {
    let args = message.content.split(" ");
    let nbr = args[1];

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":x: ~ Impossible, permissions insuffisantes :(")
    if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":x: ~ Impossible, je ne possède pas de permissions suffisantes :(")
    if (!nbr) return message.channel.send(":x: ~ Vous devez indiquer le nombre de messages à supprimer")
    if (isNaN(nbr)) return message.channel.send(":x: ~ Vous devez indiquer le nombre de messages à supprimer")
    if (nbr < 1 || nbr > 100) return message.channel.send(":x: ~ Vous devez indiquer un nombre entre `1` et `100`.")
    message.delete().then(message => {
      message.channel.bulkDelete(nbr, true).then(message => {
        message.channel.send(`:wastebasket: ~ ${message.author}, **${messages.size} ont été supprimés**.`)
      });
    });
  };
};

module.exports.help = {
	name: "clear",
	description: "Permet de supprimer le nombre de messages demandé",
	usage: "<nombre_de_messages>",
	args: "true",
}