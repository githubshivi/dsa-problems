//Without frequency counter approach
//Cause in this method we are having loop inside loop i.e indexOf inside for loop.
function isSquare(arr1,arr2){
    if(arr1.length!==arr2.length) return false;

    for(let i=0; i< arr1.length;i++){
        let index = arr2.indexOf(arr1[i]**2); //Finding the index whether the square of element exist in second array
        if(index ===-1){
            return false
        }

        arr2.splice(index,1) //Remove the elemnt with found index
    }
    return true
}

// console.log(isSquare([1,2,3],[1,9,4]))


//With frequency counter approach

function isSquareWithFrqCounter (arr1,arr2){
    if(arr1.length!==arr2.length) return false;

    const frqCounter1 ={};
    const frqCounter2 = {};

    for(let val of arr1){
        frqCounter1[val] = (frqCounter1[val] || 0) + 1
    }

    for(let val of arr2){
        frqCounter2[val] = (frqCounter2[val] || 0) + 1
    }

    for(let key in frqCounter1){
        if(!(key ** 2 in frqCounter2) || frqCounter1[key]!==frqCounter2[key**2]){
            return false
        }
    }
    return true
    
}

// console.log(isSquareWithFrqCounter([1,2,3],[1,4,9]))


function isValidAnagram(str1,str2){
    if(str1.length ===0 && str2.length===0) return true
    const frqCounter1 = {};
    const frqCounter2 = {};

    for(let val of str1){
        frqCounter1[val] = (frqCounter1[val] || 0)+ 1
    }
    for(let val of str2){
        frqCounter2[val] = (frqCounter2[val] || 0)+ 1
    }

    for(let val in frqCounter1){
        if(!(val in frqCounter2)){
            return false
        }
        if(frqCounter1[val]!==frqCounter2[val]){
            return false
        }
    }
    return true
}

function isValidAnagram2(str1,str2){
    if(str1.length ===0 && str2.length===0) return true
    const frqCounter = {};

    for(let val of str1){
        frqCounter[val] = (frqCounter[val] || 0)+ 1
    }
   
    for(let val of str2){
        if(!frqCounter[val] || frqCounter[val]===0){
            return false
        }else{
            frqCounter[val]--;
        }
        
    }
    return true
}

console.log(isValidAnagram("awesome","aweesom"))