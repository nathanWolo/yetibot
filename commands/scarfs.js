const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('scarfs')
		.setDescription('goat'),
	async execute(interaction) {
		await interaction.reply(':man_mage:');
	},
};