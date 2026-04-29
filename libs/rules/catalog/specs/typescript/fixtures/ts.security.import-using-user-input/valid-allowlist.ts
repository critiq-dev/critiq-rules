declare function allowlistModuleName(value: string | undefined): void;

type Request = {
  query: Record<string, string | undefined>;
};

export async function loadPlugin(req: Request) {
  const moduleName = req.query.plugin;

  allowlistModuleName(moduleName);
  return import(moduleName ?? './fallback-plugin');
}
