const student = {};

const arr = [ 'firstname', 'lastname', 'age', 'field' ];
const arr1 = [ 'Johann', 'Kerbrou', '30', 'CS' ];
const arr2 = [ 'Guillaume', 'Salou', '30', 'SWE' ];

student[arr[3]] = arr1;
student[arr[2]] = arr2;

console.log(student);

const [firstname, , , field] = arr2;

console.log(firstname, field);


// {
//   CS: [ 'Johann', 'Arielle', 'Jonathan', 'Emmanuel', 'Guillaume', 'Katie' ],
//   SWE: [ 'Guillaume', 'Joseph', 'Paul', 'Tommy' ]
// }