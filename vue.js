Vue.component('product',{
    props:{
        premium:{
            type: Boolean,
            required: true
        }
    },
    template: `
    <div class="product">
        <div class="product-image">
                <img v-bind:src="image" v-bind:alt="description">
            </div>
            <div class="product-info">
                <h1>{{ title }}</h1>
                <p v-if="stock > 10">Con stock</p>
                <p v-else-if="stock <= 10 && stock > 0"> Por agotarse</p>
                <p v-else>Sin stock</p>
                <p>Shipping: {{ shipping }} </p>
                // <span v-if="stock">En Venta</span>

                <ul>
                    <li v-for="detail in details"> {{ detail }}</li>
                </ul>

                <ul>
                    <li v-for="feature in features"> {{ feature }} </li>
                </ul>

                <div v-for="(variant, index) in variants" 
                    :key="variant.variantId"
                    class="color-box"
                    :style="{ backgroundColor: variant.variantColor}"
                    @mouseover="updateProduct(index)">    
                </div>

                <button v-on:click="addToCart" 
                    :disable="!stock"
                    :class="{ disabledButton: !stock }" >add to Cart</button>
            </div>
        </div>
        `,
    data() {
        return {
            brand:'Vue Mastery',
            product: 'Socks',
            description: 'Recibiendo productos',
            selectVariant: 0,
            details: ["80% cotton", "20% polyster", "Gender-neutral"],
            features: ["Sin Costura", "Compresión", "Altura", "Material", "Puntera"],
            variants:[
                {
                    variantId:2234,
                    variantColor: "Green",
                    variantImage: 'vmSocks-green.jpg',
                    variantQuantity: 10
                },
                {
                    variantId:2235,
                    variantColor:"Blue",
                    variantImage: 'vmSocks-blue.jpg',
                    variantQuantity: 0
                }
            ]
        }
    },
    methods:{
        addToCart(){
            this.$emit('add-to-cart',this.variants[this.selectVariant].variantId)
            // this.stock -=1
        },
        updateProduct(index){
            this.selectVariant = index
            console.log(index)
        }
    },
    computed: {
        title(){
            return this.brand + " " + this.product
        },
        image(){
            return this.variants[this.selectVariant].variantImage
        },
        stock(){
            return this.variants[this.selectVariant].variantQuantity
        },
        shipping(){
            if(this.premium){
                return "Free"
            }
            return 2.99
        }
    }
})


var app  = new Vue({
    el: '#app',
    data: {
        premium: false,
        cart: []
    },
    methods:{
        updateCart(Id){
            this.cart.push(Id)
        }
    }

})