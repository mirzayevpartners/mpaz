//@ts-expect-error no types for sha1 package
import sha1 from 'sha1';
import { setCookie, getCookie, hasCookie, deleteCookie } from 'cookies-next';
import { AuthProvider } from 'ra-core';
const authProvider: AuthProvider = {
  login: ({ username, password }) => {
    if (username !== process.env.NEXT_PUBLIC_ADMIN_USERNAME || password !== process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      return Promise.reject();
    }
    // localStorage.setItem('username', sha1(username));
    // localStorage.setItem('password', sha1(password));
    setCookie('username', sha1(username), { maxAge: 30 * 24 * 60 * 60 });
    setCookie('password', sha1(password), { maxAge: 30 * 24 * 60 * 60 });
    return Promise.resolve();
  },
  logout: () => {
    // localStorage.removeItem('username');
    // localStorage.removeItem('password');
    deleteCookie('username');
    deleteCookie('password');
    return Promise.resolve();
  },
  checkAuth: () => {
    // if(!localStorage.getItem('username') || !localStorage.getItem('password')) {
    // 	return Promise.reject();
    // }
    // if(localStorage.getItem('username') === sha1(process.env.NEXT_PUBLIC_ADMIN_USER) && localStorage.getItem('password') === sha1(process.env.NEXT_PUBLIC_ADMIN_PASSWORD)) {
    // 	return Promise.resolve();
    // }
    // else {
    // 	return Promise.reject();
    // }
    if (!hasCookie('username') || !hasCookie('password')) {
      return Promise.reject();
    }
    if (
      getCookie('username') === sha1(process.env.NEXT_PUBLIC_ADMIN_USERNAME) &&
      getCookie('password') === sha1(process.env.NEXT_PUBLIC_ADMIN_PASSWORD)
    ) {
      return Promise.resolve();
    } else {
      return Promise.reject();
    }
  },
  checkError: (error) => {
    const status = error.status;
    if (status === 401 || status === 403) {
      // localStorage.removeItem('username');
      // localStorage.removeItem('password');
      deleteCookie('username');
      deleteCookie('password');
      return Promise.reject();
    }
    // other error code (404, 500, etc): no need to log out
    return Promise.resolve();
  },
  // getIdentity: () =>
  // 		Promise.resolve({
  // 			id: 'user',
  // 			fullName: 'John Doe',
  // 		}),
  getPermissions: () => Promise.resolve(''),
};

export default authProvider;
