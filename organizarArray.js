const userStatus = [
    {itsMe: true, admin: true, name: 'David'}, 
    {itsMe: false, admin: false, name: 'Maria'}, 
    {itsMe: false, admin: true, name: 'Clara'}
]

userStatus.sort(organizarStatus = (a, b) => {
    if (a.itsMe === true && b.itsMe === false) {
        return -1
    } 
})

userStatus.sort(organizarStatus = (a, b) => {
    if (a.admin === true && b.admin === false) {
        return -1
    } 
})

console.log(userStatus)