const os1 =require('os')

// info about current user
const user = os1.userInfo()
console.log(user);



//uptime
console.log(os1.uptime());

const currentos = {
  name:os1.type(),
  release:os1.release(),

}
console.log(currentos);