# techdemo
Flux over the wire for game development.

```
Renderer    Input Events -> Action Creators
   ^                             |
   |                             v
Stores                       Dispatcher
---^-----------------------------|--------- Client
   |                             |
   |                             v
[socket]                      [socket]
   |                             |
   |                             |
---|-----------------------------v--------- Server
Stores  <------------------  Dispatcher
   |                             ^
   v                             |
Game Logic --------------> Action Creators
```
