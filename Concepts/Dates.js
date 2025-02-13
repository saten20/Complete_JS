const createDate = new Date();
console.log(createDate);
console.log(createDate.toString());
console.log(createDate.toLocaleString());
console.log(createDate.toDateString())

const ownDate = new Date('2030 1 4');
// console.log(ownDate.toDateString());
// console.log(ownDate.toLocaleDateString());


const mydate = new Date();
mydate.toLocaleDateString('default',{
    weekday:"short"
})

console.log(mydate.getMonth() + 1);
console.log(mydate.getHours());
console.log(mydate.getDay());
console.log(mydate.toLocaleDateString());
