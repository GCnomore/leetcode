ex.1  
Input: nums = [2,3,1,1,4]  
Output: true  
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

ex.2  
Input: nums = [3,2,1,0,4]  
Output: false  
Explanation: You will always arrive at index 3 no matter what.  
Its maximum jump length is 0, which makes it impossible to reach the last index.

                                   f(0)
                               1 /     2 \      <-- available jumps at start
                                /         \
                             f(1)        f(2)      <-- index number
                         3 / 2 | 1 \      *1 \     <-- available jumps at index
                      *f(4) *f(3)  f(2)     *f(3)
                      1 /    1 |    1 \
                     true   *f(4)     *f(3)
                               |
                              true

1. Memoize index?
2. Max num to iterate is the value at the index.
