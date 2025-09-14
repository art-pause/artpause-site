function filterLectures() {
  let q = document.getElementById("q").value.toLowerCase();
  let cards = document.querySelectorAll("[data-card]");

  cards.forEach(card => {
    let tags = card.getAttribute("data-tags") || "";
    let title = card.querySelector("h3")?.innerText || "";
    let desc = card.querySelector(".desc")?.innerText || "";

    let text = (tags + " " + title + " " + desc).toLowerCase();

    if (text.includes(q)) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });
}
