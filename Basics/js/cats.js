// 1. Pobieramy kontener z HTMLa
const catsContainer = document.querySelector(".cats__section");
// 2. Pobieramy przycisk z HTMLa
const getCatButton = document.querySelector("#getCatButton");
const API_URL = "https://cataas.com";
const appState = {
  isLoading: false,
  catsArray: [],
};

// 3. Dodajemy event na button click
getCatButton.addEventListener("click", (e) => {
  let { catsArray, isLoading } = appState; // destrukturyzacja
  //   e.preventDefault(); => wylacza domyslne zachowanie np. formularza (wysylke)
  isLoading = true;
  // 4. Na klik pobieramy dane z API
  fetch(`${API_URL}/cat?json=true`)
    .then((catData) => catData.json())
    .then((data) => {
      // 5. Obrabiamy dane
      catsArray.unshift(data);
      isLoading = false;

      // czyszczenie kontenera
      catsContainer.innerHTML = "";

      catsArray.forEach((element, id) => {
        // 6. Tworzymy kontener obrazka
        const catImgContainer = document.createElement("img");
        catImgContainer.classList.add("catImage");

        // 7. Dodajemy do obrazka dane z API
        catImgContainer.src = `${API_URL}/${element.url}`;

        // 8. Dodajemy obrazek do kontenera
        catsContainer.appendChild(catImgContainer);
      });
    })
    .catch(console.error);
});
