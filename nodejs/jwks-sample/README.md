###

Create a Private Key using OpenSSL.

```shell
openssl genrsa -out keys/privateKey.pem 2048
```

Using the above create privateKey.pem file to create a Public Key.

```shell
openssl rsa -in keys/privateKey.pem -pubout -out keys/publicKey.pem
```

//TODO: Replace `jsonwebtoken` with `node-jose`
