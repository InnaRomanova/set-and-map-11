"use strict";

/*
ЗАДАЧИ:

1) Создайте массив уникальных событий "events"(события), которые произошли в игре, за все время матча.
2) После окончания матча оказалось что выдача желтой карточки на 64-ой минуте матча была ошибочка. Удалите это свойство из Map.
3) Подсчитайте среднее время появления событий с учетом того что матч идет 90 минут. Напишите результат в консоль: (Пример: Событие в этом матче, появлялось в среднем, раз в 5 мин.)
4) Переберите Map, чтобы получить в консоль результат, какие события матча происходили в первой половине и какие во второй. Результат вывода в консоли должен быть таким:
[ПЕРВАЯ ПОЛОВИНА] 17: GOAL
[ПЕРВАЯ ПОЛОВИНА] 36: Substitution ... и так далее

*/

const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

//1.
/* const events = new Set(gameEvents.values());
 console.log(events);

 const evemtsMap = Array.from(events);
 console.log(evemtsMap);
 */

// короткая запись
const events = Array.from(new Set(gameEvents.values()));
console.log(events);

/*или так
const events = [...new Set(gameEvents.values())];
console.log(events);
*/

///////////////////////////////////////////////////
// 2.
gameEvents.delete(64);
console.log(gameEvents);

////////////////////////////////////////////////////
//3.
const time = 90;
console.log(
  `Событие в этом матче, появлялось в среднем, раз в ${
    time / gameEvents.size
  } минут`
);

///////////////////////////////////////////////////////
//4.
function massiv() {
  for (let [key, value] of gameEvents) {
    if (key < 90 / 2) {
      console.log(`[ПЕРВАЯ ПОЛОВИНА] ${key}: ${value}`);
    } else {
      console.log(`[ВТОРАЯ ПОЛОВИНА] ${key}: ${value}`);
    }
  }
}

massiv();

//то же самое через тернарный оператор
function terMassiv() {
  for (let [key, value] of gameEvents) {
    const half = key <= 45 ? "Первая половина" : "Вторая половина";
    console.log(`${half} ${key}: ${value}`);
  }
}

terMassiv();
