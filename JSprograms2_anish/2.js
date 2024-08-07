const student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 
};
let cnt = 0
for(const key in student){
    if(student.hasOwnProperty(key)){
        cnt++;
    }
}
console.log(cnt);
 //alternative

const objLength  =  Object.keys(student).length;
console.log(objLength);
