const corsOptions = {
  origin: [
    "http://localhost:5173",
    "http://localhost:4173",
    "https://indo-chat-app.vercel.app",
    "indo-chat-44ikqjese-raj-dipak-chavans-projects.vercel.app",
    process.env.CLIENT_URL,
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

const CHATTU_TOKEN = "chattu-token";

export { corsOptions, CHATTU_TOKEN };
