# Java Virtual Thread



## Commands

- Single request
```
curl -XGET http://localhost:3000
```
- AB testing

```
ab -n 1000 -c 100 http://localhost:3000/ab
ab -n 1000 -c 100 http://localhost:8500/ab
```

## Prof

```
NODE_ENV=production node --prof nodejs/server.js
```