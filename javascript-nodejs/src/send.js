#!/usr/bin/env node

var amqp = require('amqplib/callback_api');

amqp.connect('amqp://guest:guest@localhost:5672/hello', function(error0, connection) {
    if (error0) {
        throw error0;
    }
    connection.createChannel(function(error1, channel) {
        if (error1) {
            throw error1;
        }

        var queue = 'user-messages-test';
        var msg = 'Hello World! 123';

        channel.assertQueue(queue, {
            durable: false
        });
        channel.sendToQueue(queue, Buffer.from(msg));

        console.log(" [x] Sent %s", msg);
    });
    setTimeout(function() {
        connection.close();
        process.exit(0);
    }, 500);
});
