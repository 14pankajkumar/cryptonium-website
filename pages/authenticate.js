import React from "react";
import nookies from "nookies";
import { verifyIdToken } from "../firebase/firebaseAdmin";
import firebaseClient from "../firebase/firebaseClient";
import "firebase/app"
import Button from "../components/CustomButtons/Button"

function Authenticated({session}) {
    firebaseClient();
    if (session) {
        return(
            <div className="container">
                <h1>Authenticated</h1>
                <p textAlign="center">
                    You are now Authenticated 
                </p>
                <Button color="danger"
                onClick={async () => {
                    await firebase.auth().signOut();
                    window.location.href = "/"
                }}
                >
                    Log out
                </Button>
            </div>
        )
    } else {
        return (
            <h1>Loading...</h1>
        )
    }
}

export async function getServerSideProps(context) {
    try {
        const cookies = nookies.get(context);
        const token = await verifyIdToken(cookies, token)
        const {uid, email} = token;
        return{
            props: {session: `Your email is ${email} and you UID id ${uid}.`}
        }

    } catch (err){
        context.res.writeHead(302, {location: "/"});
        context.res.end();
        return { props: [] };
    }
}

export default Authenticated