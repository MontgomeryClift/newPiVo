/**
 * Created by salva on 4/05/16.
 */
var OplogWatcher = require('mongo-oplog-watcher');

var oplog = new OplogWatcher({
  host:"127.0.0.1" ,ns: "test.collection"
});

oplog.on('insert', function(doc) {
	console.log(doc);
});