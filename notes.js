/*Where to insert script and why?
    ○ Insert script element at the end because the browser should load all the html and then the JS
    ○ The code in the script needs to talk to the elements in the page, so we know all the elements are  already rendered
• Variables
    ○ For variables, use let instead of var and define each variable on a separate line
    ○ Default value of variables are undefined
*/
/* Primitive types
    § String
    § Number
    § Boolean
    § null
    § undefined
    § For es6, there is also symbol
○ Reference Types
    § Object
        □ Object literal example
 */
           let person = {
                name: 'Mujahid',
                age: 20
            };
    /* Array
        □ Array literal example */
            let selectedColors=['red','blue'];
    /* Function
        □ Function example */
            function greet(name) {
                console.log('Hello' + 'name');
            }

    /*  □ Types of functions
            ® Performing a task
            ® Calculation of a value */
    
// Constants
    // Declare with const
        const x = 5;

/* Logical Operator w/ NonBoolean
   false || true = true
   false || 'Mujahid' = Mujahid
   false || 1 = 1 

   falsy = 
*/