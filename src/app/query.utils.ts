export const buildQueryParams = (searchTerm: string) => {
  const params = new URLSearchParams();

  if (searchTerm.trim()) {
    params.append("search", searchTerm.trim());
  }

  return params.toString();
};
