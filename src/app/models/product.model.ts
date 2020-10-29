import { ProductDetail } from './productDetail.model';

export class Product {
    constructor(
        public data?:ProductDetail,
        public per_page?: number,
        public page?: number,
        public total_pages?: number) { }        
}