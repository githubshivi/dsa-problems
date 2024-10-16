function recursion(num) {
  if (num === 0) {
    return true;
  }
  console.log(num);
  recursion(num - 1);
}

// recursion(10);

// Call stack

function one(){
    two();
    console.log("hello 1")
}

function two(){
    console.log("hello 2")
}

// one();

const factorail = (n)=>{
    if(n===1){
        return 1
    }
    return n*factorail(n-1)
}

console.log(factorail(5))

