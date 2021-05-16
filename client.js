// is js loaded in console?
console.log('js loaded');

// DOM ready
$( document ).ready( readyNow );

// create a variable of employees to store information from input
const employees= [];



function readyNow() {
    //code triggered here is safe to manipulate DOM
    console.log('DOM IS READY, jquery loaded');

    // Click Listeners
    // load buttons to be ready to function if clicked
    $( '#submit' ).on( 'click', handleSubmit )

    $( '.table' ).on( 'click', '.deleteButton', handleDelete );

    //functions to be called upon webpage load

}

function handleSubmit() {
    console.log('clicked submit!');

    // set variables to the inputs of each field
    let inputFirstName = $( '#firstName' ).val();
    let inputLastName = $( '#lastName' ).val();
    let inputID = Number($( '#employeeID' ).val());
    let inputTitle = $( '#jobTitle' ).val();
    let inputSalary = Number($( '#annualSalary' ).val());

    // push the new input employee into the employees list (to store)
    employees.push({
        firstName: inputFirstName,
        lastName: inputLastName,
        employeeNum: inputID,
        jobTitle: inputTitle,
        annualSalary: inputSalary
        });

    // append the input information to the DOM
    $( '#employeesTable' ).append( 
    `<tr>
        <td>${inputFirstName}</td>
        <td>${inputLastName}</td>
        <td>${inputID}</td>
        <td>${inputTitle}</td>
        <td>${inputSalary}</td>
        <td><button class="deleteButton">DELETE</button></td>
    </tr>`
    );
}

function handleDelete() {
    console.log('clicked delete!');
    
    $(this).parent().parent().remove();
}