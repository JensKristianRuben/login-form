import { Router } from "express";
import supabase from "../util/supabaseClient.js";
import { requireAuth } from "../util/authUtil.js";

const router = Router();

router.post("/api/passwords", requireAuth, async (req, res) => {
  const { website, username, encryptedPassword } = req.body;
  const userId = req.user.id;

  if (!website || !username || !encryptedPassword) {
    return res.status(400).send({ error: "Missing required attributes" });
  }

  try {
    const { data, error } = await supabase
      .from("passwords")
      .insert([
        {
          user_id: userId,
          website: website,
          username: username,
          encrypted_password: encryptedPassword,
        },
      ])
      .select("*")
      .single();

    if (error) {
      console.error("Supabase insert error:", error.message);
      return res.status(500).send({ error: "Database error" });
    }

    res.status(201).send(data);
  } catch (err) {
    console.error("Server error:", err);
    res.status(500).send({ error: "Internal server error" });
  }
});

router.get("/api/passwords", requireAuth, async (req, res) => {
  const userId = req.user.id;

  try {
    const { data, error } = await supabase
      .from("passwords")
      .select("*")
      .eq("user_id", userId);

    if (error) {
      console.error("Couldnt read passwords", error.message);
      return res.status(500).send({ error: "Database error" });
    }

    return res.status(200).send(data)

  } catch (err) {
    console.error("Server error:", err);
    res.status(500).send({ error: "Internal server error" });
  }
});

export default router;
