#!/usr/bin/env python3
'''This module takes a float
    multiplier as argument and returns a function
    that multiplies a float by multiplier'''
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    '''
    type-annotated function - make_multiplier
    Argument: a float multiplier
    returns: a function that multiplies a float by multiplier.'''
    def multiplier_function(value: float) -> float:
        return value * multiplier
    return multiplier_function
