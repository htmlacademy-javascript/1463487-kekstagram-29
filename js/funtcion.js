const isValidStringLength = (string, maxLength) => string.length <= maxLength;


console.log(
   'isValidStringLength(\'проверяемая строка\', 20) =',
   isValidStringLength('проверяемая строка', 20)
 );
 console.log(
   'isValidStringLength(\'проверяемая строка\', 18) =',
   isValidStringLength('проверяемая строка', 18)
 );
 console.log(
   'isValidStringLength(\'проверяемая строка\', 10) =',
   isValidStringLength('проверяемая строка', 10)
 );
