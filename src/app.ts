import colors from 'colors/safe';
import dotenv from 'dotenv';
import { App } from '@slack/bolt';

dotenv.config();

// default port
const PORT = 8000;

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  appToken: process.env.SLACK_APP_TOKEN,
});

const appServer = async () => {
  await app.start(process.env.PORT || PORT);
  console.log(colors.cyan(`Slack  app is running at port ${PORT}`));
};

appServer();
