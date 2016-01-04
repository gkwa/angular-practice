/**
 * Created by demo on 1/4/16.
 */

var connect = require("connect");
connect.createServer(
    connect.static("angularjs")
).listen(5000);
