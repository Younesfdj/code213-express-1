let users = [
    {
        id: "1",
        name: 'Mohamed',
        email: 'mohamedmca@gmail.com'
    },
    {
        id: "2",
        name: 'Aziz',
        email: 'aziz123@gmail.com'
    },
    {
        id: "3",
        name: 'Houssem',
        email: 'houssem1234@gmail.com'
    },
];

const addUser = (user) => {
    users.push(user);
};

const removeUser = (id) => {
    users = users.filter((user) => user.id !== id);
};

const updateUser = (id, givenUser) => {
    users.map((user) => {
        if (user.id === id) {
            user.name = givenUser.name;
            user.email = givenUser.email;
        }
        return user
    })
};

module.exports = { users, addUser, removeUser, updateUser };