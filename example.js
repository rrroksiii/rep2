"use strict";

/*
function camelize(str) {
	var arr = str.split('-');
	var arr1 = arr.slice(1);
	var arr0 = arr[0];
	for (var i = 0; i < arr1.length; i++) {
		arr0.push(arr1[i]);

		//arr[i].charAt(0).toUpperCase();
		
	}


	console.log(arr0.join(''));
}


camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';


/*learnJS-----Добавить класс в строку------
var obj = {
  className: 'open menu'
}

function addClass(obj, cls) {
	var arr = obj.className.split(' ');
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] == cls) return;
	}
	arr.push(cls);
	obj.className = arr.join(' ');
}

addClass(obj, 'new'); // obj.className='open menu new'
addClass(obj, 'open'); // без изменений (класс уже существует)
addClass(obj, 'me'); // obj.className='open menu new me'

alert( obj.className ); // "open menu new me"
*/


/* Problem 11
var grid = [ //20x20
    [08,02,22,97,38,15,00,40,00,75,04,05,07,78,52,12,50,77,91,08],
    [49,49,99,40,17,81,18,57,60,87,17,40,98,43,69,48,04,56,62,00],
    [81,49,31,73,55,79,14,29,93,71,40,67,53,88,30,03,49,13,36,65],
    [52,70,95,23,04,60,11,42,69,24,68,56,01,32,56,71,37,02,36,91],
    [22,31,16,71,51,67,63,89,41,92,36,54,22,40,40,28,66,33,13,80],
    [24,47,32,60,99,03,45,02,44,75,33,53,78,36,84,20,35,17,12,50],
    [32,98,81,28,64,23,67,10,26,38,40,67,59,54,70,66,18,38,64,70],
    [67,26,20,68,02,62,12,20,95,63,94,39,63,08,40,91,66,49,94,21],
    [24,55,58,05,66,73,99,26,97,17,78,78,96,83,14,88,34,89,63,72],
    [21,36,23,09,75,00,76,44,20,45,35,14,00,61,33,97,34,31,33,95],
    [78,17,53,28,22,75,31,67,15,94,03,80,04,62,16,14,09,53,56,92],
    [16,39,05,42,96,35,31,47,55,58,88,24,00,17,54,24,36,29,85,57],
    [86,56,00,48,35,71,89,07,05,44,44,37,44,60,21,58,51,54,17,58],
    [19,80,81,68,05,94,47,69,28,73,92,13,86,52,17,77,04,89,55,40],
    [04,52,08,83,97,35,99,16,07,97,57,32,16,26,26,79,33,27,98,66],
    [88,36,68,87,57,62,20,72,03,46,33,67,46,55,12,32,63,93,53,69],
    [04,42,16,73,38,25,39,11,24,94,72,18,08,46,29,32,40,62,76,36],
    [20,69,36,41,72,30,23,88,34,62,99,69,82,67,59,85,74,04,36,16],
    [20,73,35,29,78,31,90,01,74,31,49,71,48,86,81,16,23,57,05,54],
    [01,70,54,71,83,51,54,69,16,92,33,48,61,43,52,01,89,19,67,48],
], 
    biggest = 0;
    
//Loop rows 
for(var r = 0, nr = grid.length; r < nr; r++) {
    //Loop columns
    for(var c = 0, limit = nr - 3; c < nr; c++) {
        //Horizontal
        if(c < limit) {
            var n = grid[r][c] * grid[r][c + 1] * grid[r][c + 2] * grid[r][c + 3];
            if(n > biggest) biggest = n;
        }
        //Vertical
        if(r < limit) {
            var n = grid[r][c] * grid[r + 1][c] * grid[r + 2][c] * grid[r + 3][c];
            if(n > biggest) biggest = n;
        }
        //Diagonal [\]
        if(c < limit && r < limit) {
            var n = grid[r][c] * grid[r + 1][c + 1] * grid[r + 2][c + 2] * grid[r + 3][c + 3];
            if(n > biggest) biggest = n;
        }
        //Diagonal [/]
        if(c > 3 && r < limit) {
            var n = grid[r][c] * grid[r + 1][c - 1] * grid[r + 2][c - 2] * grid[r + 3][c - 3];
            if(n > biggest) biggest = n;
        }
    } 
}
console.log(biggest);
*/

