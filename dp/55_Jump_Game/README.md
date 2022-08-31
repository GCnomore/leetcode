ex.1  
Input: nums = [2,3,1,1,4]  
Output: true  
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

ex.2  
Input: nums = [3,2,1,0,4]  
Output: false  
Explanation: You will always arrive at index 3 no matter what.  
Its maximum jump length is 0, which makes it impossible to reach the last index.

validIndex:

1. Can directly reach the end.
2. Can jump to next index that can reach the end.

```
      [  2,  3,  1,  1,  4  ]
                        (4) last index will be always a valid index     valid
                    (3) + 1 is greater or equal to the end index        valid
                (2) + 1 can reach index 3 which is a valid index        valid
            (1) + 3 can either reach the end or valid indexes           valid
        (0) + 2 can reach valid indexex                                 valid
```

1. Loop from the end of the array and update the valid index number.
2. Current index + current value should be greater or equal to either the last index or the valid index.
