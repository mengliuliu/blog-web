const formatUrl = (url: string) => {
  const env = process.env.NODE_ENV;
  if (env === "development") var baseUrl = "/api";
  else var baseUrl: string = "http://mengliublog.com:3000";
  return baseUrl + url;
};
export { formatUrl };
