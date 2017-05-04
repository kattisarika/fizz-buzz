/*the beginner solution*/

/* count from XXX to YYYY*/
for (var i = 1; i < 16; i++) {
    /* check for number divisible by 3 or 5 (using the MOST restrictive conditional first)*/
    if ((i % 3 === 0) && (i % 5 === 0)) {
        console.log('fizzbuzz');
    } else if (i % 5 === 0) {
        console.log('buzz');
    } else if (i % 3 === 0) {
        console.log('fizz');
    } else {
        console.log(i);
    }
}


/* intermediate without elses*/

/* count from XXX to YYYY*/
for (var i = 1; i < 16; i++) {
    var output = i;
    /* check for number divisible by 3 or 5 (using the LEAST restrictive conditional first)*/
    if (i % 3 === 0) {
        output = 'fizz';
    }
    if (i % 5 === 0) {
        output = 'buzz';
    }
    if ((i % 3 === 0) && (i % 5 === 0)) {
        output = 'fizzbuzz';
    }
    console.log(output);
}


/* advanced the least amount of lines*/

/* count from XXX to YYYY*/
for (var i = 1; i < 16; i++) {
    var output = i;
    /* check for number divisible by 3 or 5 (using the LEAST restrictive conditional first)*/

    if (i % 3 === 0) {
        output = 'fizz';
    }
    if (i % 5 === 0) {
        output = 'buzz';
    }
    if ((i % 3 === 0) && (i % 5 === 0)) {
        output = 'fizzbuzz';
    }

    console.log(output);
}
