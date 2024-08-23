#!/usr/bin/env python3
"""Module for pagination task 0"""
from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """Returns index range in a tuple"""

    start: int = (page - 1) * page_size
    end: int = page * page_size

    return (start, end)
