import subprocess

def run_cmd(cmd):
    return subprocess.run(["bash", "-lc", cmd], shell=False)
