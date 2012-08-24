# Drips
Drips allows you to set up a file system watcher which, upon detecting a changed file, will emit over a socket. Clients may therefore react to the changed file (for example, refresh a web page).

## Configuration
1. Add projects to the projects.json file. Each project is represented by an object with name and path properties.
2. Optionally change the port in server.js then start with `node server.js`
3. There is no step 3.

## See Also
[https://github.com/evanbarter/puddles](Puddles) is a simple implementation for Drupal. I am not an imaginative project namer.

## Acknowledgements
Utilizes [https://github.com/bevry/watchr](Watchr) and [https://github.com/learnboost/socket.io](socket.io)