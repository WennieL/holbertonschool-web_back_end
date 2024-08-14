#!/usr/bin/env python3

'''module for function wait_n and returns a lost of delays'''
from random import random
import asyncio
from typing import List

wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """
    Spawns wait_random n times with a specified max_delay and returns a list
    of all delays in ascending order.

    Args:
        n (int): The number of times to spawn wait_random.
        max_delay (int): The maximum delay value to be passed to wait_random.

    Returns:
        List[float]: A list of delay times (float values) in ascending order.
    """
    delays = []
    for _ in range(n):
        delay = await wait_random(max_delay)

        # Find the correct position to insert the delay without using enumerate
        inserted = False
        index = 0
        while index < len(delays):
            if delay < delays[index]:
                delays.insert(index, delay)
                inserted = True
                break
            index += 1

        if not inserted:
            delays.append(delay)

    return delays
