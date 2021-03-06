const { Client, Collection } = require("discord.js");
const config = require("./config/config.json");
const { readdirSync } = require("fs");
const client = new Client();

client.commands = new Collection();
["commands", "cooldowns"].forEach(x => client[x] = new Collection());

const loadCommands = (dir = "./commands/") => {
  readdirSync(dir).forEach(dirs => {
    const commands = readdirSync(`${dir}/${dirs}/`).filter(files => files.endsWith(".js"));

    for (const file of commands) {
      const getFilename = require(`${dir}/${dirs}/${file}`);
      client.commands.set(getFilename.help.name, getFilename);
      console.log(`Commande chargée: ${$getFilename.help.name}`);
    };
  });
};
loadCommands();

client.on("message", message => {
  if (!message.content.startsWith(`${config.prefix}`) || message.author.bot) return;

  const args = message.content.slice(config.prefix.length).split(/ +/);
  const commandeName = args.shift().toLowerCase();

  if (!client.command.has(commandName)) return;
  command.run(client, message, args);

  if (command.help.args && !args.length) {
    let noArgsReply = `Il me faut des arguments pour cette commande.`
    return message.channel.send(":x: ~ Pas d'arguments (ERR-ARGS)")
  }

  if (command.help.usage) norgsReply+ = `\nVoici comment utiliser la commande: \`${config.prefix}${command.help.name} ${command.help.usage}\``


  return message.channel.send(noArgsReply);

  if (!client.cooldowns.has(command.help.name)) {
    client.cooldowns.set(command.help.name, new Collection());
  }

  const timeNow = Date.now();
  const tStamps = client.cooldowns.get(command.help.name);
  const cdAmount = (command.help.cooldown || 5) * 1000;

  if (tStamps.has(message.author.id)) {
    const cdExpirationTime = tStamps.get(message.author.id) + cdAmount;

    if (timeNow < cdExpirationTime) {
      timeLeft = (cdExpirationTime - timeNow) / 1000;
      return message.channel.send(`Merci d'attendre ${timeLeft.toFixed(0)} seconde(s) avant de réutiliser la commande, <@${message.author.id}>`)

    }
  }

  tStamps.set(message.author.id, timeNow);
  setTimeout(() => tStamps.delete(message.author.id), cdAmount);

});

client.on("ready", () => {
  console.log(`~ Connecté en tant que : ${Client.user.tag} ~`);
  client.user.setActivity("avec le bogoss", {type:"STREAMING"}, {URL:"https://twitch.tv/pozzyt0"})
}
client.login(config.token);
