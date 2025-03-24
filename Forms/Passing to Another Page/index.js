// this function gets the information from the form and creates an HTML id called 'formResults' to be displayed on this page
    function myResults() {
        let someTextD = document.getElementById('myForm').elements['someText'].value;
        document.getElementById("formResults").innerHTML = someTextD;
    }


// this function gets the information from the form and passes 'someText' to another page
    function myResultsPass() {
        let someTextD = document.getElementById('myForm').elements['someText'].value;
        location.replace("index2.html?someTextPass=" + someTextD);   
    }



// *This code is to prevent the form from reloading

    // *Get the form element
    const form = document.getElementById('myForm');
    // *Add a submit event listener
    form.addEventListener('submit', function (event) {
        // *Prevent the default form submission behavior
        event.preventDefault();
        // *Do your form processing here (e.g., send data to a server)
            //console.log('Form submitted without page refresh');
            myResults(); /*sends info with no value in the fields */
        // *Optionally, you can reset the form
        //form.reset();
    });
