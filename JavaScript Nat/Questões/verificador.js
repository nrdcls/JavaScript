function palindromo(str) {
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
  }
  
  console.log(palindromo("oi"));                       
  console.log(palindromo("Brasil é a capital"));       
  console.log(palindromo("Não tem x em nixon"));       
  
