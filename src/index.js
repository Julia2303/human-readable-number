module.exports = function toReadable (number) {
  let units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let dozens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let hundreds = 'hundred';
  let unit = units[number % 10];
  let dozen = Math.floor(number / 10);

  if(number < 20) {
      return units[number];
  } else if (number < 100) {
      dozen = dozens[dozen - 2]
      if (number % 10 === 0) {
        return dozen; 
      } else {
        return `${dozen} ${unit}`
      }
  } else {
      dozen = dozens[dozen % 10 - 2];
      let hundred = units[[Math.floor(number / 100)]]
      if (number % 100 === 0) {
          return `${hundred} ${hundreds}`;
      } else if (number % 100 < 20) {
          return `${hundred} ${hundreds} ${units[number % 100]}`;
      } else if (number % 10 === 0) {
        return `${hundred} ${hundreds} ${dozen}`;
      } else {
          return `${hundred} ${hundreds} ${dozen} ${unit}`;
      }
      
  }
}

