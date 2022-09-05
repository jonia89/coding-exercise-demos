function sortFunction(a, b) {
  return b.forks_count - a.forks_count;
}

async function githubSorter() {
  const result = await fetch("https://api.github.com/search/repositories?q=language:javascript")
  const json = await result.json();
  return json.items.sort(sortFunction);
}

module.exports = {
  githubSorter
}