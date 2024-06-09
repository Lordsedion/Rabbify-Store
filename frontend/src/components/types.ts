export type GlobalType = {
    cart: CartInterface | any
    setCart: (value:any)=>void
    login: boolean
    setLogin: (value:boolean)=>void
    username: string
    setUsername: (value:string)=>void
}

export interface CartInterface {
    img: any,
    name: string,
    price: number,
    category: string
}