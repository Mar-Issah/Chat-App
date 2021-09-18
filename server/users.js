// HELPER FUNCTION TO USE IN OUR SERVER

//create a user array to record our list of users

//an addUser fxn to add new user to the list we want the name to be one word and no spaces if name and room already exist, error alse required

//remove user using the id. find the index and use the index to remove that user from the array using the splice method

//getUser uing the id

//get users in room

const users = [];

const addUser = ({ id, name, room }) => {
	name = name.trim().toLowerCase();
	room = room.trim().toLowerCase();

	const existingUser = users.find(
		(user) => user.room === room && user.name === name
	);

	if (!name || !room) return { error: "Username and room are required." };
	if (existingUser) return { error: "Username is already available." };

	const user = { id, name, room };

	users.push(user);

	return { user };
};

const removeUser = (id) => {
	const index = users.findIndex((user) => user.id === id);

	// Remove 1 element at the index
	if (index !== -1) return users.splice(index, 1)[0];
};

//find and return the user ie one user if the user.id == id then
const getUser = (id) => users.find((user) => user.id === id);

//filter fxn returns multiple users that is why we searching using the room and not id whic is unique and return one user
const getUsersInRoom = (room) => users.filter((user) => user.room === room);

module.exports = { addUser, removeUser, getUser, getUsersInRoom };
