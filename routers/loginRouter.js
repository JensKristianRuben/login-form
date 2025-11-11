import { Router } from 'express';
import { comparePasswords } from '../util/passwordUtil.js';

const router = Router();


export const users = [
    { id: 1, email: "alice@example.com", password: "1234" },
    { id: 2, email: "bob@example.com", password: "secret" }
];

//TODO: lav password hashed og gem dem in mem hashed - sammenlign med hashed med compare().


router.post("/api/login", async (req, res) => {

    const email = req.body.email;
    const password = req.body.password;

    const user = users.find(user => user.email === email)

    if (!user) {
        return res.status(401).send({ data: "User not found" });
    }

    const matchingHashedPasswords = await comparePasswords(password, user.hashedPassword);

    if (!matchingHashedPasswords) {
        return res.status(401).send({ data: "Invalid password" })
    }

    res.status(200).send({ data: "Welcome sir!" })
});


export default router;