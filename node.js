const tistory = require("tistory");
module.exports = function (RED) {
    function FunctionNode(n) {
        RED.nodes.createNode(this, n);
        var node = this;
        this.name = n.name;

        for (var key in n) {
            node[key] = n[key] || "";
        }
        this.on('input', function (msg) {
            for (var i in msg) {
                if (i !== 'req' | i !== 'res' | i !== 'payload' | i !== 'send' | i !== '_msgid') {
                    node[i] = msg[i] || node[i];
                }
            }
            tistory[node.api][node.action](node.accessToken, node.param)
                .then(function(response){
                    msg.payload = response.data;
                    node.send(msg);
                }).catch(function (err){
                    msg.payload = err;
                    node.send(msg);
                });
        });
    }

    RED.nodes.registerType("tistory", FunctionNode);
};
