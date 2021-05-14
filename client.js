// is js loaded in console?
console.log('js loaded');

// DOM ready
$( document ).ready( readyNow );

// create a variable of employees to store information from input
const employees= [ {
    firstName: 'Dillon',
    lastName: 'Baxendell',
    employeeNum: 619878,
    jobTitle: 'Software Developer',
    annualSalary: 54000
    }];


function appendEmployees( listOfEmployees ) {
    console.log('in appendEmployees');
    
    for (let i = 0; i < listOfEmployees.length; i++) {
        $( '#employeesTable' ).append( `<tr>
        <td>${listOfEmployees[i].firstName}</td>
        <td>${listOfEmployees[i].lastName}</td>
        <td>${listOfEmployees[i].employeeNum}</td>
        <td>${listOfEmployees[i].jobTitle}</td>
        <td>${listOfEmployees[i].annualSalary}</td>
        <td></td>
    </tr>`)
        
    }
    
    
}


function readyNow() {
    //code triggered here is safe to manipulate DOM
    console.log('DOM IS READY, jquery loaded');

    // Click Listeners


    // load buttons to be ready to function if clicked
    $( '#submit' ).on( 'click', handleSubmit )

    //functions to be called upon webpage load
    appendEmployees( employees );
}

function handleSubmit() {
    console.log('clicked submit!');


    
}