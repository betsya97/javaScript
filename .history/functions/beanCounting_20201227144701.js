
function countChar(word,target){
    let count = 0;
    for(let i = 0; i <= word.length-1;i++){
        if(word[i] == target){
            count++;
        }
    }
} 
function countBs(bs){
    return countChar(bs,"B");
} 


console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4