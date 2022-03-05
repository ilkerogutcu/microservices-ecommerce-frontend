export interface IProductCardViewModel{
    id: string;
    name: string;
    brand: string;
    brandId: string;
    thumbnailImageUrl: string;
    shortDescription: string;
    reviewsCount: number;
    ratingAverage: number;
    barcode: string;
    stockQuantity: number;
    salePrice: number;
    listPrice: number;
    isFreeShipping: boolean;
    discountRate: number;
}