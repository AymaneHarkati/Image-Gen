import * as dotenv from 'dotenv';
dotenv.config()
const openai = new OpenAIApi(config);
import  express from 'express';
import cors from 'cors';
import axios from 'axios';
const app = express();
app.use(cors());
app.use(express.json());

app.post('/dream', async (req, res) => {
  const prompt = req.body.prompt;
  const key = process.env.API_KEY
  const aiResp = await axios.post('https://stablediffusionapi.com/api/v3/text2img', {"key":key,"prompt":prompt,"width": "512",
  "height": "512"})
const image = aiResp.data.output;
res.send({image});
});

app.listen(8080, () => console.log('Server Started at http://localhost:8080/dream'))

