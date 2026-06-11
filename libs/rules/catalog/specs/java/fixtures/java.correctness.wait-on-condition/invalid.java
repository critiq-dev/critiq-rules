import java.util.concurrent.locks.Condition;
import java.util.concurrent.locks.Lock;

class WaitOnConditionInvalid {
    void run(Lock lock) {
        Condition c = lock.newCondition();
        c.wait();
    }
}
