const db = require("quick.db");
const Discord = require("discord.js");
const economy = new db.table("Items");

module.exports.run = (client, message, args) => {

  let user = message.author;

  let money = economy.fetch(`money_${message.guild.id}_${user.id}`);
  
  if (args[1] === "1") {
    if (money < 15 return message.channel.send(":x: ~ Achat impossible, manque de fonds."));
  item.add(`burger_${message.guild.id}_${user.id}, 1`);
  economy.substract(`money_${message.guild.id}_${user.id}, 15`);

  return message.channel.send("Vous avez acheté : Burger 🍔 (x1)");
  }

  if (args[1] === "2") {
    if (money < 10 return message.channel.send(":x: ~ Achat impossible, manque de fonds."));
  item.add(`salade_${message.guild.id}_${user.id}, 1`);
  economy.substract(`money_${message.guild.id}_${user.id}, 15`);

  return message.channel.send("Vous avez acheté : Salade 🥗 (x1)");
  }

  if (args[1] === "3") {
    if (money < 10 return message.channel.send(":x: ~ Achat impossible, manque de fonds."));
  item.add(`glace_${message.guild.id}_${user.id}, 1`);
  economy.substract(`money_${message.guild.id}_${user.id}, 10`);

  return message.channel.send("Vous avez acheté : Glace 🍦 (x1)");
  }

  if (args[1] === "4") {
    if (money < 7 return message.channel.send(":x: ~ Achat impossible, manque de fonds."));
  item.add(`creme_${message.guild.id}_${user.id}, 1`);
  economy.substract(`money_${message.guild.id}_${user.id}, 7`);

  return message.channel.send("Vous avez acheté : Crème (x1)");
  }

  if (args[1] === "5") {
    if (money < 3 return message.channel.send(":x: ~ Achat impossible, manque de fonds."));
  item.add(`coca_${message.guild.id}_${user.id}, 1`);
  economy.substract(`money_${message.guild.id}_${user.id}, 3`);

  return message.channel.send("Vous avez acheté : Coca 🥤(x1)");
  }

  if (args[1] === "6") {
    if (money < 3 return message.channel.send(":x: ~ Achat impossible, manque de fonds."));
  item.add(`icetea_${message.guild.id}_${user.id}, 1`);
  economy.substract(`money_${message.guild.id}_${user.id}, 3`);

  return message.channel.send("Vous avez acheté : IceTea 🥤 (x1)");
  }

  if (args[1] === "7") {
    if (money < 1 return message.channel.send(":x: ~ Achat impossible, manque de fonds."));
  item.add(`eau_${message.guild.id}_${user.id}, 1`);
  economy.substract(`money_${message.guild.id}_${user.id}, 1`);

  return message.channel.send("Vous avez acheté : Eau 🥤 (x1)");
  }

  if (args[1] === "8") {
    if (money < 20 return message.channel.send(":x: ~ Achat impossible, manque de fonds."));
  item.add(`cotes_${message.guild.id}_${user.id}, 1`);
  economy.substract(`money_${message.guild.id}_${user.id}, 20`);

  return message.channel.send("Vous avez acheté : Entre-côtes (x1)");
  }

  if (args[1] === "9") {
    if (money < 5 return message.channel.send(":x: ~ Achat impossible, manque de fonds."));
  item.add(`cafe_${message.guild.id}_${user.id}, 1`);
  economy.substract(`money_${message.guild.id}_${user.id}, 5`);

  return message.channel.send("Vous avez acheté : Café ☕ (x1)");
  }

  if (args[1] === "10") {
    if (money < 5 return message.channel.send(":x: ~ Achat impossible, manque de fonds."));
  item.add(`the_${message.guild.id}_${user.id}, 1`);
  economy.substract(`money_${message.guild.id}_${user.id}, 5`);

  return message.channel.send("Vous avez acheté : Thé ☕ (x1)");
  }

  if (args[1] === "11") {
    if (money < 12 return message.channel.send(":x: ~ Achat impossible, manque de fonds."));
  item.add(`cigarettes_${message.guild.id}_${user.id}, 1`);
  economy.substract(`money_${message.guild.id}_${user.id}, 12`);

  return message.channel.send("Vous avez acheté : Cigarettes 🚬 (x1)");
  }

  if (args[1] === "12") {
    if (money < 3 return message.channel.send(":x: ~ Achat impossible, manque de fonds."));
  item.add(`chewinggum_${message.guild.id}_${user.id}, 1`);
  economy.substract(`money_${message.guild.id}_${user.id}, 3`);

  return message.channel.send("Vous avez acheté : Chewing-Gum (x1)");
  }

  if (args[1] === "13") {
    if (money < 5 return message.channel.send(":x: ~ Achat impossible, manque de fonds."));
  item.add(`bonbons_${message.guild.id}_${user.id}, 1`);
  economy.substract(`money_${message.guild.id}_${user.id}, 5`);

  return message.channel.send("Vous avez acheté : Paquet de bonbons 🍬 (x1)");
  }

  if (args[1] === "14") {
    if (money < 17 return message.channel.send(":x: ~ Achat impossible, manque de fonds."));
  item.add(`whisky_${message.guild.id}_${user.id}, 1`);
  economy.substract(`money_${message.guild.id}_${user.id}, 17`);

  return message.channel.send("Vous avez acheté : Whisky 🥃 (x1)");
  }

  if (args[1] === "15") {
    if (money < 12 return message.channel.send(":x: ~ Achat impossible, manque de fonds."));
  item.add(`ricard_${message.guild.id}_${user.id}, 1`);
  economy.substract(`money_${message.guild.id}_${user.id}, 12`);

  return message.channel.send("Vous avez acheté : Ricard 🥃 (x1)");
  }

  if (args[1] === "16") {
    if (money < 75 return message.channel.send(":x: ~ Achat impossible, manque de fonds."));
  item.add(`champagne_${message.guild.id}_${user.id}, 1`);
  economy.substract(`money_${message.guild.id}_${user.id}, 75`);

  return message.channel.send("Vous avez acheté : Champagne 🍾 (x1)");
  }

  if (args[1] === "17") {
    if (money < 15 return message.channel.send(":x: ~ Achat impossible, manque de fonds."));
  item.add(`biere_${message.guild.id}_${user.id}, 1`);
  economy.substract(`money_${message.guild.id}_${user.id}, 15`);

  return message.channel.send("Vous avez acheté : Burger (x1)");
  }

  if (args[1] === "18") {
    if (money < 15 return message.channel.send(":x: ~ Achat impossible, manque de fonds."));
  item.add(`burger_${message.guild.id}_${user.id}, 1`);
  economy.substract(`money_${message.guild.id}_${user.id}, 15`);

  return message.channel.send("Vous avez acheté : Burger (x1)");
  }

  if (args[1] === "19") {
    if (money < 15 return message.channel.send(":x: ~ Achat impossible, manque de fonds."));
  item.add(`burger_${message.guild.id}_${user.id}, 1`);
  economy.substract(`money_${message.guild.id}_${user.id}, 15`);

  return message.channel.send("Vous avez acheté : Burger (x1)");
  }

  if (args[1] === "20") {
    if (money < 15 return message.channel.send(":x: ~ Achat impossible, manque de fonds."));
  item.add(`burger_${message.guild.id}_${user.id}, 1`);
  economy.substract(`money_${message.guild.id}_${user.id}, 15`);

  return message.channel.send("Vous avez acheté : Burger (x1)");
  }

  if (args[1] === "21") {
    if (money < 15 return message.channel.send(":x: ~ Achat impossible, manque de fonds."));
  item.add(`burger_${message.guild.id}_${user.id}, 1`);
  economy.substract(`money_${message.guild.id}_${user.id}, 15`);

  return message.channel.send("Vous avez acheté : Burger (x1)");
  }

  if (args[1] === "22") {
    if (money < 15 return message.channel.send(":x: ~ Achat impossible, manque de fonds."));
  item.add(`burger_${message.guild.id}_${user.id}, 1`);
  economy.substract(`money_${message.guild.id}_${user.id}, 15`);

  return message.channel.send("Vous avez acheté : Burger (x1)");
  }

  if (args[1] === "23") {
    if (money < 15 return message.channel.send(":x: ~ Achat impossible, manque de fonds."));
  item.add(`burger_${message.guild.id}_${user.id}, 1`);
  economy.substract(`money_${message.guild.id}_${user.id}, 15`);

  return message.channel.send("Vous avez acheté : Burger (x1)");
  }

  if (args[1] === "24") {
    if (money < 15 return message.channel.send(":x: ~ Achat impossible, manque de fonds."));
  item.add(`burger_${message.guild.id}_${user.id}, 1`);
  economy.substract(`money_${message.guild.id}_${user.id}, 15`);

  return message.channel.send("Vous avez acheté : Burger (x1)");
  }

  if (args[1] === "25") {
    if (money < 15 return message.channel.send(":x: ~ Achat impossible, manque de fonds."));
  item.add(`burger_${message.guild.id}_${user.id}, 1`);
  economy.substract(`money_${message.guild.id}_${user.id}, 15`);

  return message.channel.send("Vous avez acheté : Burger (x1)");
  }

  if (args[1] === "26") {
    if (money < 15 return message.channel.send(":x: ~ Achat impossible, manque de fonds."));
  item.add(`burger_${message.guild.id}_${user.id}, 1`);
  economy.substract(`money_${message.guild.id}_${user.id}, 15`);

  return message.channel.send("Vous avez acheté : Burger (x1)");
  }

  if (args[1] === "27") {
    if (money < 15 return message.channel.send(":x: ~ Achat impossible, manque de fonds."));
  item.add(`burger_${message.guild.id}_${user.id}, 1`);
  economy.substract(`money_${message.guild.id}_${user.id}, 15`);

  return message.channel.send("Vous avez acheté : Burger (x1)");
  }

  if (args[1] === "28") {
    if (money < 15 return message.channel.send(":x: ~ Achat impossible, manque de fonds."));
  item.add(`burger_${message.guild.id}_${user.id}, 1`);
  economy.substract(`money_${message.guild.id}_${user.id}, 15`);

  return message.channel.send("Vous avez acheté : Burger (x1)");
  }

  if (args[1] === "29") {
    if (money < 15 return message.channel.send(":x: ~ Achat impossible, manque de fonds."));
  item.add(`burger_${message.guild.id}_${user.id}, 1`);
  economy.substract(`money_${message.guild.id}_${user.id}, 15`);

  return message.channel.send("Vous avez acheté : Burger (x1)");
  }
}

module.exports.help = {
  name:"buy"
}
