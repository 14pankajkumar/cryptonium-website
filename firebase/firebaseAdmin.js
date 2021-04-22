const admin = require("firebase-admin");

const serviceAccount = require("../secrete.json");

export const verifyIdToken = (token) => {
    if (!admin.apps.length) {
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
            databaseURL: "https://maluxcoin-default-rtdb.firebaseio.com/",
        })
    }

    return admin.auth().verifyIdToken(token).catch((error) => {
        throw error;
    })
}