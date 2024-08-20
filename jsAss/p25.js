/*4. Write a code to enter name, age and gender of a person in a object.
Remove the ‘age’ key from the object, leaving only the ‘name’ and
‘gender’ keys in the object.*/
student = {
    name : "David Rayy",
    age : 22,
    gender : 'm' };
    delete student.age;
    console.log(student);