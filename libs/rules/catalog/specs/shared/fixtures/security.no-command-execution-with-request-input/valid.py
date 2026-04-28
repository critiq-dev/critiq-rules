import subprocess


def run_job():
    subprocess.run(["uptime"], check=True)
