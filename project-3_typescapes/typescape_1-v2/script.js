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