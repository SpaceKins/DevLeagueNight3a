// 1. Convert the following `for` loops to `while` loops
//
// 2. Replace Han with per-movie Wookie noises using `if...else if...else`:
// http://www.buzzfeed.com/jessicamisener/the-10-best-chewbacca-quotes


var starWarsMovies = ['anh', 'tesb', 'rotj', 'tpm', 'aotc', 'rots', 'tfa'];

function sortChronologically() {
    var i = 0;
    while (i < 3) {
        var tmp = starWarsMovies[i];
        starWarsMovies[i] = starWarsMovies[i + 3];
        starWarsMovies[i + 3] = tmp;

        i++;
    }
}

function chewie() {
    var i = 0;
    while (i < starWarsMovies.length) {
        if (starWarsMovies[i] === 'tesb' || starWarsMovies[i] === 'aotc') {
            console.log('GGWWWRGHH');
        } else {
            console.log('Laugh it up fuzzball!');
        }

        i++;
    }
}

/*function sortChronologically() {
    for (var i = 0; i < 3; i++) {
        var tmp = starWarsMovies[i];
        starWarsMovies[i] = starWarsMovies[i + 3];
        starWarsMovies[i + 3] = tmp;    
    }
}
​
function chewie() {
    for (var i = 0; i < starWarsMovies.length; i++) {
        if (starWarsMovies[i] === 'tpm' || starWarsMovies[i] === 'aotc') {
            console.log('Which way to Kashyyyk?');
        } else {
            console.log('Laugh it up fuzzball!');
        }   
    }   
}

*/

chewie();
sortChronologically();
chewie();