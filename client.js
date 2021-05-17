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


    $( '#target' ).on( 'click', '.deleteButton', handleDelete );

}

function handleSubmit() {
    console.log('clicked submit!');

    // push the new input employee into the employees list (to store)
    employees.push({
        firstName: $( '#firstName' ).val(),
        lastName: $( '#lastName' ).val(),
        employeeNum: Number($( '#employeeID' ).val()),
        jobTitle: $( '#jobTitle' ).val(),
        annualSalary: Number($( '#annualSalary' ).val())
        });
    

    // append the input information to the DOM in a table format
    renderEmployees();
    
    
    
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
    $( '#monthlyCost' ).text( `Monthly Cost: ${monthlyCost.toLocaleString('en-EN', {style: 'currency', currency: 'USD'})}` );

    // IF the monthlyCost is greater than $20000 then assign the class "highlighted" to it
    if( monthlyCost > 20000 ) {
        $( '#monthlyCost' ).addClass( 'overbudget' );
    } else {
        $( '#monthlyCost' ).removeClass( 'overbudget' );
    }
    
}

function renderEmployees() {
    console.log('RENDER!');

    $( '#target' ).empty();
    
    // append each employee as a new row to the table
    for (let employee of employees) {
        console.log('RENDER!');

        $( '#target' ).append( 
            `<tr>
                <td>${employee.firstName}</td>
                <td>${employee.lastName}</td>
                <td class="idNum">${employee.employeeNum}</td>
                <td>${employee.jobTitle}</td>
                <td id="salary">${employee.annualSalary.toLocaleString('en-EN', {style: 'currency', currency: 'USD'})}</td>
                <td><button class="deleteButton btn btn-outline-danger btn-sm">DELETE</button></td>
            </tr>`
            );
    }
    
}

function handleDelete() {
    console.log('clicked delete!');
    
    $(this).parent().parent().remove();


    //find employee that we want to delete with their id
    let idToDelete = $(this).closest('tr').find('idNum').text();
    console.log(idToDelete);
    
    let temp = [];
    //remove them from the employees array
    for (let employee of employees) {
        //is this the employee who needs to be removed?
        if( employee.employeeNum === idToDelete ) {
            //SHOULD NOT BE IN THE ARRAY
            //DONT PUSH
            console.log('removing ', employee);
            
        } else {
            //SHOULD BE IN THE ARRAY
            temp.push(employee)
        }
    }

    employees = temp;
}