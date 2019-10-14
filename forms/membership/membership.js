var members = ["Mary","Sam","Joey","Paul","Mike","Char","Jenny","Kennedy","Kaden","Kurt","Anne"];

btnEnter.onclick=function(){
let firstName= inptFirstName.value;
console.log(members.includes(firstName))
  if (members.includes(firstName) == true) {
  lblMember.value = `Welcome back, ${firstName}`;
  }
else {
  lblMember.value = `You are not a member, ${firstName}`;
  }