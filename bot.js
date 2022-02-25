/*
 * Modrequest-bot
 *
 * Written by Bas Imth (Sho)
 *
 * Purpose of this bot is to monitor if a relay bot sends a modrequest through, if so, it'll ping (game-)moderators.
 */

// We require discord.js to interact with Discord API using JavaScript(NodeJS).
const discord = require("discord.js");
// We requires these variables from our config file.
const { rolesToPing, TOKEN } = require("./config.js");

// Discord-reply isn't in Discord.js yet, and we use this to reply to the message with the modrequest.
require("discord-reply"); //⚠️ IMPORTANT: put this before your discord.Client()

// We load our variables from config.js.
const DiscordToken = TOKEN;
const roles = rolesToPing;

// Client is a new client.
const client = new discord.Client();

// When bot is loaded and has logged into Discord, we say what our username and tag is to the console.
client.on("ready", () => {
  console.log(client.user.tag);
});

// Check if the autor is a bot, if so, continue.
// If the message has either '!modrequest <space>' or '!requestmod <space>'.. or '!mod <space>' (these are the three things Jupiter responds to), we ping the roles.
client.on("message", async (message) => {
  if (message.author.bot == true) {
    if (message.content.includes("!modrequest ")) {
      message.lineReplyNoMention(roles);
    } else if (message.content.includes("!requestmod ")) {
      message.lineReplyNoMention(roles);
    } else if (message.content.includes("!mod ")) {
      message.lineReplyNoMention(roles);
    }
  }
});

// After we load all our functions, we log into Discord.
client.login(DiscordToken);
