const gameText = document.getElementById('game-text');
const choicesDiv = document.getElementById('choices');

function makeChoice(choice) {
    switch (choice) {
        case 1:
            scene1Outcome1();
            break;
        case 2:
            scene1Outcome2();
            break;
        case 3:
            scene1Outcome3();
            break;
        default:
            break;
    }
}

function scene1Outcome1() {
    gameText.innerHTML = "You follow the sound of laughter and find a group of chickens dancing in a circle! They invite you to join in.";
    choicesDiv.innerHTML = `
        <button onclick="scene2Dance()">Join the chicken dance.</button>
        <button onclick="scene2Explore()">Continue exploring deeper into the garden.</button>
    `;
}

function scene1Outcome2() {
    gameText.innerHTML = "You pick a beautiful peony, and a soft meow catches your attention. A little brown kitten appears, playfully batting at the flower petals.";
    choicesDiv.innerHTML = `
        <button onclick="scene2PetKitten()">Pet the kitten.</button>
        <button onclick="scene2FollowKitten()">Follow the kitten to see where it goes.</button>
    `;
}

function scene1Outcome3() {
    gameText.innerHTML = "You find a cozy bench under a magnolia tree with a note: 'Follow the path to find a special surprise.'";
    choicesDiv.innerHTML = `
        <button onclick="scene2FollowPath()">Follow the path.</button>
        <button onclick="scene2Stay()">Stay and enjoy the peaceful surroundings.</button>
    `;
}

function scene2Dance() {
    gameText.innerHTML = "You join the chickens, and they cluck joyfully. Suddenly, one of them lays a golden egg!";
    choicesDiv.innerHTML = `
        <button onclick="endGoldenEgg()">Keep the egg.</button>
        <button onclick="endGiveEgg()">Give the egg back to the chickens as thanks.</button>
    `;
}

function scene2Explore() {
    gameText.innerHTML = "You explore deeper into the garden and find a hidden fountain.";
    choicesDiv.innerHTML = `
        <button onclick="endHiddenFountain()">Admire the fountain and relax.</button>
    `;
}

function scene2PetKitten() {
    gameText.innerHTML = "You pet the kitten, and it purrs happily. It leads you to a hidden clearing with a sparkling fountain where Ahmad is waiting.";
    choicesDiv.innerHTML = `
        <button onclick="endRunToAhmad()">Run into Ahmad's arms.</button>
        <button onclick="endSplashAhmad()">Playfully splash him with water from the fountain.</button>
    `;
}

function scene2FollowKitten() {
    gameText.innerHTML = "You follow the kitten and find Ahmad with a bouquet of orchids. He smiles warmly and says, 'Every path you take leads me closer to you.'";
    choicesDiv.innerHTML = `
        <button onclick="endRunToAhmad()">Run into Ahmad's arms.</button>
        <button onclick="endSplashAhmad()">Playfully splash him with water from the fountain.</button>
    `;
}

function scene2FollowPath() {
    gameText.innerHTML = "You follow the path and find a beautiful picnic set up under an orchid tree. Ahmad sits there, holding a guitar.";
    choicesDiv.innerHTML = `
        <button onclick="endListenToSong()">Listen to Ahmad's song.</button>
        <button onclick="endSingTogether()">Join in and sing together.</button>
    `;
}

function scene2Stay() {
    gameText.innerHTML = "You stay under the magnolia tree, enjoying the peace and quiet. Ahmad appears with a surprise picnic just for you.";
    choicesDiv.innerHTML = `
        <button onclick="endPicnicUnderTree()">Enjoy the picnic together.</button>
    `;
}

function endGoldenEgg() {
    gameText.innerHTML = "You keep the golden egg, and the chickens lead you to a stunning view of a sunset with Ahmad by your side.";
    choicesDiv.innerHTML = `<p>Ending: "May your love always be filled with the warmth of cherished moments and endless discoveries."</p>`;
}

function endGiveEgg() {
    gameText.innerHTML = "You give the egg back to the chickens, and they lead you to a special place in the garden where you and Ahmad enjoy a private dance.";
    choicesDiv.innerHTML = `<p>Ending: "Every shared dance is a step closer to a lifetime of joy."</p>`;
}

function endHiddenFountain() {
    gameText.innerHTML = "You and Ahmad enjoy the peaceful sound of the water from the hidden fountain, holding hands and sharing stories.";
    choicesDiv.innerHTML = `<p>Ending: "May the tranquility of your love always flow like a gentle stream."</p>`;
}

function endRunToAhmad() {
    gameText.innerHTML = "You run into Ahmad's arms, and he spins you around with joy.";
    choicesDiv.innerHTML = `<p>Ending: "Every embrace is a reminder of the love that surrounds you."</p>`;
}

function endSplashAhmad() {
    gameText.innerHTML = "You splash Ahmad with water, and a playful water fight ensues. Laughter fills the air.";
    choicesDiv.innerHTML = `<p>Ending: "Love is about finding joy in the simplest moments and creating memories that last forever."</p>`;
}

function endListenToSong() {
    gameText.innerHTML = "You listen to Ahmad's song, feeling every note resonate in your heart.";
    choicesDiv.innerHTML = `<p>Ending: "May your love always be in harmony, growing stronger with every shared moment."</p>`;
}

function endSingTogether() {
    gameText.innerHTML = "You join in and sing with Ahmad, and the garden blooms even brighter around you.";
    choicesDiv.innerHTML = `<p>Ending: "Together, your voices create a melody of love that echoes forever."</p>`;
}

function endPicnicUnderTree() {
    gameText.innerHTML = "You enjoy a delightful picnic with Ahmad, surrounded by the beauty of the magnolia tree.";
    choicesDiv.innerHTML = `<p>Ending: "May every shared meal be a feast of love and togetherness."</p>`;
}
