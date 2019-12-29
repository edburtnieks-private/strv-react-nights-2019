export const formatProduct = (data) => ({
  id: data.id,
  ...data.attributes,
});
