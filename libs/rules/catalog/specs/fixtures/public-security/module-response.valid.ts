async function handler(route, res) {
  const moduleName = allowedModules.get(route);

  if (moduleName) {
    await import(moduleName);
  }

  res.send(safeHtml);
}

