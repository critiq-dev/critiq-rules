import re

def test_regex_loop(items):
    for item in items:
        re.compile(item)
