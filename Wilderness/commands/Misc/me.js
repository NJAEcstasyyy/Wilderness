module.exports.run = (client, message, args) => {
  const Me = new Discord.MessageEmbed();
    .setColor("#8000ff")
    .setTitle(`${message.author.username}: ` + args)
  message.delete()
  message.channel.send(Me)
}

module.exports.help = {
  name: "me",
  description: "Affiche l'action effectuée par l'utlisateur",
  usage: "<votre_message>",
  args: true,
};
