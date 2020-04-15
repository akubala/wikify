import SpotifyErrorResponse from '@/types/SpotifyErrorResponse';
import loginToSpotify from '@/utils/loginToSpotify';

const INVALID_ACCESS_TOKEN_STATUS_CODE = 401;

const spotifyApiCatch = ({ response }: XMLHttpRequest) => {
  const { error: { status } }: SpotifyErrorResponse = JSON.parse(response);

  if (status === INVALID_ACCESS_TOKEN_STATUS_CODE) {
    loginToSpotify();
  }
};

export default spotifyApiCatch;
