/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function (nums) {
   /**
    * sort the input
    * use two pointers
    * iterate through the array
    * grab "one number" and do two sum to find out the rest
    * skip if "one number" is same as previous "one number"
    * sum up "one number", left , right
    * if the sum is smaller than 0, move left pointer
    * if the sum is greater than 0, move right pointer
    * if sum === found, push to result arr and move left pointer and if moved left pointer has same value as previious, move it again 
    */
 
   nums = nums.sort((a,b)=> a-b);
   result = [];
 
   for (let i = 0; i < nums.length; i++){
     if(i > 0 && nums[i] === nums[i-1]){
       continue;
     }
 
     let left = i + 1;
     let right = nums.length - 1;
 
     while(left < right){
       const sum = nums[i] + nums[left] + nums[right];
 
       if(sum < 0) { left++; }
       if(sum > 0) { right--; }
       if(sum === 0) { 
         result.push([nums[i], nums[left], nums[right]]); 
         left++;

         /**
          * if left pointer lands on same number as previous left point
          * skip till it's not the same
          * 
          * only moving left pointer because:
          * even though right pointer lands on same number, since the left pointer moved, the sum will change and it will trigger one of above conditions
          */
         while(nums[left] === nums[left - 1] && left < right) { 
           left++; 
         }
       }
     }
 
   }
   return result;
 };
 
 console.log(
   threeSum([-2,-2,-2,-2,0,0,0,0,2,2,2,2,2])
 );
 