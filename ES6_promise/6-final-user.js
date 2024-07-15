import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const user = signUpUser(firstName, lastName)
    .then((value) => ({
      status: 'fulfilled',
      value: {
        firstName: value.firstName,
        lastName: value.lastName,
      },
    }));

  const photo = uploadPhoto(fileName)
    .catch((error) => ({
      status: 'rejected',
      value: error.toString(),
    }));

  return Promise.all([user, photo]);
}
