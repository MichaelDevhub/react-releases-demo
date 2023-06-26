import * as functions from 'firebase-functions';
import * as express from 'express';
import * as admin from 'firebase-admin';

const app = express();
admin.initializeApp();

// Set up the Firestore emulator
if (process.env.FIRESTORE_EMULATOR_HOST) {
    admin.firestore().settings({
        host: process.env.FIRESTORE_EMULATOR_HOST,
        ssl: false,
    });
}

app.get('/dummy', async (req, res) => {
    const dummyResponse = {
        message: 'This is a dummy response.',
        timestamp: new Date().toISOString(),
    };

    // Use Firestore in your Cloud Function
    //const firestore = admin.firestore();
    //const collectionRef = firestore.collection('your_collection');

    res.json(dummyResponse);
});

export const dummyFunction = functions.https.onRequest(app);
