#!/usr/bin/env python3
'''This module takes a list mxd_lst of integers
and returns sum as a float '''
from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    '''
    type-annotated function - sum_mixed_list
    Arguments: a list mxd_lst of integers and floats
    returns their sum as a float.'''
    return float(sum(mxd_lst))
