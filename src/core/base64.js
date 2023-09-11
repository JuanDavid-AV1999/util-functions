export const base64 = (string, decode = false) => {
    if (typeof string !== 'string') return '';
    if (!decode) return Buffer.from(string).toString('base64');
    return Buffer.from(string, 'base64').toString();
};
