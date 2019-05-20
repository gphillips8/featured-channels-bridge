import needle from 'needle';
import { config } from '.';

export async function setChannels(usernames: string[]) {
  if (!config.twitch.extToken) {
    return;
  }
  const usernamesString = usernames.length ? usernames.join(',') : '';
  console.log('Attempting to update Twitch extension "Featured Channels" information.');
  const resp = await needle(
    'get',
    `https://api.furious.pro/featuredchannels/bot/${config.twitch.extToken}/${usernamesString}`,
  );
  if (resp.statusCode === 200) {
    console.log('Successfully updated Twitch extension "Featured Channels" information.');
  } else {
    console.log('Error updating Twitch extension "Featured Channels" information.');
  }
}
