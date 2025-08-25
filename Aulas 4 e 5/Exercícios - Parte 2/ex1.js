const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    const p = document.querySelector("p");
    p.innerHTML = "Texto alterado";
});