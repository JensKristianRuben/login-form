import { Router } from "express";

const router = Router();

router.get("/api/session", (req, res) => {

  console.log("Cookies:", req.headers.cookie);
  console.log("req.session at /api/session:", req.session);


  if (!req.session.userId) {
    return res.status(401).json({ user: null });
  }

  res.status(200).json({
    user: {
      id: req.session.userId,
    }
  });
});

export default router;
