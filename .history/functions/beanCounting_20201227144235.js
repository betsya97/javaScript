function countBs(bs){
    let count = 0;
    for(let i = 0; i <= bs.length()-1;i++){
        if(bs[i] == 'b'){
            count++;
        }
    }
    
    return;
} 
function countChars(word,target){

} 

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4