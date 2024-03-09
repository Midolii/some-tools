const GlobalParams: Record<string, string> = {};

export const getParams = (key: string) => {
  const { search } = window.location;
  if (!search.startsWith("?")) {
    return "";
  }

  if (!GlobalParams.size) {
    search
      .slice(1)
      .split("&")
      .forEach((kv) => {
        const [k, v] = kv.split("=");
        GlobalParams[k] = v;
      });
  }

  return GlobalParams[key] || "";
};

export const getAllParams = () => {
  return GlobalParams;
};
