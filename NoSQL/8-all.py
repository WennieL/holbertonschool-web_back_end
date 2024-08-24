#!/usr/bin/env python3
'''
a Python function that lists all documents in a collection:

Prototype: def list_all(mongo_collection):
Return an empty list if no document in the collection
'''


def list_all(mongo_collection):
    """an empty list if no document in the collection"""
    result = []

    for v in mongo_collection.find():
        result.append(v)

    return result
