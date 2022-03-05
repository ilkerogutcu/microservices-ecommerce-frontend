export interface IComment {
  id: number;
  productId: number;
  userId: number;
  content: string;
  createdAt: Date;
  rating: number;
  fullName: string;
}

export interface IAddCommentToProduct {
  commentContent: string;
  productRating: number;
}
