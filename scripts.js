function filterLectures() {
  const query = document.getElementById("q").value.toLowerCase();
  const cards = document.querySelectorAll("[data-card]");

  cards.forEach(card => {
    const tags = card.getAttribute("data-tags").toLowerCase();
    const title = card.querySelector("h3").innerText.toLowerCase();
    const desc = card.querySelector(".desc").innerText.toLowerCase();

    if (tags.includes(query) || title.includes(query) || desc.includes(query)) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });
}
