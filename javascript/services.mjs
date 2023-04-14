const url = "https://fakestoreapi.com/products";
const link = "https://fakestoreapi.com/products/category/jewelery";
const electronicslink = "https://fakestoreapi.com/products/category/electronics";
const mansclothinglink = "https://fakestoreapi.com/products/category/men's clothing";
const womanclothinglink = "https://fakestoreapi.com/products/category/women's clothing";

const shoeslink = "https://api.storerestapi.com/categories";
const tools = "https://api.storerestapi.com/categories/tools-and-hardware"
const furniture = "https://api.storerestapi.com/categories/home-and-furniture"

export default class Products {
    async getProductsJewellery() {
        try {
            let result = await fetch(link);
            if (result.ok) {
                let data = await result.json();
                //console.log(data);
                return data;

            }
        } catch (error) {
            return console.log(error);
        }
    }

    async getProductsAll() {
        try {
            let result = await fetch(url);
            if (result.ok) {
                let data = await result.json();
                // console.log(data);
                return data;

            }
        } catch (error) {
            return console.log(error);
        }
    }

    async getProductsElectronics() {
        try {
            let result = await fetch(electronicslink);
            if (result.ok) {
                let data = await result.json();
                //console.log(data);
                return data;

            }
        } catch (error) {
            return console.log(error);
        }
    }

    async getProductsMans() {
        try {
            let result = await fetch(mansclothinglink);
            if (result.ok) {
                let data = await result.json();
                //console.log(data);
                return data;

            }
        } catch (error) {
            return console.log(error);
        }
    }

    async getProductsWoman() {
        try {
            let result = await fetch(womanclothinglink);
            if (result.ok) {
                let data = await result.json();
                //console.log(data);
                return data;

            }
        } catch (error) {
            return console.log(error);
        }
    }

    async getProductsShoes() {
        try {
            let result = await fetch(shoeslink);
            if (result.ok) {
                let data = await result.json();
                //console.log(data);
                return data;

            }
        } catch (error) {
            return console.log(error);
        }
    }

    async getProductsTools() {
        try {
            let result = await fetch(tools);
            if (result.ok) {
                let data = await result.json();
                console.log(data);
                return data;

            }
        } catch (error) {
            return console.log(error);
        }
    }

    async getProductsFurniture() {
        try {
            let result = await fetch(furniture);
            if (result.ok) {
                let data = await result.json();
                console.log(data);
                return data;

            }
        } catch (error) {
            return console.log(error);
        }
    }
}