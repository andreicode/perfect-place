const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const https = require('https');

function httpsGetRequest(options) {

    return new Promise((resolve, reject) => {

        https.request(options, (res) => {
            const data = [];

            res.on('data', (chunk) => { data.push(chunk) });
            res.on('end', () => { resolve(JSON.parse(Buffer.concat(data))) });

        })
            .on('error', (err) => { console.log('err', err) })
            .end();

    });

};

router.post('/facebook', (req, res) => {

    const clientId = req.body.clientId;
    const redirectUri = req.body.redirectUri;
    const code = req.body.code;
    const clientSecret = '0fafa75275c7be9f2a9724e8c35ea312';

    const urlQueryParams = '?client_id=' + clientId + '&redirect_uri=' + redirectUri + '&client_secret=' + clientSecret + '&code=' + code;

    const options = {
        hostname: 'graph.facebook.com',
        port: 443,
        path: '/oauth/access_token' + urlQueryParams,
        method: 'GET',
        json: true
    };


    httpsGetRequest(options).then(function (response) {

        const accessToken = response.access_token;
        const options = {
            hostname: 'graph.facebook.com',
            port: 443,
            path: '/v2.9/me?access_token=' + accessToken + '&fields=id,name,email,picture',
            method: 'GET',
            json: true
        };

        httpsGetRequest(options).then(function (response) {

            const payload = {

                facebookId: response.id,
                name: response.name,
                email: response.email,
            };

            const token = jwt.sign(payload, 'appsecret');

            res.status(200).json({ token: token });

        });

    });

});


module.exports = router;