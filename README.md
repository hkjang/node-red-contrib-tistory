node-red-contrib-tistory
================

Node-RED node for tistory



## Install

To install the stable version use the `Menu - Manage palette - Install`
option and search for node-red-contrib-tistory, or run the following
command in your Node-RED user directory, typically `~/.node-red`

    npm install node-red-contrib-tistory


## Example 

### parameter 

```javascript
msg = {};
msg.accessToken = 'YOUR_ACCESS_TOKEN'
msg.api = 'category'
msg.action = 'list'
msg.param = {
  blogName: 'example'
}

msg.api = 'blog'
msg.action = 'info'

msg.api = 'post'
msg.action = 'list'
msg.param = {
  blogName: 'example',
  page: '1'
}
return msg;
```

### output results
```json
{"tistory":{"status":"200","item":{"url":"https://example.tistory.com","secondaryUrl":"","page":"1","count":"10","totalCount":"0"}}}
```

## Sample flow
```json
[{"id":"1ce76a0.8461496","type":"tistory","z":"a49a72c8.3d0a7","name":"","api":"","action":"","accessToken":"","x":450,"y":460,"wires":[["508c1070.48c67"]]},{"id":"a39e2ea8.5669","type":"inject","z":"a49a72c8.3d0a7","name":"","props":[{"p":"payload"},{"p":"topic","vt":"str"}],"repeat":"","crontab":"","once":false,"onceDelay":0.1,"topic":"","payload":"","payloadType":"date","x":140,"y":460,"wires":[["716daf07.0fa65"]]},{"id":"716daf07.0fa65","type":"function","z":"a49a72c8.3d0a7","name":"","func":"msg = {};\nmsg.accessToken = 'YOUR_ACCESS_TOKEN'\n\nmsg.api = 'category'\nmsg.action = 'list'\nmsg.param = {\n  blogName: 'example'\n}\n\nmsg.api = 'blog'\nmsg.action = 'info'\n\n\nmsg.api = 'post'\nmsg.action = 'list'\nmsg.param = {\n  blogName: 'example',\n  page: '1'\n}\n\n\nreturn msg;","outputs":1,"noerr":0,"initialize":"","finalize":"","x":300,"y":460,"wires":[["1ce76a0.8461496"]]},{"id":"508c1070.48c67","type":"debug","z":"a49a72c8.3d0a7","name":"","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"true","targetType":"full","statusVal":"","statusType":"auto","x":610,"y":460,"wires":[]}]
```
