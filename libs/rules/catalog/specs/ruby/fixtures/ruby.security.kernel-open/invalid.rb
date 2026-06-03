def run(cmd)
  Kernel.open("|#{cmd}")
end
