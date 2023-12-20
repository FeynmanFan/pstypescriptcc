let p = require('./Person');
let test = require('tape');

test('Reasonably valued age', function (t) {
    t.plan(5);

    const infant = 0;
    const teenager = 14;
    const adult = 44;
    const elderly = 84;
    const methuselah = 999;

    t.equal(true, p.Person.isValidAge(infant));
    t.equal(true, p.Person.isValidAge(teenager));
    t.equal(true, p.Person.isValidAge(adult));
    t.equal(true, p.Person.isValidAge(elderly));
    t.equal(false, p.Person.isValidAge(methuselah));
});

test ('Person age setter', function(t){
    t.plan(1);

    const happy = new p.Person("Chris", 16);

    // by merit of the fact that we reached here there's no problem yet

    // don't need this anymore because of TypeScript typing
    // t.throws(() => new p.Person("Gracie", "Sixteen"), new Error('That value \'Sixteen\' is not a number.'), "Should throw not a number error");

    t.throws(() => new p.Person("Who?", -99), new Error('That value \'-99\' is not a valid age.'), "Should throw an invalid age error");
}
)
