//          Задание 1
// let name = "Джон";
// let admin;
// admin=name;
// alert(admin);

//          Задание 2
// let a = prompt("Первое число?", 1);
// let b = prompt("Второе число?", 2);

// alert(Number(a) + Number(b)); // 12

//          Задание 3
// for (let i = 1;i<=10;i++) {
//     if (i%2==0) alert("Четное число=>"+i);
// }

//          Задание 4
// let i = 0;
// while (i<3) {
//     alert(`number ${i}!`);
//     i++;
// }

//          Задание 5
// let number = prompt("Введите число больше 100");
// while (number<=100) {
//     number= prompt("Вы ввели число меньшее либо равное 100, попробуйте снова!");
// }

//          Задание 6
let n = prompt("Введите интервал:");
for (let i = 2; i <= n; i++) {
  let check=1;
  for (let j = 2; (j <= i/2)&&(check==1); j=j+1) {
     if (i%j==0) check=0;
    }
    if (check==1) {alert(i);}
}
