export default (event, name, token) => {
    setCookie(event, name, token, {
        httpOnly: true,
        sameSite: "lax",
        expires: new Date(Date.now() + 99900 * 1000)
    });
}