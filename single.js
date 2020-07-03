require("dotenv").config();


const twilio = require('twilio')(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);
const body = 'Hello Wold'; //this is the message, that will be sent

const number = ['+add_a_number'];

for (var i = 0; i < number.length; i++) {
  twilio.messages
    .create({
          to: number,
          from: process.env.TWILIO_NUMBER,
          body: body
    })
    .then(message => {
          console.log(message.sid);
    })
    .catch(err => console.error(err));
}
