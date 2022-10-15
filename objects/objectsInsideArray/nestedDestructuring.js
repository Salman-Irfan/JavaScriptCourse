const users = [
    {userId: 1, firstName: 'salman', gender: 'male'},
    {userId: 2, firstName: 'zeeshan', gender: 'male'},
    {userId: 3, firstName: 'numan', gender: 'male'},
]

const [user1, user2, user3] = users

console.log(user1)

const {userId:userIdOfUser1, firstName:firstNameOfUser1, gender:genderOfUser1} = user1
console.log(userIdOfUser1)
