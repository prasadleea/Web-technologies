// Define a function that acts as a delegate
function myDelegateFunction(parameter) {
    console.log('Delegate function called with parameter:', parameter);
}

// Another function that takes a delegate-like function as an argument
function performTask(callback) {
    // Some task logic
    console.log('Performing task...');
    
    // Call the delegate-like function
    callback('Hello from performTask!');
}

// Using the delegate-like function with the task-performing function
performTask(myDelegateFunction);
//myDelegateFunction();
/**
 * condtion 
 * 1
 * 2
 * let ganesh=(condtion)? consle.log(prasad):console.log(leela)
 * opp->sass=flase&&(leela   =="usage")
 */