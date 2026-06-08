import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

class BadThreadUsage {
  void runTasks() {
    ExecutorService exec = Executors.newCachedThreadPool();
    Runnable task = () -> System.out.println("work");

    // BAD: wrapping Runnable in new Thread before passing to executor
    exec.submit(new Thread(task));
  }

  void scheduleTasks(java.util.concurrent.ScheduledExecutorService scheduler) {
    Runnable task = () -> System.out.println("work");

    // BAD: wrapping Runnable in new Thread before passing to scheduler
    scheduler.schedule(new Thread(task), 1, java.util.concurrent.TimeUnit.SECONDS);
  }
}
