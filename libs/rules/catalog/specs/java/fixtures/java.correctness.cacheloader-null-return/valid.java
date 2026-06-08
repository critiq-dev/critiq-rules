import com.google.common.cache.CacheLoader;

class SafeLoader extends CacheLoader<String, String> {
  public String load(String key) {
    return "cached:" + key;
  }
}
