// every youtube title must be changed into a title written in it's native language
// this is a simple function that takes a youtube title and returns it in its native language
// problem is that youtube titles are always translated into YT's language withou any option to change it
// we need to copy link of the video


console.log("YT Shorts Remover loaded");

// to test let's load all video urls from the current page

// alert("YT Shorts Remover loaded");






const interval1 = setInterval(() => {
    const shortPanels = document.querySelectorAll("ytd-reel-shelf-renderer")
    const otherElements = document.querySelectorAll("ytd-video-renderer");
    const shorts = document.querySelectorAll("div.reel-video-in-sequence-new.style-scope.ytd-shorts");

    if (shortPanels.length > 0) {
        console.log("Shorts found, removing...");
        shortPanels.forEach(panel => {
            panel.remove();
        });
        console.log("Shorts removed.");
    }

    if (otherElements.length > 0) {
        console.log("checking other elements...");
        otherElements.forEach(element => {
            
            if (element.innerHTML.includes(">SHORTS</div>")) {
                console.log("Shorts found in other elements, removing...");
                element.remove();
            }
        });
    }

    if (shorts.length > 1) {
        const shortsToDelete = Array.from(shorts).slice(1); // Keep the first one, delete the rest
        console.log("Shorts found in divs, removing...");
        shortsToDelete.forEach(short => {
            short.remove();
        });
    }

    // console.log("ping");
}, 1000);
