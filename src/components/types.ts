type CategoryType = {
  id: string;
  name: string;
  imagePath: string;
  items: ItemType[];
  // Add other fields as needed
};

type ItemType = {
  id?: string | number;
  name: string;
  price: string;
};

export type { CategoryType, ItemType };
export type CategoryProps = {
  category: CategoryType;
};
