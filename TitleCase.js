function titleCase(sentence) {
  // Step 1: Convert the sentence to lowercase
  const lowercaseSentence = sentence.toLowerCase();

  // Step 2: Split the sentence into an array of words
  const words = lowercaseSentence.split(' ');

  // Step 3: Capitalize the first letter of each word
  const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));

  // Step 4: Join the words back into a sentence
  const titleCasedSentence = capitalizedWords.join(' ');

  // Step 5: Return the title-cased sentence
  return titleCasedSentence;
}
console.log(titleCase("this is an example"));  
console.log(titleCase("test"));            
console.log(titleCase("i r cool"));           
console.log(titleCase("WHAT HAPPENS HERE")); 
console.log(titleCase(""));                   
console.log(titleCase("A"));     

