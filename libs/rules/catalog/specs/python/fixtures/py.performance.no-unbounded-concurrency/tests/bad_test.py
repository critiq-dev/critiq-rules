import asyncio

def run(items):
    return asyncio.gather(items.map(task))
