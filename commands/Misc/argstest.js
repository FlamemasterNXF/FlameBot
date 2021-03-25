module.exports = {
	name: 'argtest',
	execute(message, args) {
        if (!args.length) {
            return message.channel.send(`you're supposed to provide some Args <:smith:819028839342014484>`);
        }
    
        message.channel.send(`Args: ${args}\nincase you're curious, your first Arg was ${args[0]}`);
	},
};