import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

class GoodThreadUsage {
  void runTasks() {
    ExecutorService exec = Executors.newCachedThreadPool();
    Runnable task = () -> System.out.println("work");

    // GOOD: passing Runnable directly
    exec.submit(task);
  }

  void startThreadDirectly() {
    Runnable task = () -> System.out.println("work");

    // GOOD: starting a Thread directly (not wrapping for an executor)
    new Thread(task).start();
  }
}
