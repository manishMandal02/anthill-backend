import { App } from '@slack/bolt';
import { messageView } from '../view/message';

// Post a message to a channel your app is in using ID and message text
const publishMessage = async (app: App, id: string, text: string) => {
  try {
    await app.client.chat.postMessage({
      // The token you used to initialize your app
      token: process.env.SLACK_BOT_TOKEN,
      channel: id,
      text: text,
      blocks: messageView(),
      // You could also use a blocks[] array to send richer content
    });

    // Print result, which includes information about the message (like TS)
  } catch (error) {
    console.error(error);
  }
};

export { publishMessage };
