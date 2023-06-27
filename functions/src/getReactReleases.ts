import * as functions from 'firebase-functions';
import * as express from 'express';
import * as admin from 'firebase-admin';
import axios from "axios";
import {IReleaseData} from "./types";

const app = express();
admin.initializeApp();

// Set up the Firestore emulator
if (process.env.FIRESTORE_EMULATOR_HOST) {
    admin.firestore().settings({
        host: process.env.FIRESTORE_EMULATOR_HOST,
        ssl: false,
    });
}

const FETCH_REACT_RELEASES_URL: string = "https://api.github.com/repos/facebook/react/releases";
const MAX_RELEASES: number = 15;

const mapReleaseData = (releases: IReleaseData[]): IReleaseData[] => {
    return releases.map(({ tag_name, name }) => ({ tag_name, name }));
}

const filterReleaseData = (releases: IReleaseData[], searchKey: string): IReleaseData[] => releases.filter((release: IReleaseData) =>
    release.name.toLowerCase().includes(searchKey.toLowerCase()) ||
    release.tag_name.toLowerCase().includes(searchKey.toLowerCase())
);

app.get('/all', async (req, res) => {
    try {
        const response = await axios.get<IReleaseData[]>(FETCH_REACT_RELEASES_URL);
        res.json(mapReleaseData(response.data.slice(0, MAX_RELEASES)));
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
    }
});


app.get('/search', async (req, res) => {
    try {
        const searchKey: string = req.query.key as string;

        if (searchKey) {
            const response = await axios.get<IReleaseData[]>(FETCH_REACT_RELEASES_URL);
            res.json(mapReleaseData(filterReleaseData(response.data, searchKey)));
        } else {
            res.status(500).json({ error: 'Property key is missing for search!' });
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
    }
});

export const getReactReleases = functions.https.onRequest(app);
