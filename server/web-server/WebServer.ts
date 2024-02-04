import express from "express";
import cors from "cors";
import redis from "redis";

const PORT = 3000;
const WEB_SOCKET_PORT = 8080;

const app = express();
const redisClient = redis.createClient();

// TODO: NEED TO FIGURE OUT WHETHER TO INTEGRATE THE SOCKET WITH EXPRESS, OR HAVE IT RUN SEPARATELY ON IT'S OWN PORT USING HTTP.CREATESERVER
app.use(cors()); // FIXME: SEE NESCLE FOR OPTIONS
app.use(express.json());

app.post("/api/test", (req, res) => {
    // TODO: Post some data, push it to the notification service, and then send a response back to the client from teh notification service
    //       NEED TO USE A LIBRARY THAT CAN DO THIS ACROSS PROCESSES OR EVEN MACHINES. THIS WOULD ALLOW US TO RUN THE NOTIFICATION SERVICE ON A DIFFERENT SERVER THAN
    //       THE WEB SERVER

    redisClient.publish("notification", "msg sent");

    res.json({ message: "msg sent to notification service"});
});

app.get("/", (req, res) => {
    // TODO: SERVE THE SITE
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
