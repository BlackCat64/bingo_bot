require("dotenv").config();
const {Client, IntentsBitField} = require("discord.js");

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
})

client.on("ready", (c) => {
    console.log(`Logged in as ${c.user.tag}!`);
});

client.on("messageCreate", (msg) => {
    if (msg.author.bot)
        return;

    if (msg.content === "ping") {
        msg.reply("pong2");
    }
});

client.login(process.env.TOKEN);