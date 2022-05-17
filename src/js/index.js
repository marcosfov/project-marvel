const characters = document.querySelectorAll(".character");

characters.forEach((character) => {
    const idCharacter = character.attributes.id.value;

    if (idCharacter === 'ultron') {
        return;
    }

    character.addEventListener('mouseenter', () => {
        const characterSelected = document.querySelector(".selected");
        characterSelected.classList.remove("selected");

        character.classList.add("selected");

        const imgPlayerOne = document.getElementById("character-player-1");
        imgPlayerOne.src = `./src/imagens/${idCharacter}.png`;

        const namePlayerOne = document.getElementById("name-player-1");
        const selectedName = character.getAttribute("data-name");
        namePlayerOne.innerHTML = selectedName;


    })
})