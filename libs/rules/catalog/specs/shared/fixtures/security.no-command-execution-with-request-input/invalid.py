import subprocess


def run_job():
    command = request.args.get("cmd")
    subprocess.run(command, shell=True)
