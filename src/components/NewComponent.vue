<template>
    <section class="container mt-4 mb-4">
        <div class="cateDiv" style="">
            <h3 class="mr-4" style="color: white;">{{cateName}}</h3>
            <span class="">See all <i class="fa fa-arrow-right"></i></span>
        </div>
        <div class="prevNextDiv">
            <button class="prevBtn btn btn-light">Prev</button>
            <button class="nextBtn btn btn-light">Next</button>
        </div>
        <div class="proContainerDiv">
            <div v-for="(product, index) in productData" :key="index" class="aproductDiv m-3">
                <div class="proImageDiv mb-1">
                    <img v-if="!loading" :src="product.image" style="width: 100%; height: 100%" alt="">
                    <b-skeleton size="is-large" width="100%" height="180px" position="is-centered" :active="loading"></b-skeleton>
                </div>
                <div class="proTiPrRaDiv">
                    <b-skeleton size="is-large" width="" height="" :count='3' position="is-centered" :active="loading"></b-skeleton>
                    <div style="height: 67px; color: #FFFFFF;">
                        <h5 v-if="!loading" id="title">{{product.title.slice(0,15)}}...</h5>
                        <p v-if="!loading" id="price">#{{product.price}}</p>
                        <span v-if="!loading" id="ratings"><b-rate v-model="product.rating.rate" :icon-pack="'fa'" :icon="'star'" :max="5" :size="'5'" :rtl="false" :spaced="true" :custom-text="'(' + product.rating.count +')'" :disabled="true"></b-rate></span>
                    </div>
                    <div class="text-center">
                        <router-link :to="`/product/${product.id}`" v-if="!loading" class="btn btn-danger">ADD TO CART</router-link>
                    </div>
                </div>
            </div>
            <div v-if="loading" class="aproductDiv m-3">
                <div class="proImageDiv mb-1">
                    <img v-if="!loading" src="" style="width: 100%; height: 100%" alt="">
                    <b-skeleton size="is-large" width="100%" height="180px" position="is-centered" :active="loading"></b-skeleton>
                </div>
                <div class="proTiPrRaDiv">
                    <b-skeleton size="is-large" width="" height="" :count='3' position="is-centered" :active="loading"></b-skeleton>
                    <div style="height: 67px; color: #FFFFFF;">
                        <h5 v-if="!loading" id="title"></h5>
                        <p v-if="!loading" id="price"></p>
                        <p v-if="!loading" id="ratings"></p>
                    </div>
                    <div>
                        <button v-if="!loading" class="btn btn-danger">Add to Cart</button>
                    </div>
                </div>
            </div>
            <div v-if="loading" class="aproductDiv m-3">
                <div class="proImageDiv mb-1">
                    <img v-if="!loading" src="" style="width: 100%; height: 100%" alt="">
                    <b-skeleton size="is-large" width="100%" height="180px" position="is-centered" :active="loading"></b-skeleton>
                </div>
                <div class="proTiPrRaDiv">
                    <b-skeleton size="is-large" width="" height="" :count='3' position="is-centered" :active="loading"></b-skeleton>
                    <div style="height: 67px; color: #FFFFFF;">
                        <h5 v-if="!loading" id="title"></h5>
                        <p v-if="!loading" id="price"></p>
                        <p v-if="!loading" id="ratings"></p>
                    </div>
                    <div>
                        <button v-if="!loading" class="btn btn-danger">Add to Cart</button>
                    </div>
                </div>
            </div>
            <div v-if="loading" class="aproductDiv m-3">
                <div class="proImageDiv mb-1">
                    <img v-if="!loading" src="" style="width: 100%; height: 100%" alt="">
                    <b-skeleton size="is-large" width="100%" height="180px" position="is-centered" :active="loading"></b-skeleton>
                </div>
                <div class="proTiPrRaDiv">
                    <b-skeleton size="is-large" width="" height="" :count='3' position="is-centered" :active="loading"></b-skeleton>
                    <div style="height: 67px; color: #FFFFFF;">
                        <h5 v-if="!loading" id="title"></h5>
                        <p v-if="!loading" id="price"></p>
                        <p v-if="!loading" id="ratings"></p>
                    </div>
                    <div>
                        <button v-if="!loading" class="btn btn-danger">ADD TO CART</button>
                    </div>
                </div>
            </div>
            <div v-if="loading" class="aproductDiv m-3">
                <div class="proImageDiv mb-1">
                    <img v-if="!loading" src="" style="width: 100%; height: 100%" alt="">
                    <b-skeleton size="is-large" width="100%" height="180px" position="is-centered" :active="loading"></b-skeleton>
                </div>
                <div class="proTiPrRaDiv">
                    <b-skeleton size="is-large" width="" height="" :count='3' position="is-centered" :active="loading"></b-skeleton>
                    <div style="height: 67px; color: #FFFFFF;">
                        <h5 v-if="!loading" id="title"></h5>
                        <p v-if="!loading" id="price"></p>
                        <p v-if="!loading" id="ratings"></p>
                    </div>
                    <div>
                        <button v-if="!loading" class="btn btn-danger">Add to Cart</button>
                    </div>
                </div>
            </div>
            <div v-if="loading" class="aproductDiv m-3">
                <div class="proImageDiv mb-1">
                    <img v-if="!loading" src="" style="width: 100%; height: 100%" alt="">
                    <b-skeleton size="is-large" width="100%" height="180px" position="is-centered" :active="loading"></b-skeleton>
                </div>
                <div class="proTiPrRaDiv">
                    <b-skeleton size="is-large" width="" height="" :count='3' position="is-centered" :active="loading"></b-skeleton>
                    <div style="height: 67px; color: #FFFFFF;">
                        <h5 v-if="!loading" id="title"></h5>
                        <p v-if="!loading" id="price"></p>
                        <p v-if="!loading" id="ratings"></p>
                    </div>
                    <div>
                        <button v-if="!loading" class="btn btn-danger">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

import { GetElectronicsProducts, GetJeweleryProducts, GetMenClothingProducts, GetWomenClothingProducts } from '@/Service/getHttpData'

export default {
    data() {
        return {
            loading: true,
            productData: [],
        }
    },
    props: ["fechDataUrl", "cateName"],
    components: {

    },
    mounted() {
        
        setTimeout  (() => {
            console.log(this.fechDataUrl);
            this.fechDataUrl()
            .then(res => {
                console.log(res.data);
                this.productData = res.data
                this.loading = !this.loading;
            })

        }, 3 * 1000)
    }
}
</script>

<style>
    .cateDiv{
        border-bottom: 3px solid #474747;
        width: max-content;
        display: flex;
        align-content: center;
        margin-bottom: 20px;
    }
    .proContainerDiv{
        width: 100%;
        /* overflow-x: scroll; */
        display: flex;
    }
    .prevNextDiv{
        width: 100%;
        display: flex;
        justify-content: space-between;
        
    }
    .aproductDiv{
        min-width: 200px;
        max-width: 200px;
        height: 300px;
        background-color: #474747;
        padding: 5px;
        
    }
    .proImageDiv{
        width: 100%;
        height: 180px;
    }
    .proTiPrRaDiv{
        width: 100%;

    }
    .prevBtn, .nextBtn{
    }
</style>