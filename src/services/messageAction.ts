import { App } from '@slack/bolt';
import { messageView } from '../view/message';

// Post a message to a channel your app is in using ID and message text
const messageAction = async (app: App) => {
  try {
    app.action('join_btn', async ({ body, ack, say }) => {
      // Acknowledge the action
      //   @ts-ignore
      console.log(body.message.blocks[3]);
      console.log('msg received');
      await ack();
      await say(`<@${body.user.id}> clicked the button`);
    });

    // Print result, which includes information about the message (like TS)
  } catch (error) {
    console.error(error);
  }
};

export { messageAction };
