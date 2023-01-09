const users = [
    {userId: 1, firstName: 'salman', gender: 'male'},
    {userId: 1, firstName: 'zeeshan', gender: 'male'},
    {userId: 1, firstName: 'numan', gender: 'male'},
]

console.log(users)

for (let user of users){
    console.log(user);
}
for (let user of users){
    console.log(user.firstName);
}