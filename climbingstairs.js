var climbStairs = function(n) {
   let arr = [0,1]
   for (let i = 2; i < n + 2; i++) { //n + 2 since we start at the 2nd step
       arr[i] = arr[i-1] + arr[i-2]
   }
   return arr[arr.length - 1]


    //if n = 2, then you check i = 2 and i = 3
    //arr[2] = arr[1] + arr[0] = 1
    //arr[3] = arr[2] + arr[1] = 2
    //arr = [0,1,1,2]
    //arr.length = 4
    //arr[arr.length - 1] = arr[3] = 2
};
