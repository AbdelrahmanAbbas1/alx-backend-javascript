import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstname, lastName, fileName) {
  return Promise
  .allSettled([signUpUser(firstname, lastName), uploadPhoto(fileName)])
}
