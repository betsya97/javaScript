
function countChar(word,target){
    let count = 0;
    for(let i = 0; i < word.length;i++){
        if(word[i] == target){
            count++;
        }
    }
    return count;
} 
function countBs(bs){
    return countChar(bs,"B"); //recycle function
} 


console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4