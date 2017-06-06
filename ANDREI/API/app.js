const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const https = require('https');

app.use(cors());
app.use(bodyParser.json());


app.get('/hello', function (req, res) {

    res.json('hello works')

})

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

app.post('/login/facebook', function (req, res) {

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

        // console.log(response);
        const accessToken = response.access_token;
        const options = {
            hostname: 'graph.facebook.com',
            port: 443,
            path: '/v2.9/me?access_token=' + accessToken + '&fields=id,name,email,picture',
            method: 'GET',
            json: true
        };

        httpsGetRequest(options).then(function (response) {

            // console.log('2', response);

            const payload = {

                facebookId: response.id,
                name: response.name,
                email: response.email,
            };

            const token = jwt.sign(payload, 'appsecret');

            // console.log(token);

            res.status(200).json({token: token});

        });

    });

});

app.listen(3000);