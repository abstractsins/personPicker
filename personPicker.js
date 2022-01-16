const pick = () => {
    const item = 'Ikea 3 drawer stand'
    const people = [
        'Rose W' 
    ];
    const entrants = people.length;

    const n = Math.floor(Math.random() * entrants);
    for (let i = 0; i < entrants; i++) {

            // CONSOLE TESTING
            // console.log(i);
    };

    const winner = people[n];
    console.log(`\n\nSTART----------------------------------------\n\n@}===={{ PARTICULAR PERSON PICKER }}===={@\nVersion 2.0`)
    console.log(`\nDrawing from the following names: ${people}`)
    console.log(`\n\nThe ${item} goes to... `);

    // OUTPUT INFORMATION
    setTimeout(() => {
        console.log(`...${winner}. \n\n`);
      }, 4500);
    setTimeout(() => {
        console.log(`Congratulations, ${winner}!\nDM me to arrange pickup.\n\n------------------------------------------END\n\n`)
    }, 6000);
}

// clear the screen
const lines = process.stdout.getWindowSize()[1];
for(var i = 0; i < lines; i++) {
    console.log('\r\n');
}

// RUN PROGRAM
pick();

/*THIS SPACE INTENTIONALLY LEFT BLANK // DO NOT WRITE BELOW THIS LINE */
//
//
//
//
//
//
//
//
/* OK */