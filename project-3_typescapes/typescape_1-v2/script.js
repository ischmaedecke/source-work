





























let i = 0;

function myLoop() {               //  create a loop function


  setTimeout(function () {        //  call a 3s setTimeout when the loop is called

    document.documentElement.style.setProperty(`--zindexController`, i);
    i++;                          //  increment the counter

    if (i < 102) {                //  if the counter < 101, call the loop function
      setTimeout(myLoop, 0);
      console.log('hi');
    }
  
    if (i == 102) {
    i = 0;
    let restart;
    clearTimeout(restart);
    restart = setTimeout(myLoop, 100);
    console.log('hello second if');
    }
  }, 100)
}

myLoop();                   //  start the loop




// let i = 0;

// function myLoop() {               //  create a loop function


//   setTimeout(function () {        //  call a 3s setTimeout when the loop is called

//     document.documentElement.style.setProperty(`--zindexController`, i);
//     i++;                          //  increment the counter

//     if (i < 102) {                //  if the counter < 101, call the loop function
//       setTimeout(myLoop, 50);
//       console.log('hi');
//     }     
//   }, 100)
  
// }

// let t=0
// let times = 2
// function repeat (myLoop, times){
//   for (t=0; t<times; t++){
//     myLoop();
//   }
// }

// let restart;
// clearTimeout(restart);
// restart = setTimeout(myLoop, 100);
// console.log('hello second if');


