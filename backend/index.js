const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try {
    const r = await axios.put(
        "https://api.chatengine.io/users/",
        {username: username, secret: username, first_name: username},
        {headers: {"private-key":"01a57dc1-e0f3-490d-b6f4-bdca1584fd9d"}}

        )
        return res.status(r.status).json(r.data)
  } catch(e) {
    return res.status(e.respone.status).json(e.resonse.data)
  }

  
});

app.listen(3001);