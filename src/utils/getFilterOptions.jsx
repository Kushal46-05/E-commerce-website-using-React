export const getFilterOptions = (products) => {
  const categories = [...new Set(products.map(p => p.subCategory))];
  const colors = [...new Set(products.map(p => p.color))];
  const sizes = [...new Set(products.map(p => p.size))];
  const styles = [...new Set(products.map(p => p.style))];

  return { categories, colors, sizes, styles };
};
