var app  = new Vue({
    el: '#app',
    data:{
        product: 'Socks',
        description: 'Recibiendo productos',
        image: 'vmSocks-green.jpg',
        stock: 11,
        onSale: true,
        details: ["80% cotton", "20% polyster", "Gender-neutral"],
        features: ["Sin Costura", "Compresión", "Altura", "Material", "Puntera"],
        variants:[
            {
                variantID:2234,
                variantColor: "Green",
                variantImage: 'vmSocks-green.jpg'
            },
            {
                variantId:2235,
                variantColor:"Blue",
                variantImage: 'vmSocks-blue.jpg'
            }
        ],
        cart: 0
    },
    methods:{
        addToCart(){
            this.cart += 1
            // this.stock -=1
        },
        deltoCart(){
            this.cart -=1
            // this.stock +=1
        },
        updateProduct(variantImage){
            this.image = variantImage
        }
    }
})