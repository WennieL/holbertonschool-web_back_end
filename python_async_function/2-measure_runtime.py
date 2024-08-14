#!/usr/bin/env python3
'''module for measure total execution time and returns a float'''

import asyncio
import time
wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int = 10) -> float:
    '''
    function - measures the total execution time
    for wait_n(n, max_delay)
    Arguments: n (integers) and max_delay
    returns: total_time / n.
    '''

    start_time = time.time()
    asyncio.run(wait_n(n, max_delay))
    end_time = time.time()

    total_time = end_time - start_time
    return total_time / n
