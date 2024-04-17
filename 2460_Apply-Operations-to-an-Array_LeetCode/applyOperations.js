/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function(nums) {
     //1. Create a new Array that stores modified values of nums Array
    let ans = new Array(nums.length).fill(0);
//2. Loop to Apply given Opeartion on nums Array
    for (let i = 0; i + 1 < nums.length; ++i) {
        if (nums[i] === nums[i + 1]) {
            nums[i] *= 2;
            nums[i + 1] = 0;
        }
    }
 //3. For each non-zero element num, it assigns num to the corresponding position in the ans array, starting from index 0
    let j = 0;
    for (const num of nums) {
        if (num > 0) {
            ans[j++] = num;
        }
    }

    return ans;
};