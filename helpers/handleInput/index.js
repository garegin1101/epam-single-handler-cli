export default (input) => {
    return input
    // Converts Buffer to utf-8
    .toString()
    // Remove spaces (not between words)
    .trim()
};