var watchr = require('watchr')
  , io = require('socket.io').listen(8080)
  , projects = require('./projects')

projects.forEach(function (element, index, array) {
  var name = element.name
  var conn = io.of('/' + name)

  watchr.watch({
    path: element.path,
    listener: function (eventName, filePath, fileCurrentStat, filePreviousStat) {
        conn.emit('event', { file: filePath });
    },
    next: function (err, watcher) {
      if (err) throw err
      console.log('watching setup successfully for ' + element.name)
    }
  })
})
