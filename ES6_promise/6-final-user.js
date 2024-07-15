import singUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup() {
  return Promise.allSettled([singUpUser, uploadPhoto])
    .then((values) => {
      const [photo, user] = values;
      return {
        status: 200,
        value: `${photo.fileName} ${user.fileName} ${user.lastName}`,
      };
    });
}
