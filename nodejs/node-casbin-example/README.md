# Start the test

Installing dependencies:
`
npm i
`
## Working

``` node working.js ```

```
curl localhost:3000/api/private?user=admin
curl localhost:3000/api/private?user=user # returns forbidden message
```
## Not Working
``` node not-working.js ```


```
curl localhost:3000/api/private?user=admin
curl localhost:3000/api/private?user=user # not working here, return a private message
```
