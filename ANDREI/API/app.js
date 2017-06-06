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

        console.log(response);
        const accessToken = response.access_token;
        const options = {
            hostname: 'graph.facebook.com',
            port: 443,
            path: '/v2.9/me?access_token=' + accessToken + '&fields=id,name,email,picture',
            method: 'GET',
            json: true
        };

        httpsGetRequest(options).then(function (response) {

            console.log('2', response);

        });

    });

    // console.log('asdadaw123')

    // const reqAccessToken = https.request(options, (res) => {

    //     var data = [];

    //     res.on('data', (d) => {

    //         data.push(d);

    //         console.log('132213');

    //     });

    //     res.on('end', function () {


    //         const buffer = Buffer.concat(data);
    //         const response = JSON.parse(buffer.toString());

    //         const accessToken = response.access_token;

    //         const options2 = {
    //             hostname: 'graph.facebook.com',
    //             port: 443,
    //             path: '/v2.9/me?access_token=' + access_token + '&fields=id,name,email,picture',
    //             method: 'GET',
    //             json: true

    //         }

    //         console.log('asdsa');

    //         const requestUserInfo = https.request(options2, (res) => {

    //             console.log('asda');

    //             var data = [];

    //             res2.on('data', (d) => {

    //                 data.push(d);

    //             });

    //             res.on('end', function () {


    //                 const buffer = Buffer.concat(data);
    //                 const response = JSON.parse(buffer.toString());

    //                 console.log('a', response);


    //             });

    //             requestUserInfo.on('error', (e) => {

    //                 console.log(e);

    //             });

    //             requestUserInfo.end();

    //         });

    //     });

    //     reqAccessToken.on('error', (e) => {

    //         console.log('122312321', e);

    //     });

    //     reqAccessToken.end();


});



app.get('/auth/facebook/callback',
    function (req, res) {
        console.log('asdsadsada');
        // Successful authentication, redirect home.
        res.redirect('/');
    });




app.listen(3000);