//problem 10
/*(function euler010() {
  var maxPrimeValue = 2000000;
  var i = maxPrimeValue;
  var sum = 0;

  // while primes is less than the sought after number
  while (i >= 2) {
    if (isPrime(i) === true) {
      sum += i;
    }

    i--;
  }

  function isPrime(n) {
    var x = Math.floor(Math.sqrt(n));
    var j = x;

    while (j >= 2) {
      if (n % j === 0) {
        return false;
      }
      j--;
    }

    return true;
  }

  console.log(sum);
  return sum;
}());*/
/*
var answ = 0,
	start = 1000000,
	stop = 1000100;
for (var i = start; i < stop; i++) {
	var found = true;
	for (var j = 2; j < i; j++) {
		if (i%j == 0) {
			found = false;
			break;
		}
	}
	if (found) {
		answ += i;
		
    }
    while (stop <= 2000000){
    	start += 100;
        stop += 100;
    }
}
console.log(answ);*/
//37550402024


/*Problem 9
var a, b, c;

for (a = 1; a <= 1000; a++) {
	for (b = 1; b <= 1000; b++) {
		for (c = 1; c <= 1000; c++) {
			if (a < b && b < c && (Math.pow(a,2) + Math.pow(b,2)) == Math.pow(c,2)) {
				var rez = a+b+c;
		  		if (rez == 1000) {
		  			console.log(a*b*c);
		  		}
			}
		}
	}
}
*/

