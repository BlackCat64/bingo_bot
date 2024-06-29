require("dotenv").config();
const {Client, IntentsBitField} = require("discord.js");
const {CommandHandler} = require("djs-commander");
const path = require("path");

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
});

new CommandHandler({
    client,
    commandsPath: path.join(__dirname, "commands"),
    testServer: process.env.GUILD_ID
});

client.on("ready", (c) => {
    console.log(`Logged in as ${c.user.tag}!`);
});

client.on("interactionCreate", (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    let cmd = interaction.commandName;
    switch (cmd) {
        case "hello":
            interaction.reply(`Hello there, user ${interaction.user}`)
            break;
        case "add":
            const num1 = interaction.options.get("num1").value;
            const num2  = interaction.options.get("num2").value;
            const num3 = interaction.options.get("num3")?.value;
            let sum = num1 + num2;
            if (num3 === undefined) // If no 3rd argument was supplied
                interaction.reply(`${num1} + ${num2} = ${sum}`);
            else {
                sum += num3; // If a 3rd argument was supplied
                interaction.reply(`${num1} + ${num2} + ${num3} = ${sum}`);
            }
            break;
        default:
            console.log("Command not found.")
    }
})

client.on("messageCreate", (msg) => {
    if (msg.author.bot)
        return;

    if (msg.content === "ping") {
        msg.reply("pong2");
    }
});

client.login(process.env.TOKEN);