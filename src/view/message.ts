import { KnownBlock } from '@slack/bolt';

const messageView = (): KnownBlock[] => {
  const blocks: KnownBlock[] = [
    {
      type: 'context',
      elements: [
        {
          type: 'mrkdwn',
          text: '👋 Goodafter noon! *Ants* 🐜.',
        },
      ],
    },
    {
      type: 'context',
      elements: [
        {
          type: 'plain_text',
          text: "Here's list of people going to 🏢 Office tomorrow",
          emoji: true,
        },
      ],
    },
    {
      type: 'divider',
    },
    {
      type: 'context',
      elements: [
        {
          type: 'mrkdwn',
          text: '<@U03JC6E9U7P>, <@U03JC6E9U7P>, <@U03JC6E9U7P>',
        },
      ],
    },
    {
      type: 'divider',
    },
    {
      type: 'actions',
      elements: [
        {
          type: 'button',
          text: {
            type: 'plain_text',
            text: 'Join',
            emoji: true,
          },
          value: 'join_btn',
          action_id: 'join_btn',
        },
        {
          type: 'button',
          text: {
            type: 'plain_text',
            text: 'Guest +1',
            emoji: true,
          },
          value: 'guest_btn',
        },
      ],
    },
  ];

  return blocks;
};

export { messageView };