/*
Problem 8
function largestProduct(digits, consecutive) {
    var r = 0, out = 0,
        start = 0, end = consecutive,
        size = digits.length - consecutive,
        i, d, ld, p, j;

    for (i = 0; i < size; i += 1) {
        d = digits.slice(start + i, end + i);
        ld = d[end - 1];
        if (ld === 0) {
            i += consecutive - 1;
            continue;
        }
        if (ld > out) {
            p = 1;
            for (j = 0; j < consecutive; j += 1) {
                p *= d[j];
            }
            if (p > r) {
                r = p;
            }
        }
        out = d[0];
    }
    
    return r;
}

var digits = [7, 3, 1, 6, 7, 1, 7, 6, 5, 3, 1, 3, 3, 0, 6, 2, 4, 9, 1, 9,
              2, 2, 5, 1, 1, 9, 6, 7, 4, 4, 2, 6, 5, 7, 4, 7, 4, 2, 3, 5,
              5, 3, 4, 9, 1, 9, 4, 9, 3, 4, 9, 6, 9, 8, 3, 5, 2, 0, 3, 1,
              2, 7, 7, 4, 5, 0, 6, 3, 2, 6, 2, 3, 9, 5, 7, 8, 3, 1, 8, 0,
              1, 6, 9, 8, 4, 8, 0, 1, 8, 6, 9, 4, 7, 8, 8, 5, 1, 8, 4, 3,
              8, 5, 8, 6, 1, 5, 6, 0, 7, 8, 9, 1, 1, 2, 9, 4, 9, 4, 9, 5,
              4, 5, 9, 5, 0, 1, 7, 3, 7, 9, 5, 8, 3, 3, 1, 9, 5, 2, 8, 5,
              3, 2, 0, 8, 8, 0, 5, 5, 1, 1, 1, 2, 5, 4, 0, 6, 9, 8, 7, 4,
              7, 1, 5, 8, 5, 2, 3, 8, 6, 3, 0, 5, 0, 7, 1, 5, 6, 9, 3, 2,
              9, 0, 9, 6, 3, 2, 9, 5, 2, 2, 7, 4, 4, 3, 0, 4, 3, 5, 5, 7,
              6, 6, 8, 9, 6, 6, 4, 8, 9, 5, 0, 4, 4, 5, 2, 4, 4, 5, 2, 3,
              1, 6, 1, 7, 3, 1, 8, 5, 6, 4, 0, 3, 0, 9, 8, 7, 1, 1, 1, 2,
              1, 7, 2, 2, 3, 8, 3, 1, 1, 3, 6, 2, 2, 2, 9, 8, 9, 3, 4, 2,
              3, 3, 8, 0, 3, 0, 8, 1, 3, 5, 3, 3, 6, 2, 7, 6, 6, 1, 4, 2,
              8, 2, 8, 0, 6, 4, 4, 4, 4, 8, 6, 6, 4, 5, 2, 3, 8, 7, 4, 9,
              3, 0, 3, 5, 8, 9, 0, 7, 2, 9, 6, 2, 9, 0, 4, 9, 1, 5, 6, 0,
              4, 4, 0, 7, 7, 2, 3, 9, 0, 7, 1, 3, 8, 1, 0, 5, 1, 5, 8, 5,
              9, 3, 0, 7, 9, 6, 0, 8, 6, 6, 7, 0, 1, 7, 2, 4, 2, 7, 1, 2,
              1, 8, 8, 3, 9, 9, 8, 7, 9, 7, 9, 0, 8, 7, 9, 2, 2, 7, 4, 9,
              2, 1, 9, 0, 1, 6, 9, 9, 7, 2, 0, 8, 8, 8, 0, 9, 3, 7, 7, 6,
              6, 5, 7, 2, 7, 3, 3, 3, 0, 0, 1, 0, 5, 3, 3, 6, 7, 8, 8, 1,
              2, 2, 0, 2, 3, 5, 4, 2, 1, 8, 0, 9, 7, 5, 1, 2, 5, 4, 5, 4,
              0, 5, 9, 4, 7, 5, 2, 2, 4, 3, 5, 2, 5, 8, 4, 9, 0, 7, 7, 1,
              1, 6, 7, 0, 5, 5, 6, 0, 1, 3, 6, 0, 4, 8, 3, 9, 5, 8, 6, 4,
              4, 6, 7, 0, 6, 3, 2, 4, 4, 1, 5, 7, 2, 2, 1, 5, 5, 3, 9, 7,
              5, 3, 6, 9, 7, 8, 1, 7, 9, 7, 7, 8, 4, 6, 1, 7, 4, 0, 6, 4,
              9, 5, 5, 1, 4, 9, 2, 9, 0, 8, 6, 2, 5, 6, 9, 3, 2, 1, 9, 7,
              8, 4, 6, 8, 6, 2, 2, 4, 8, 2, 8, 3, 9, 7, 2, 2, 4, 1, 3, 7,
              5, 6, 5, 7, 0, 5, 6, 0, 5, 7, 4, 9, 0, 2, 6, 1, 4, 0, 7, 9,
              7, 2, 9, 6, 8, 6, 5, 2, 4, 1, 4, 5, 3, 5, 1, 0, 0, 4, 7, 4,
              8, 2, 1, 6, 6, 3, 7, 0, 4, 8, 4, 4, 0, 3, 1, 9, 9, 8, 9, 0,
              0, 0, 8, 8, 9, 5, 2, 4, 3, 4, 5, 0, 6, 5, 8, 5, 4, 1, 2, 2,
              7, 5, 8, 8, 6, 6, 6, 8, 8, 1, 1, 6, 4, 2, 7, 1, 7, 1, 4, 7,
              9, 9, 2, 4, 4, 4, 2, 9, 2, 8, 2, 3, 0, 8, 6, 3, 4, 6, 5, 6,
              7, 4, 8, 1, 3, 9, 1, 9, 1, 2, 3, 1, 6, 2, 8, 2, 4, 5, 8, 6,
              1, 7, 8, 6, 6, 4, 5, 8, 3, 5, 9, 1, 2, 4, 5, 6, 6, 5, 2, 9,
              4, 7, 6, 5, 4, 5, 6, 8, 2, 8, 4, 8, 9, 1, 2, 8, 8, 3, 1, 4,
              2, 6, 0, 7, 6, 9, 0, 0, 4, 2, 2, 4, 2, 1, 9, 0, 2, 2, 6, 7,
              1, 0, 5, 5, 6, 2, 6, 3, 2, 1, 1, 1, 1, 1, 0, 9, 3, 7, 0, 5,
              4, 4, 2, 1, 7, 5, 0, 6, 9, 4, 1, 6, 5, 8, 9, 6, 0, 4, 0, 8,
              0, 7, 1, 9, 8, 4, 0, 3, 8, 5, 0, 9, 6, 2, 4, 5, 5, 4, 4, 4,
              3, 6, 2, 9, 8, 1, 2, 3, 0, 9, 8, 7, 8, 7, 9, 9, 2, 7, 2, 4,
              4, 2, 8, 4, 9, 0, 9, 1, 8, 8, 8, 4, 5, 8, 0, 1, 5, 6, 1, 6,
              6, 0, 9, 7, 9, 1, 9, 1, 3, 3, 8, 7, 5, 4, 9, 9, 2, 0, 0, 5,
              2, 4, 0, 6, 3, 6, 8, 9, 9, 1, 2, 5, 6, 0, 7, 1, 7, 6, 0, 6,
              0, 5, 8, 8, 6, 1, 1, 6, 4, 6, 7, 1, 0, 9, 4, 0, 5, 0, 7, 7,
              5, 4, 1, 0, 0, 2, 2, 5, 6, 9, 8, 3, 1, 5, 5, 2, 0, 0, 0, 5,
              5, 9, 3, 5, 7, 2, 9, 7, 2, 5, 7, 1, 6, 3, 6, 2, 6, 9, 5, 6,
              1, 8, 8, 2, 6, 7, 0, 4, 2, 8, 2, 5, 2, 4, 8, 3, 6, 0, 0, 8,
              2, 3, 2, 5, 7, 5, 3, 0, 4, 2, 0, 7, 5, 2, 9, 6, 3, 4, 5, 0];
console.log(largestProduct(digits, 5));
*/

