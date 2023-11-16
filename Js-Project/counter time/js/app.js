
const date= prompt("enter date");
const month= prompt("enter month in txt");
const year= prompt("enter year");
const space = " ";
const endDate = date +space+ month+space + year +space+ " 09:20 AM";

document.getElementById("end-Date").innerText = endDate;
const inputs = document.querySelectorAll("input");

// const clock = () => {

// }

function clock()
{
    const end = new Date(endDate);
    const now = new Date;
    const diff = (end - now) /1000;
    if(diff < 0) return;
    console.log(diff);
    // convert into days
    inputs[0].value = Math.floor(diff / 3600 / 24);
     // convert into Hours
    inputs[1].value = Math.floor((diff / 3600) % 24);
     // convert into Minutes
    inputs[2].value = Math.floor((diff / 60) %60 );
    inputs[3].value = Math.floor((diff) % 60);
}

// initial call
clock();

/**
 *  1 day = 24 hrs
 *  1hr = 60 mins
 *  60 mins = 2600 seconds
 */

setInterval(
    () => {
        clock()
    }
)
