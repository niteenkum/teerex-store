export interface IProduct {
    id: number,
      imageURL: string,
      name: string,
      type: string,
      price: number,
      currency: string,
      color: string,
      gender: "Men" | "Women" | "Boy" | "Girl",
      quantity: number
}