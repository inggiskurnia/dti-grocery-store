import { useQuery } from '@tanstack/react-query';
import { getProducts } from '@/api/getProducts';
import { Product } from '@/types/product';
import { GET_PRODUCTS } from '@/constants/queryKey';

interface ProductCategoryGroup {
  [key: string]: Product[];
}

interface ProductMap {
  [key: number]: Product;
}

const useProduct = () => {
  const {
    data: products,
    isLoading,
    error,
  } = useQuery<Product[]>({
    queryKey: [GET_PRODUCTS],
    queryFn: getProducts,
  });

  const productMap: ProductMap = products?.reduce((map, product) => {
    map[product.id] = product;
    return map;
  }, {} as ProductMap) || {};

  const categories: string[] = Array.from(new Set(products?.map(product => product.category)));

  const productCategoryGroup: ProductCategoryGroup = categories.reduce((group, category) => {
    group[category] = products?.filter(product => product.category === category) || [];
    return group;
  }, {} as ProductCategoryGroup);

  return { products, productMap, productCategoryGroup, categories, isLoading, error };
};

export default useProduct;
