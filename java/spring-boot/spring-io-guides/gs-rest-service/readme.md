# rest api sample

## create a new users

```
curl -X POST localhost:8080/users \
-H 'Content-Type: application/json' \
-d '{"name":"duke","email":"vanducld@gmail.com"}'

```

using `httpie`

```
http POST localhost:8080/users name=Duke email=duke@gmail.com

http localhost:8080/users

```

## Taskfile

Run `task` to list all tasks
