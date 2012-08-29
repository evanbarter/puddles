# Puddles
Puddles allows you to set up a file system watcher which, upon detecting a changed file, will emit over a socket. Clients may therefore react to the changed file (for example, refresh a web page).

## Configuration
1. Add projects to the projects.json file. Each project is represented by an object with name and path properties.
2. Optionally change the port in server.js then start with `node server.js`
3. There is no step 3.

## See Also
[Puddles for Drupal](https://github.com/evanbarter/puddles-drupal) is a simple implementation.

## Acknowledgements
Utilizes [Watchr](https://github.com/bevry/watchr) and [socket.io](https://github.com/learnboost/socket.io)
