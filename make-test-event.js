/* Can be used to make a test event for the Lambda console
 *
 * Usage: node ./make-test-event.js
 *
 */
const path = require("path");
const zlib = require("zlib");

const message = JSON.stringify({
  time: 1654025652919,
  level: "info",
  location: {
    package: "main",
    module: "Main",
    file: "app/Main.hs",
    line: 19,
    char: 17,
  },
  context: { instance: "local", queue: "restyled:agent:webhooks" },
  message: {
    text: "No Lifecycle Hook queue, running forever",
    meta: { foo: "bar" },
  },
});

const timestamp = new Date().getTime();
const payload = {
  messageType: "DATA_MESSAGE",
  owner: "123456789012",
  logGroup: "restyled/test/restyle-machines",
  logStream: "abc123",
  subscriptionFilters: ["LambdaStream_cloudwatchlogs-node"],
  logEvents: [
    {
      id: "34622316099697884706540976068822859012661220141643892546",
      timestamp,
      message,
    },
  ],
};

const zipped = zlib.gzipSync(JSON.stringify(payload));
const base64 = Buffer.from(zipped).toString("base64");
const event = {
  awslogs: {
    data: base64,
  },
};

console.log(JSON.stringify(event));
