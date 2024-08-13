#!/usr/bin/env python3
'''this module takes a string k and
an int OR float v as arguments and returns a tuple.'''

from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    '''
    type-annotated function - to_kv
    arguments: a string k, an int OR float v
    returns: a tuple.
    '''
    return (k, float(v ** 2))
