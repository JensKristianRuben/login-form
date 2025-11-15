import "dotenv/config";
import express from "express";
import session from "express-session";
import generalLimiter from "./util/generalLimiter.js";
import PagesRouter from "./routers/pagesRouter.js";
import loginRouter from "./routers/loginRouter.js";
import registerRouter from "./routers/registerRouter.js";
import helmet from "helmet";
import { rateLimit } from "express-rate-limit";

const app = express();

app.use(express.static("public"));
app.use(generalLimiter);
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

app.use(helmet());

const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
  standardHeaders: "draft-8", // draft-6: `RateLimit-*` headers; draft-7 & draft-8: combined `RateLimit` header
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
  ipv6Subnet: 56, // Set to 60 or 64 to be less aggressive, or 52 or 48 to be more aggressive
  // store: ... , // Redis, Memcached, etc. See below.
});

app.use(generalLimiter);

app.use(PagesRouter);
app.use(loginRouter);
app.use(registerRouter);

const PORT = Number(process.env.PORT);

app.listen(PORT, () => {
  console.log("Server is running on port: ", PORT);
});
