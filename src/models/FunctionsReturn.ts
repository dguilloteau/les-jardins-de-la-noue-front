import { FormItemText, FormItemImage, FormItemQuestion, FormItemList } from "./DtoStructures";


export type FormItemReturn =
    | FormItemText
    | FormItemImage
    | FormItemQuestion
    | FormItemList
    | null