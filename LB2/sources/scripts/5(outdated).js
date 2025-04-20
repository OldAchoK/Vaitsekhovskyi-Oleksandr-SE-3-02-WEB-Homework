class PersonLambda {
    firstName;
    lastName;
    surName;

    constructor(firstName, lastName, surName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.surName = surName;
    }

    info() {
        if(surname === undefined) {
            alert("Person name is: " + this.firstName + ", last name is: " + this.lastName);
        } else {
            alert("Person name is: " + this.firstName + ", last name is: " + this.lastName + ", surname is: " + this.surName);
        }
    }
}

let fifthListener  = document
  .querySelector("body")
  .addEventListener("personCollectedDeclaration", (cache) => {
    let newPerson = new PersonLambda(cache.detail.firstName, cache.detail.lastName, cache.detail.surName);
    newPerson.info();
});