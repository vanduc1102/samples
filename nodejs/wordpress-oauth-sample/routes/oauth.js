var express = require('express');
var router = express.Router();
const axios = require('axios');
const querystring = require('querystring');


router.get('/start', function (req, res, next) {
  console.log("start: ", req.query);
  const redirect_uri = req.query.redirect_uri;
  const callbackUrl = 'http://localhost:3000/oauth/callback'
  const oauthUrl = 'https://public-api.wordpress.com/oauth2/authorize?client_id=75397&response_type=code&scope=auth&redirect_uri=' + callbackUrl;

  res.cookie('redirect_uri', redirect_uri, { secure: true });
  res.redirect(oauthUrl);
});


router.get('/callback', async function (req, res, next) {
  const redirect_uri = req.cookies['redirect_uri'];
  if (!redirect_uri) {
    return res.send({
      message: 'Invalid request.'
    })
  }
  console.log("callback - query: ", req.query);
  const { code } = req.query;
  const accessTokenResponse = await getAccessToken(code);
  console.log("Wordpress OAuth response: ", accessTokenResponse.data);
  console.log('read cookie - redirect_uri: ', req.cookies['redirect_uri']);
  res.redirect(redirect_uri + '&' + querystring.stringify(accessTokenResponse.data));
});

async function getAccessToken(tokenCode) {
  const data = new URLSearchParams()
  data.append('client_id', process.env.CLIENT_ID)
  data.append('redirect_uri', process.env.REDIRECT_URI)
  data.append('client_secret', process.env.CLIENT_SECRET)
  data.append('code', tokenCode)
  data.append('grant_type', 'authorization_code')

  return axios.post('https://public-api.wordpress.com/oauth2/token', data, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).then(response => response, (reason) => {
    console.log(reason)
    return reason;
  })
}

module.exports = router;
