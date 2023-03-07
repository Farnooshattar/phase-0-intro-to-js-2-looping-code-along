const names = ['Guadalupe', 'Ollie', 'Aki'];

function writeCards(names) {
  let i = 0; // the initialization moves OUTSIDE the body of the loop!
  let messages=[]
  while (i < names.length) {
    console.log(`Thank you ${names[i]} for the wonderful surprise gift!`);
    messages[i]=`Thank you, ${names[i]}, for the wonderful surprise gift!`
    i++; // the iteration moves INSIDE the body of the loop!
  }

  return messages;
}
function countDown(number)
{
    while(number>=0)
{
    console.log(number);
        number--;
}
        

        
}
writeCards(names);
countDown(11);