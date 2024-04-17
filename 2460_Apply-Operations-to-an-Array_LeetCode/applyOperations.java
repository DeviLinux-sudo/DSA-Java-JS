class Solution {
    public int[] applyOperations(int[] nums) {
        //1. Create a new Array that stores modified values of nums Array
        int[] ans = new int[nums.length]; 
        //2. Loop to Apply given Opeartion on nums Array
        for (int i = 0; i + 1 < nums.length; ++i)
      if (nums[i] == nums[i + 1]) {
        nums[i] *= 2;
        nums[i + 1] = 0;
      }
      //3. For each non-zero element num, it assigns num to the corresponding position in the ans array, starting from index 0
       int i = 0;
for (final int num : nums)
   if (num > 0)
     ans[i++] = num;
 return ans;

    }
}
