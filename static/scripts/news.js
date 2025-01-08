const apiKey = "5e13cd4b9bb442d087ea793917808a98";
const apiUrl = `https://newsapi.org/v2/top-headlines?category=science&language=en&pageSize=10&apiKey=${apiKey}`;

document.addEventListener('DOMContentLoaded', function() {
  const newsContainer = document.getElementById("news-container");

  async function fetchNews() {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (data.status === "ok" && data.articles.length > 0) {
        displayNews(data.articles);
      } else {
        newsContainer.innerHTML = "<p>No news found. Try again later.</p>";
      }
    } catch (error) {
      newsContainer.innerHTML = `<p>Error fetching news: ${error.message}</p>`;
    }
  }

  function displayNews(articles) {
    newsContainer.innerHTML = "";
    articles.forEach((article) => {
      const newsElement = document.createElement("div");
      newsElement.classList.add("article");

      newsElement.innerHTML = `
        <img src="${article.urlToImage || 'https://via.placeholder.com/300'}" alt="News Image">
        <h3>${article.title}</h3>
        <p>${article.description || "No description available."}</p>
        <a href="${article.url}" target="_blank">Read more</a>
      `;
      newsContainer.appendChild(newsElement);
    });
  }

  // Fetch the news on page load
  fetchNews();
});