#!/usr/bin/env python3
'''this module returns a asyncio task'''

import asyncio

wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    '''
    a function - task_wait_random:
      takes an integer max_delay and returns a asyncio.
    '''
    task = asyncio.create_task(wait_random(max_delay))

    return task
