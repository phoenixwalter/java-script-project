function person(firstName, lastName, age, nationality){
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = function(){
        return this.firstName + " " + this.lastName;
    }
    this.age = age;
    this.nationality = nationality;
}
let peopleList = [];
let listIndex = 0;
function createObject(){
    const firstNameValue = document.getElementById("first-name").value;
    const lastNameValue = document.getElementById("last-name").value;
    const ageValue = document.getElementById("age").value;
    const nationalityValue = document.getElementById("nationality").value;
    peopleList[listIndex] = new person(firstNameValue,lastNameValue,ageValue,nationalityValue);
    console.log(JSON.stringify(peopleList[listIndex]));
    listIndex++;
}
function printList(){
    console.log(JSON.stringify(peopleList));
}
