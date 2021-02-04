let defaultSearch = "http://google.com/search?q=";
let input = document.querySelector("#input");
input.addEventListener("keydown", e => {
    const query = input.value
    if (e.keyCode == 13) {
        e.preventDefault()
        console.log(input.value)
        window.open(`${defaultSearch}${query}`);
        // console.log(`${q}`)

        if (input.value > 0) {
            input.addEventListener("input", search, false);
        }

        setTimeout(() => {
            input.value = "";
        }, 1);
    }
});