# twilio_sms


This repo is an example of sending one, a few and many SMS messages using the Twilio API.

You can read about how this code all works in the [Ultimate guide to sending bulk SMS with Twilio and Node.js](https://www.twilio.com/blog/2017/12/send-bulk-sms-twilio-node-js.html).

## Running the code

Clone the repo, then change into the directory:

```bash
git clone https://github.com/philnash/bulk-sms-alerts.git
cd bulk-sms-alerts
```

Install the dependencies:

```bash
npm install
```

```bash
npm i dotenv --s
```

Copy the `.env.example` file to `.env`:

```bash
cp .env.example .env
```

Fill in the environment variables in `.env`. You will need to collect them from your [Twilio console](https://www.twilio.com/console).

To run the different scripts, use the npm script. You can run:

```bash
node single.js
```

to use the [messaging API](https://www.twilio.com/docs/api/messaging) and a [Twilio number](https://www.twilio.com/phone-numbers) to send one message.


Run

```bash
node multiple.js
```

to use the [Notify API](https://www.twilio.com/docs/api/notify) to send multiple messages with just one API call.
