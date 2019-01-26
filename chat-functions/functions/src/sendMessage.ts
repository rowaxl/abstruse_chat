import * as functions from 'firebase-functions';
// import * as admin from 'firebase-admin';

// const db = admin.database();
// const ref = db.ref('server/saving-data/fireblog');

export const sendMessage = functions.https.onRequest((request, response) => {
    console.log('user:', request.body.user);
    console.log('message:', request.body.message);
    response.send(`${request.body.user}: ${request.body.message}`);
});
