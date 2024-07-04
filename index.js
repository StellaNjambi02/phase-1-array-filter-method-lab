// // // Code your solution here
 const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

const drivers1 = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];
function findMatching(drivers,name){
  return drivers.filter((drivers)=>drivers.toLowerCase()===name.toLowerCase());

}
 findMatching(drivers,"Bobby")

 function fuzzyMatch(drivers,letters){
  return drivers.filter((element)=>element.slice(0,letters.length)===letters)
 }

 function matchName(drivers1,name){
  return drivers1.filter((element)=>element.name===name);
 }