function calculateAge(birthDate) {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    
    // birth date has not yet occurred this year
    const monthDiff = today.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
        age--;
    }
    
    return age;
}

const birthDate = "1990-06-25";
const age = calculateAge(birthDate);
console.log(`The person's age is: ${age}`);