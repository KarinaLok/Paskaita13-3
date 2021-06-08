'use strict'

var countries = ['Brazilija', 'Meksika', 'Kenija', 'Paragvajus', 'Kuba', 'Austrija'];
var area = [8511965, 197255, 582650, 406750, 110860, 83871];
var people = [211243220, 130222815, 48466928, 6811583, 11390184, 8858775];
var million = 1000000;
var i;
for (i = 0; i < countries.length; i++) {
  console.log('Šalis: ' + countries[i] + ', joje gyvena ' + (people[i] / million).toFixed(2) + ' mln. gyventojų. Valstybės plotas: '
 + area[i] + ' km², plotas tenkantis vienam gyventojui: ' + ((area[i] * million) / people[i]).toFixed(2) + ' m²');
}
