document.addEventListener("DOMContentLoaded", () => {
  const container = document.createElement("div");
  container.id = "favorites-container";
  document.body.appendChild(container);

  const button = document.createElement("button");
  button.id = "addFavorite";
  button.textContent = "Add Favorite";
  document.body.appendChild(button);

  button.addEventListener("click", () => {
      const newItem = document.createElement("div");
      newItem.textContent = "Yeni Favori";
      container.appendChild(newItem);
  });
});
