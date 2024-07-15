import singUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const user = singUpUser(firstName, lastName)
    .then((value) => ({
      status: 'fulfilled',
      value: {
        firstName: value.firstName,
        lastName: value.lastName,
      },
    }));

  const photo = uploadPhoto(fileName)
    .catch((e) => ({
      status: 'rejected',
      value: e,
    }));

  return Promise.all([user, photo]);
}
