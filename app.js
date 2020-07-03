require("dotenv").config();


const twilio = require('twilio')(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);
const body = 'Hello Wold';

const number = ['+919828143222', '+919829010342'];

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
