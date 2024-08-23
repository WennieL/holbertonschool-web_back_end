#!/usr/bin/env python3
"""Nameless module for Python Async Comp Task 2"""
from asyncio import gather
import time
from typing import List

async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """I don't know what's happening"""

    start_time = time.time()

    await gather(async_comprehension(),
                 async_comprehension(),
                 async_comprehension(),
                 async_comprehension())

    end_time = time.time()
    elapsed_time = end_time - start_time

    return elapsed_time
