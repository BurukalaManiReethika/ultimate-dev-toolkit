const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    localStorage.setItem(
        "theme",
        document.body.classList.contains("dark")
            ? "dark"
            : "light"
    );
});

window.onload = () => {
    const theme = localStorage.getItem("theme");

    if(theme === "dark"){
        document.body.classList.add("dark");
    }
};
