export enum Rating {
  One = "1",
  Two = "2",
  Three = "3",
  Four = "4",
  Five = "5",
}

export type Product = {
  id: string;
  name: string;
  isFavorite: boolean;
  rating?: Rating;
  imageUrl: string;
  price: number; // in cents
};
