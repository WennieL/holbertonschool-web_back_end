#!/usr/bin/env python3
"""Nameless module for Python Async Comp Task 0"""
from typing import List

async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """Calls async_generator to collect 10 numbers"""

    result = [i async for i in async_generator()]

    return result
