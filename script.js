function firstNonRepeatedChar(str) {
 // Write your code here // Create a frequency map
  const freq = {};

  // Count occurrences of each character
  for (const char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }

  // Find the first character with frequency 1
  for (const char of str) {
    if (freq[char] === 1) {
      return char;
    }
  }

  // If none found, return null
  return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
