// // code your solution here
function saturdayFun(activity = "roller-skate"){
     return `This Saturday, I want to ${activity}!`;
}
saturdayFun();
saturdayFun("bathe my dog!");

//second function
function mondayWork(activity = "go to the office"){
     return `This Monday, I will ${activity}.`;
}
mondayWork();
mondayWork("work from home");

function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
        return `You are ${flair}${adjective}${flair}!`;
    };
}


console.log(wrapAdjective()()); 
console.log(wrapAdjective("*")("a hard worker")); 
console.log(wrapAdjective("||")("a dedicated programmer")); 