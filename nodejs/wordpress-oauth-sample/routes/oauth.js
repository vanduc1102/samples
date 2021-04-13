var express = require('express');
var router = express.Router();
const axios = require('axios');
const querystring = require('querystring');

const ONE_HOUR = 60 * 60 * 1000;

router.get('/start', function (req, res, next) {
  console.log("start: ", req.query);
  const redirect_uri = req.query.redirect_uri;
  const callbackUrl = 'http://localhost:3000/oauth/callback'
  const oauthUrl = 'https://public-api.wordpress.com/oauth2/authorize?client_id=75397&response_type=code&scope=auth&redirect_uri=' + callbackUrl;

  res.cookie('redirect_uri', redirect_uri, {
    secure: true,
    expires: new Date(Date.now() + ONE_HOUR)
  });
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
  const formData = new URLSearchParams()
  formData.append('client_id', process.env.CLIENT_ID)
  formData.append('redirect_uri', process.env.REDIRECT_URI)
  formData.append('client_secret', process.env.CLIENT_SECRET)
  formData.append('code', tokenCode)
  formData.append('grant_type', 'authorization_code')

  return axios.post('https://public-api.wordpress.com/oauth2/token', formData, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).then(response => response, (reason) => {
    console.log(reason)
    return reason;
  })
}

module.exports = router;
