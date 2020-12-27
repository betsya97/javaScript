function countBs(bs){
    let count = 0;
    for(let i = 0; i <= bs.length-1;i++){
        if(bs[i] == 'B'){
            count++;
        }
    }
    
    return count;
} 
function countChar(word,target){
    let count = 0;
    for(let i = 0; i < word.length-1;i++){
        if(word[i] == target){
            count++;
        }
    }
} 

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4