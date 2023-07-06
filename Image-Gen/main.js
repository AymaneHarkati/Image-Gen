import "./style.css";

const form = document.querySelector("form");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  showSpinner();
  const data = new FormData(form);
  const response = await fetch("http://localhost:8080/dream", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      prompt: data.get("prompt"),
    }),
  }).catch(() => {
    alert("Server is down....try later");
    hideSpinner();
  });
  if (response.ok) {
    const { image } = await response.json();
    const results = document.querySelector("#result");
    results.innerHTML = `<img src="${image[0]}"/>`;
  } else {
    const err = await response.text();
    alert(err);
  }

  hideSpinner();
});

function showSpinner() {
  const button = document.querySelector("button");
  button.disabled = true;
  button.innerHTML = 'Dreaming... <span class="spinner">🧠</span>';
}
function hideSpinner() {
  const button = document.querySelector("button");
  button.disabled = false;
  button.innerHTML = "Dream";
}
