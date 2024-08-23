#!/usr/bin/env python3
"""Nameless module for Python Async Comp Task 0"""
from random import random
import asyncio
from typing import Generator, AsyncGenerator


async def async_generator() -> Generator[float, None, None]:
    """Generator that sleeps 10 times then returns random float"""

    for i in range(10):
        yield random() * 10
        await asyncio.sleep(1)
