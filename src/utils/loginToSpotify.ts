/* eslint-disable @typescript-eslint/camelcase */
import queryString from 'query-string';

import env from '@/config/env';

const loginToSpotify = () => {
  const searchUrl = queryString.stringify({
    client_id: env.CLIENT_ID,
    response_type: 'token',
    redirect_uri: env.REDIRECT_URI,
    scope: 'user-top-read',
  });
  window.location.href = `https://accounts.spotify.com/authorize?${searchUrl}`;
};

export default loginToSpotify;
