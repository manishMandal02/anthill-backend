import { KnownBlock } from '@slack/bolt';

const messageView = (users: string[]): KnownBlock[] => {
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
          text: `<@${users.map((user) => '<@user>')}>`,
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
