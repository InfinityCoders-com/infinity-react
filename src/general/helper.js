export const isAuthenticated = () => {
    const user = localStorage.getItem('auth');
    return user;
};