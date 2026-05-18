function handleSave() {
  console.log('save');
}

export function SaveButton() {
  return <button onClick={handleSave}>Save</button>;
}
