require("dotenv").config();
const {REST, Routes, ApplicationCommandOptionType} = require("discord.js");

const commands = [
    {
        name: "hello",
        description: "Bot gives a friendly reply"
    },
    {
        name: "add",
        description: "Adds two numbers",
        options: [
            {
                name: "num1",
                description: "The first number",
                type: ApplicationCommandOptionType.Number,
                choices: [
                    {
                        name: "1",
                        value: 1
                    },
                    {
                        name: "2",
                        value: 2
                    }
                ],
                required: true
            },
            {
                name: "num2",
                description: "The second number",
                type: ApplicationCommandOptionType.Number,
                choices: [
                    {
                        name: "1",
                        value: 1
                    },
                    {
                        name: "2",
                        value: 2
                    }
                ],
                required: true
            },
            {
                name: "num3",
                description: "The third number (Optional)",
                type: ApplicationCommandOptionType.Number,
                choices: [
                    {
                        name: "1",
                        value: 1
                    },
                    {
                        name: "2",
                        value: 2
                    }
                ]
            }
        ]
    }
];

const rest = new REST({version: "10"}).setToken(process.env.TOKEN);

(async () => {
    try {
        console.log("Registering slash commands...");

        await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
            {body: commands}
        )

        console.log("Slash commands registered successfully!");
    } catch (e) {
        console.log(`Error: ${e}`)
    }
})();