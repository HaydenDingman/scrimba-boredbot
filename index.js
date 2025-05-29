document.querySelector("button").addEventListener("click", () => {
  fetch("https://apis.scrimba.com/bored/api/activity")
  .then(response => response.json())
  .then(data => {
    document.getElementById("activity-container").textContent = data.activity;
    document.getElementById("title").textContent = "🤖 BoredNoMoreBot 🤖"
    document.getElementById("container").classList.add("fun-background");
  })
})