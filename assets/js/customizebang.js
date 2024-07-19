const funnywords = [
    "nerd",
    "real boy",
    "minecrafter",
    "theatre kid",
    "badass",
    "motorcycle",
    "cheese",
    // "pants",
    "lobster",
    "bear",
    "fluffly cloud",
    // "sniper",
    // "superweapon",
    "pink elephant",
    "wizard",
    // "girl's girl",
    "voices",
    // "cracker",
    "nutcracker",
    // "cabbages",
    // "last laugh",
    "octopus",
    "fan",
    "air conditioner",
    // "machine",
    // "mf",
    // "barrel",
    // "butcher",
    // "asshole",
    // "gunslinger",
    // "cowboy",
    "pilot",
    "kitchen sink",
    // "beast",
    // "waste of time",
    // "winner",
    // "champions",
    // "chicken dinner",
    "hedgehog",
    "trainwreck",
    // "procrstinator",
    // "master",
    "boss",
    "raisin ",
    "captain",
    "goblin",
    "munchkin",
    "bird",
    "girliepop",
    "father",
    "mother",
    "law",
    "senate",
    "beginning",
    "end",
    // "final boss",
]

// const words = [
//     "human",
//     "developer",
//     "artist",
//     "christian",
//     "engineer",
//     "entreprenuer",
//     "legend.",
// ]
const bang = document.getElementById("swap")

//let currentIndex = 0

function randomizeWord(evt) {
    const randomIndex = Math.floor(Math.random() * funnywords.length)

    const randomWord = funnywords[randomIndex]

    evt.currentTarget.textContent = randomWord
}

if (bang != null) {
    bang.addEventListener("click", randomizeWord)
}

// function nextWord(bang) {
//     // bang.classList.remove(words[currentIndex])
//     currentIndex += 1 // Cycle through items
//     // bang.classList.add(words[currentIndex])
//     if (currentIndex >= words.length) {
//         if (bang != null) {
//             bang.addEventListener("click", randomizeWord)
//         }
//     } else {
//         bang.textContent = words[currentIndex]
//         // bang.animate(
//         //     [
//         //         {
//         //             // from
//         //             opacity: 0,
//         //         },
//         //         {
//         //             // to
//         //             opacity: 1,
//         //         },
//         //     ],
//         //     2000
//         // )
//         setTimeout(nextWord, 1000, bang)
//     }
// }
// if (bang != null) {
//     bang.textContent = words[0]
//     // bang.classList.add(words[0])
// }
// setTimeout(nextWord, 1000, bang)
