#!/usr/bin/env python3
"""Module for pagination task 0"""
import csv
import math
from typing import List, Tuple, Dict


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """Returns index range in a tuple"""

    start: int = (page - 1) * page_size
    end: int = page * page_size

    return (start, end)


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """Get data from csv"""

        assert isinstance(page, int) and page > 0
        assert isinstance(page_size, int) and page_size > 0

        data = []

        indices = index_range(page, page_size)

        # print(indices[0])
        # print(indices[1])

        start = indices[0]
        end = indices[1]

        with open(self.DATA_FILE) as f:
            reader = csv.reader(f)
            rows = list(reader)

            for i in range(end - start):
                wanted_index = start + i + 1
                if wanted_index >= len(rows):
                    data = []
                    break

                data.append(rows[wanted_index])

        return data

    def get_hyper(self, page: int = 1, page_size: int = 10) -> Dict:
        """Return dict with metadata to create a hyperlink"""

        with open(self.DATA_FILE) as f:
            reader = csv.reader(f)
            rows = list(reader)

        total_rows = len(rows) - 1
        total_pages = math.ceil(total_rows / page_size)

        next_pg = page + 1
        if next_pg > total_pages:
            next_pg = None

        prev_pg = page - 1
        if prev_pg <= 0:
            prev_pg = None

        output = {
            'page_size': page_size,
            'page': page,
            'data': self.get_page(page, page_size),
            'next_page': next_pg,
            'prev_page': prev_pg,
            'total_pages': total_pages
        }

        return output
