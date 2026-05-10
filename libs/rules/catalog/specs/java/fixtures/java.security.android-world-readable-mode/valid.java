class StorageActivity extends Activity {
  void save() throws Exception {
    openFileOutput("tokens.json", Context.MODE_PRIVATE);
  }
}
