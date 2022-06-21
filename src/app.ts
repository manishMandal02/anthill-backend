import colors from 'colors/safe';
import dotenv from 'dotenv';
import express, { Express, Request, Response } from 'express';
import { App } from '@slack/bolt';
import { publishMessage } from './services/postMessage';
import { messageAction } from './services/messageAction';

dotenv.config();

// default port
const PORT = 8000;

const expressApp: Express = express();

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  appToken: process.env.SLACK_APP_TOKEN,
});

const appServer = async () => {
  await app.start(process.env.PORT || PORT);
  console.log(colors.cyan(`Slack app is running at port ${PORT}`));
  await publishMessage(app, 'C03J8FKGQ5C', 'Hello world :tada:');
  await messageAction(app);
};

expressApp.get('/', (req: Request, res: Response) => {
  res.send('Server running...');
});

expressApp.listen(8080, () => {
  console.log(colors.cyan(`Server app is running at port ${PORT}`));
});

appServer();

// Todo: Create express server and listen to the slack events (message action)
