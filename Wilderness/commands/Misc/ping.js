module.exports.run = (client, message, args) => {
  const Ping = new Discord.MessageEmbed()
    .setColor("#119e3e")
    .setTitle(`🏓 ${message.author.username} : La latence est de ${Date.now() - message.createdTimestamp}ms.`)

  message.delete()
  message.channel.send(Ping)
}

module.exports.help = {
  name: "ping",
  description: "Affiche le ping du bot.",
  cooldown: 10,
  args: false
};
