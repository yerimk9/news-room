export default function loadPage(
  ref,
  mainRef,
  page,
  articlesData,
  maxColumns,
  articlesPerPage,
  isSmallScreen
) {
  const container = ref.current;
  container.innerHTML = "";
  const start = (page - 1) * articlesPerPage;
  const end = start + articlesPerPage;
  const pageArticles = articlesData.slice(start, end);

  let columnHeights = Array(maxColumns).fill(0);

  pageArticles.forEach((articleData, index) => {
    const article = document.createElement("a");
    article.href = articleData.link;
    article.className = "c-article-card";
    article.innerHTML = `
    <div>
   <p class="c-article-card__title">${articleData.content.title}</p>
    </div>`;

    const column = index % maxColumns;
    const top = columnHeights[column];
    const left = (100 / maxColumns) * column + "%";

    article.style.top = top + "px";
    article.style.left = left;
    article.style.height = articleData.height + "px";

    columnHeights[column] += articleData.height + 0.1;

    container.appendChild(article);
  });

  const maxHeight = Math.max(...columnHeights);
  const paginationElement = document.querySelector(".pagination");
  const subscriptionElement = document.querySelector(".subscription");

  paginationElement.style.top = maxHeight + 20 + "px";
  subscriptionElement.style.top = maxHeight + 160 + "px"; // 필요한 경우 조정

  if (mainRef.current) {
    const additionalHeight = isSmallScreen ? 400 : 600;
    mainRef.current.style.height = `${maxHeight + additionalHeight}px`;
  }

  const pageItems = document.querySelectorAll(".page-item");
  pageItems.forEach((item, index) => {
    if (index + 1 === page) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}
