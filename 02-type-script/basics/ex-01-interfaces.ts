interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean
}

const user1: User = {
  id: 1,
  name: 'Alex M',
  email: 'alexandermihaylov@gmail.com',
  isActive: true
}

const user2: User = {
  id: 2,
  name: 'Deny A',
  email: 'deny@gmail.com',
  isActive: true
}

const formatUser = (user: User):string => {
  const {name, id, email, isActive} = user;
  const isActiveText = isActive? 'Active' : 'Inactive';
  const formatedUser = `${id}: ${name} (${email}) - ${isActiveText}`

  return formatedUser;
}

const toggleIsUserActive = (user:User):User => {
  const newUser = {
    ...user,
    isActive: !user.isActive
  }

  return newUser;
}

console.log(formatUser(user1));
console.log(formatUser(toggleIsUserActive(user1)));
console.log(formatUser(user2));
console.log(formatUser(toggleIsUserActive(user2)));
