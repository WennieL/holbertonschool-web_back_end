#!/usr/bin/env python3
'''
 a Python script that provides some stats about Nginx logs stored in MongoDB:

Database: logs
Collection: nginx
Display (same as the example):
first line: x logs where x is the number of documents in this collection
second line: Methods:
5 lines with the number of documents with the method = ["GET", "POST", "PUT", "PATCH", "DELETE"] in this order (see example below - warning: it’s a tabulation before each line)
one line with the number of documents with:
method=GET
path=/status
'''
from pymongo import MongoClient

if __name__ == "__main__":
    client = MongoClient('mongodb://127.0.0.1:27017')
    co = client.logs.nginx

    methods = {
        'GET': 0,
        'POST': 0,
        'PUT': 0,
        'PATCH': 0,
        'DELETE': 0
    }
    status_count = 0
    for v in co.find():
        if 'method' in v:
            if v['method'] in methods:
                methods[v['method']] = methods[v['method']] + 1

            if v['method'] == 'GET' and 'path' in v and v['path'] == '/status':
                status_count = status_count + 1

    print("{0} logs".format(co.count_documents({})))
    print("Methods:")
    print("\tmethod GET: {0}".format(methods['GET']))
    print("\tmethod POST: {0}".format(methods['POST']))
    print("\tmethod PUT: {0}".format(methods['PUT']))
    print("\tmethod PATCH: {0}".format(methods['PATCH']))
    print("\tmethod DELETE: {0}".format(methods['DELETE']))
    print("{0} status check".format(status_count))
