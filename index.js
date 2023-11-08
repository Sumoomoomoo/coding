//Hello there
let message = "There is a";
let quote = 'my dream is pizza'
const data = ["dream", "pizza", quote, 2, [message, "hello"]];

//Oh hi

//Console log the third letter of "message" and include the quote afterwards. 
console.log(message[2] + quote)

//Console log the entire message, but from the "data" array
console.log(data[4][0]);

//Console log the total length of all the strings.
console.log(message.length + quote.length + data[0].length + data[1].length + data[4][1].length)