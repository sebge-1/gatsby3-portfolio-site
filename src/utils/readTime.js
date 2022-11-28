module.exports = {
  getReadTime(words) {
    const readTime = Math.ceil(words.length / 125);
    return `${readTime} - ${readTime + 1} minutes`;
  }
}
