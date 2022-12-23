/**
 * Para no cansar a los renos, Papá Noel quiere dejar el máximo
 * número de regalos haciendo el menor número posible de viajes.
 * Tiene un array de ciudades donde cada elemento es el número de
 * regalos que puede dejar allí. [12, 3, 11, 5, 7]. Por otro lado,
 * el límite de regalos que caben en su saco. Y, finalmente, el
 * número de ciudades máximo que sus renos pueden visitar.
 * Como no quiere dejar una ciudad a medias, si no puede dejar
 * todos los regalos que son de esa ciudad, no deja ninguno allí.
 * Crea un programa que le diga la suma más alta de regalos que
 * podría repartir teniendo en cuenta el máximo de regalos que
 * puede transportar y el número máximo de ciudades que puede visitar:
 */

function getMaxGifts(giftsCities, maxGifts, maxCities) {
  
  let arr =  giftsCities.reduce((a, v) => a.concat(a.map(d => [v].concat(d))), [[]]);
  let sum_cit = [];
  let sum_pro = [];

  for(let i in arr){
    if (arr[i].length <= maxCities)
      sum_cit.push(arr[i]);

  }
  for(let i in sum_cit){
    const initialValue = 0;
    const sumWithInitial = sum_cit[i].reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue
    );
    
    if ( sumWithInitial <= maxGifts)
      sum_pro.push(sumWithInitial);
  }

  sum_pro.sort(function(a, b) { return b - a; });

  return sum_pro[0];
  /*let counter = 0
  let sum = 0

  return giftsCities.reduce((acc, curr, index) => {
      if (acc < curr && curr <= maxGifts) acc = curr
      sum = curr
      counter++
      giftsCities.forEach((secondCity, index2) => {
          if (index2 === index) return acc
          if (counter < maxCities && ((sum + secondCity) <= maxGifts)) {
              sum += secondCity
              counter++
              if (counter <= maxCities) {
                  if (acc < sum && sum <= maxGifts) {
                      acc = sum
                  }
              }
          }
      })
      counter = 0
      return acc
  }, 0)*/
}

const giftsCities = [50]
const maxGifts = 15
const maxCities = 1

// la suma más alta de regalos a repartir
// visitando un máximo de 3 ciudades
// es de 20: [12, 3, 5]

// la suma más alta sería [12, 7, 11]
// pero excede el límite de 20 regalos y tendría
// que dejar alguna ciudad a medias.

console.log(getMaxGifts(giftsCities, maxGifts, maxCities)) // 20