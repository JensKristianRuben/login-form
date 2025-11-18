import { Router } from "express";
import { hashPassword } from "../util/passwordUtil.js";
import supabase from "../util/supabaseClient.js";

const router = Router();

router.post("/api/register", async (req, res) => {
  const email = req.body.email;
  const password = req.body.registerPassword;

  const hashedPassword = await hashPassword(password);

  const { data, error } = await supabase
    .from("users")
    .insert([{ email, password_hash: hashedPassword }])
    .select();

  if (error) {
    console.error(error);
    return res.status(500).send({ error: "Could not create user" });
  }

  res.status(201).send({ data: "User created" });
});

export default router;
