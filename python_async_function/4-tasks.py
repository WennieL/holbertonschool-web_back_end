#!/usr/bin/env python3
"""Nameless module for Python Async Task 1"""
import asyncio
from typing import List

task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """
    Spawns task_wait_random n times with a specified max_delay
    and returns a list of all delays in ascending order.

    Args:
        n (int): The number of tasks to spawn.
        max_delay (int):
          The maximum delay value to be passed to task_wait_random.

    Returns:
        List[float]: A list of delay times (float values) in ascending order.
    """
    tasks = [task_wait_random(max_delay) for _ in range(n)]
    delays = await asyncio.gather(*tasks)
    return sorted(delays)
