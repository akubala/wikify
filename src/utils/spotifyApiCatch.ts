/* eslint-disable @typescript-eslint/camelcase */
import queryString from 'query-string';

import SpotifyErrorResponse from '@/types/SpotifyErrorResponse';
import env from '@/config/env';

const INVALID_ACCESS_TOKEN_STATUS_CODE = 401;

const spotifyApiCatch = ({ response }: XMLHttpRequest) => {
  const { error: { status } }: SpotifyErrorResponse = JSON.parse(response);

  if (status === INVALID_ACCESS_TOKEN_STATUS_CODE) {
    const searchUrl = queryString.stringify({
      client_id: env.CLIENT_ID,
      response_type: 'token',
      redirect_uri: env.REDIRECT_URI,
    });
    window.location.href = `https://accounts.spotify.com/authorize?${searchUrl}`;
  }
};

export default spotifyApiCatch;
