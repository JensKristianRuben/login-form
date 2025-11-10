import { Router } from 'express';
import { users } from './loginRouter.js'

const router = Router();

router.post("api/register", (req, res) => {

    const email = req.body.email;
    const password = req.body.password;


    users.push()


    res.status(200).send({data: "Welcome Sir"})
})


export default router;