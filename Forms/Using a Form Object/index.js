function showResults() {
    
    class Person {

        constructor(fname, lname, age) {
            this.fname = document.getElementById("myForm").elements[0].value;
            this.lname = document.getElementById("myForm").elements[1].value;
            this.age = document.getElementById("myForm").elements[2].value;
        }
    }

    let Person1 = new Person(fname, lname, age);  //create new instance
    
    //console.log(Person1.fname, Person1.lname, Person1.age); //see results in the console
    document.getElementById("formResults").innerHTML = Person1.fname + " " + Person1.lname + " " + Person1.age;
    }

