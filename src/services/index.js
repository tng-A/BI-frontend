export const resolveBaseUrl = () => {
  const baseUrl = process.env.REACT_APP_BI_BACKEND_URL;
  console.log("baseUrl", baseUrl);
  return baseUrl;
};
