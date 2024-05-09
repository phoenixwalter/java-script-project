function person(firstName, lastName, age, nationality){
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = function(){
        return this.firstName + " " + this.lastName;
    }
    this.age = age;
    this.nationality = nationality;
}
peopleList = [];
listIndex = 0;
function createObject(){
    const firstNameInput = document.getElementById("first-name");
    const firstNameValue = firstNameInput.value;
    const lastNameInput = document.getElementById("last-name");
    const lastNameValue = lastNameInput.value;
    const ageInput = document.getElementById("age");
    const ageValue = ageInput.value;
    const nationalityInput = document.getElementById("nationality");
    const nationalityValue = nationalityInput.value;
    peopleList[listIndex] = new person(firstNameValue,lastNameValue,ageValue,nationalityValue);
    console.log(JSON.stringify(peopleList[listIndex]));
    listIndex++;
}
function printList(){
    console.log(JSON.stringify(peopleList));
}