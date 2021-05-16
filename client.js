// is js loaded in console?
console.log('js loaded');

// DOM ready
$( document ).ready( readyNow );

// Create a variable of employees to store information from input
const employees= [];

// Declare the monthlyCost and set it to zero so we can use it in upcoming functions
let monthlyCost = 0;


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
    

    // append the input information to the DOM in a table format
    $( '#employeesTable' ).append( 
    `<tr>
        <td>${inputFirstName}</td>
        <td>${inputLastName}</td>
        <td>${inputID}</td>
        <td>${inputTitle}</td>
        <td id="salary">${inputSalary}</td>
        <td><button class="deleteButton btn btn-outline-danger btn-sm">DELETE</button></td>
    </tr>`
    );
    
    // calculate monthly cost by running function calculateMonthlyCost
    calculateMonthlyCost();

     // Empty the input fields
      $( '#firstName' ).val( '' );
      $( '#lastName' ).val( '' );
      $( '#employeeID' ).val( '' );
      $( '#jobTitle' ).val( '' );
      $( '#annualSalary' ).val( '' );
}

// Find the monthly cost of each individual when they're submitted
function calculateMonthlyCost(){
    console.log('in calculateMonthlyCost');

    // Declare the inputSalary (again?) and the individual cost via their annual salary
    let inputSalary = Number($( '#annualSalary' ).val());
    let individualCost = Math.round(inputSalary / 12);

    // Set the monthly cost plus the individual employee cost
    monthlyCost += individualCost;

    // Replace the text in the monthlyCost HTML heading with the updated monthlyCost variable
    $( '#monthlyCost' ).text( `Monthly Cost: $${monthlyCost}` );

    // IF the monthlyCost is greater than $20000 then assign the class "highlighted" to it
    if( monthlyCost > 20000 ) {
        $( '#monthlyCost' ).addClass( 'highlighted' );
    }
    
}

function handleDelete() {
    console.log('clicked delete!');
    
    $(this).parent().parent().remove();

    let individualCost = $(this).find("salary").html();

    console.log(individualCost);
    
}