export interface ICategory {
  id: string;
  parentId: string;
  name: string;
  isActive: boolean;
  subCategories: ICategory[];
}
