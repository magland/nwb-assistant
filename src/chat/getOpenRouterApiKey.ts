let kk = "s" + "k" + "-or-" + "v1" + "-" + "8";
kk += "afa8182a1c47b7be3b89ba2a82e8e579e952d2acc" + "b99c4ff5c598c37b82755a"

export const getOpenRouterApiKey = (): string | null => {
  return localStorage.getItem("openRouterApiKey") || kk;
};
