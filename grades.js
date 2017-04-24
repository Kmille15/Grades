/* Loop over an array of student grades (values from 50-100) and output how many of each grades there are.

A score of 50-60 is an F
A score of 61-70 is a D
A score of 71-80 is a C
A score of 81-90 is a B
A score of 91-100 is an A
Start with array of random scores in your JavaScript

var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
Use console.log() to output the following criteria:

How many of each grade?
What is the lowest grade?
What is the highest grade?
*/

var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
var A = [100, 99, 98, 97, 96, 95, 94, 93, 92, 91];
var B = [90, 89, 88, 87, 86, 85, 84, 83, 82, 81];
var C = [80, 79, 78, 77, 76, 75, 74, 73, 72, 71];
var D = [70, 69, 68, 67, 66, 65, 64, 63, 62, 61];
var F = [60, 59, 58, 57, 56, 55, 54, 53, 52, 51, 50];


var highestGrade = Math.min(...scores);
var lowestGrade = Math.max(...scores);
var howManyOfEachGrade =




console.log(highestGrade);
console.log(lowestGrade);

