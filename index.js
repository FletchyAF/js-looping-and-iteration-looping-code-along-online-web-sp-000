function writeCards(names, event) {
  let completeCards = []
  for (let i = 0; i < names.length; i++) {
    completeCards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
  }
  return completeCards
}

function countDown(posInteger) {
  while (posInteger > 0) {
    console.log(posInteger);
    posInteger -= 1;
  }
  
}