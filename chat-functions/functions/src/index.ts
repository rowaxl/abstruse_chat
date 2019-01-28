import * as functions from 'firebase-functions';
import * as  admin from 'firebase-admin';
admin.initializeApp();

const db = admin.database();

export const addMessage = functions.https.onRequest((request, response) => {
    const {user, message} = request.body;
    console.log('user:', user);
    console.log('message:', message);

    db.ref('/message').push({ user: user, message: message }).then((snapshot) => {
        return response.send(snapshot.ref.toString());
    })
});
