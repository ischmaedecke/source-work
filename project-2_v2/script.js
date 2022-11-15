function changeColor (){
    let d = new Date();
    let currentTime = d.getSeconds();
    console.log(currentTime);

    if (currentTime > 29){
        document.getElementsByClassName('.row').style.backgroundColor = 'red';
    }
    else{
        document.getElementsByClassName('.row').style.backgroundColor = 'light-blue';
    }
}
       
// IDEA:
// To create a variable background color change depending on the seconds