/*	
7 Problem
var answ = [];

for (var i = 2; i <= 150000; i++) {
	var found = true;
	for (var j = 2; j < i; j++) {
		if (i%j == 0) {
			found = false;
			break;
		}
	}
	if (found) {
		answ.push(i);
    }
}
console.log(answ.length);
console.log(answ[10000]);
*/

/*
6 Problem
var rez1 = 0,
	rez2 =0,
	answ = 0;

for (var i = 1; i <= 100; i++) {
	rez1 += Math.pow(i,2);
	rez2 += i;
}
answ = (Math.pow(rez2,2)) - rez1;
console.log(answ);
*/


/*5 Problem
for (var i = 20; i <= 10000000000; i++) {
	var found = true;
	for (var j = 2; j <= 20; j++) {
		if (i%j != 0) {
			found = false;
            break; // stop testing other divisors
		}
	}
	if (found) {
		console.log(i);
		break;
    }
}
*/

/*
4 Problem
function palindromic() {
  var max = 0;
  for(var i = 999; i > 99; i--) {
    for(var k = 999; k > 99; k--) {
      var n = i * k;
      var s = '' + n;
      //console.log(s);
      if (s === s.split("").reverse().join("") && n > max) {
        max = n;
      }
    }
  }
  return max;
}
console.log(palindromic());
*/

/*
3 Задача
var nmb = 600851475143;
for (var i = 10000; i >= 2; i--) {
	if (nmb%i == 0) {
		console.log(i);
	}
}
*/


/* 
2 Задача
Сумма четных чисел Фибоначчи до 4 млн
var Fib = [];
Fib[0] = 0;
Fib[1] = 1;
var n = 300;

for (var j = 2; j < n; j++) { 
	Fib[j] = Fib[j-2] + Fib[j-1];
}

var FibCh = [];
var sum = 0;
for (var i = 0; i < n; i++) {
	if (Fib[i]%2 == 0 && Fib[i]<4000000) {
		FibCh.push(Fib[i]);
	}
}

for (var a = 0; a < FibCh.length; a++) {
	sum = sum + parseInt(FibCh[a]);
}
console.log(FibCh);
console.log(sum);
*/