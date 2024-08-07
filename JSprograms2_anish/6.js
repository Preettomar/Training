const student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 };
//question no 7 solved here
    if(student.hasOwnProperty('sclass')){
        console.log(true);
        
    }else{
        console.log(false);
        
    }
function exchangeObjkeyandval(obj){
    const newObj  = {};
    for(const key in obj){
        newObj[obj[key]] = key;
    }
    console.log(newObj);
}

exchangeObjkeyandval(student);

