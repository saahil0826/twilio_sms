require("dotenv").config();


const twilio = require('twilio')(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);
const body = 'Hello, do you see this?';
const numbers = ['+numer1', '+numer2', '+number3' ...];

const service = twilio.notify.services(process.env.TWILIO_NOTIFY_SERVICE_SID);

const bindings = numbers.map(number => {
  return JSON.stringify({ binding_type: 'sms', address: number });
});

service.notifications
  .create({
    toBinding: bindings,
    body: body
  })
  .then(notification => {
    console.log(notification);
  })
  .catch(err => {
    console.error(err);
  });
