
// Get visible articles
export default (articles, {text}) => {
  return articles.filter((article) => {
    const textMatch = article.nameDe.toLowerCase().includes(text.toLowerCase());
    return textMatch;
  })
}
