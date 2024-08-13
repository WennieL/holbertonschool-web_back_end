#!/usr/bin/env python3
'''This module takes
    a list input_list of floats and
    returns sum as a float'''
from typing import List


def sum_list(input_list: List[float]) -> float:
    '''
    type-annotated function - sum_list
    arguments:  list input_list of floats
    returns: sum as a float.'''
    return sum(input_list)
