ex.  
Input: n = 12  
Output: 3  
Explanation: 12 = 4 + 4 + 4

                                f(12)
                         1  /   4 |   9 \      <-- valid square numbers
                           /      |      \
                     f(12-1)   f(12-4)    f(12-9)
                 11 /         8 / \          *3 \     <-- remaining n
             f(11-1)      f(8-1)  f(8-4)        f(3-1)
          10 /           7 /     4 / \             2 \
          ...           ...   f(4-1)  f(4-4)        f(2-1)
                             *3 /                    1 \
                                                     f(1-1)

1. Largest valid square number should be less than n.
2. If n was larger than the example, there will be multiple duplicates of remaining n.
3. Memoize remaining n.
4. This is single dimension.
