# rabbitmq-nodejs

Here you can find JavaScript (Node) code examples from [RabbitMQ
tutorials](https://www.rabbitmq.com/getstarted.html).

To successfully use the examples you will need a running RabbitMQ server.


### Client Library

To install `amqplib` using npm:

``` shell
npm install amqplib -g
```

## Code

[Tutorial one: "Hello World!"](https://www.rabbitmq.com/tutorials/tutorial-one-javascript.html):

``` shell
node src/send.js
node src/receive.js
```

[Tutorial two: Work Queues](https://www.rabbitmq.com/tutorials/tutorial-two-javascript.html):

``` shell
node src/new_task.js "A very hard task which takes two seconds.."
node src/worker.js
```

[Tutorial three: Publish/Subscribe](https://www.rabbitmq.com/tutorials/tutorial-three-javascript.html)

``` shell
node src/receive_logs.js
node src/emit_log.js "info: This is the log message"
```

[Tutorial four: Routing](https://www.rabbitmq.com/tutorials/tutorial-four-javascript.html):

``` shell
node src/receive_logs_direct.js info
node src/emit_log_direct.js info "The message"
```


[Tutorial five: Topics](https://www.rabbitmq.com/tutorials/tutorial-five-javascript.html):

``` shell
node src/receive_logs_topic.js "*.rabbit"
node src/emit_log_topic.js red.rabbit Hello
```

<p>To receive all the logs:</p>

``` shell
node src/receive_logs_topic.js  "#"
```

<p>To receive all logs from the facility "<span class="code ">kern</span>":</p>

``` shell
node src/receive_logs_topic.js "kern.*"
```

<p>Or if you want to hear only about "<span class="code ">critical</span>" logs:</p>

``` shell
node src/receive_logs_topic.js "*.critical" 
```

<p>You can create multiple bindings:</p>

``` shell
node src/receive_logs_topic.js "kern.*" "*.critical"
```





[Tutorial six: RPC](https://www.rabbitmq.com/tutorials/tutorial-six-javascript.html):

``` shell
node src/rpc_server.js
node src/rpc_client.js 30
```
