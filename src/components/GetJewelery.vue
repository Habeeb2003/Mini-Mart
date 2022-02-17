<template>
  <!-- <section>
        <div class="card" aria-id="contentIdForA11y3">
            <div
                class="card-header"
                role="button"
                aria-controls="contentIdForA11y3">
                <p class="card-header-title">
                    <template v-if="!loading">Component</template>
                    <b-skeleton size="is-large" :active="loading"></b-skeleton>
                </p>
            </div>
            <div class="card-content">
                <div class="content">
                    <template v-if="!loading">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                        <a>#buefy</a>.
                    </template>
                    <b-skeleton size="is-large" :active="loading" :count="2"></b-skeleton>
                </div>
            </div>
            <footer class="card-footer">
                <a class="card-footer-item">
                    <template v-if="!loading">Save</template>
                    <b-skeleton size="is-large" :active="loading"></b-skeleton>
                </a>
                <a class="card-footer-item">
                    <template v-if="!loading">Edit</template>
                    <b-skeleton size="is-large" :active="loading"></b-skeleton>
                </a>
                <a class="card-footer-item">
                    <template v-if="!loading">Delete</template>
                    <b-skeleton size="is-large" :active="loading"></b-skeleton>
                </a>
            </footer>
        </div>

    </section> -->
    <section id="jewelSect" class="">
        <div class="row container">
            <div v-for="(product, index) in productArr" :key="index" class="aJewelProductConDiv col mb-5 mt-5">
                <div class="aJewelProductDiv">
                    <div class="proImageDiv">
                        <b-skeleton size="is-large" width="100%" height="160px" position="is-centered" :active="loading"></b-skeleton>
                        <img v-if="!loading" :src="product.image" style="width: 100%; height: 100%" alt="">
                    </div>
                    <div class="proNameDiv">
                        <b-skeleton size="is-large" width="100%" height="" position="is-centered" :active="loading"></b-skeleton>
                        <h2 v-if="!loading" >{{product.title.slice(0,25)}}...</h2>
                    </div>
                    <div class="priceABtnDiv">
                        <b-skeleton size="is-large" width="100%" height="" :count='2' position="is-centered" :active="loading"></b-skeleton>
                        <h6 v-if="!loading" >#{{product.price}}</h6>
                        <a href="" class="btn btn-primary m-auto pl-5 pr-5" v-if="!loading" >Buy</a>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="loading" class="row container">
            <div class="aJewelProductConDiv col mb-5 mt-5">
                <div class="aJewelProductDiv">
                    <div class="proImageDiv">
                        <b-skeleton size="is-large" width="100%" height="160px" position="is-centered" :active="loading"></b-skeleton>
                    </div>
                    <div class="proNameDiv">
                        <b-skeleton size="is-large" width="100%" height="" position="is-centered" :active="loading"></b-skeleton>
                    </div>
                    <div class="priceABtnDiv">
                        <b-skeleton size="is-large" width="100%" height="" :count='2' position="is-centered" :active="loading"></b-skeleton>
                    </div>
                </div>
            </div>
            <div class="aJewelProductConDiv col mb-5 mt-5">
                <div class="aJewelProductDiv">
                    <div class="proImageDiv">
                        <b-skeleton size="is-large" width="100%" height="160px" position="is-centered" :active="loading"></b-skeleton>
                    </div>
                    <div class="proNameDiv">
                        <b-skeleton size="is-large" width="100%" height="" position="is-centered" :active="loading"></b-skeleton>
                    </div>
                    <div class="priceABtnDiv">
                        <b-skeleton size="is-large" width="100%" height="" :count='2' position="is-centered" :active="loading"></b-skeleton>
                    </div>
                </div>
            </div>
            <div class="aJewelProductConDiv col mb-5 mt-5">
                <div class="aJewelProductDiv">
                    <div class="proImageDiv">
                        <b-skeleton size="is-large" width="100%" height="160px" position="is-centered" :active="loading"></b-skeleton>
                    </div>
                    <div class="proNameDiv">
                        <b-skeleton size="is-large" width="100%" height="" position="is-centered" :active="loading"></b-skeleton>
                    </div>
                    <div class="priceABtnDiv">
                        <b-skeleton size="is-large" width="100%" height="" :count='2' position="is-centered" :active="loading"></b-skeleton>
                    </div>
                </div>
            </div>
            <div class="aJewelProductConDiv col mb-5 mt-5">
                <div class="aJewelProductDiv">
                    <div class="proImageDiv">
                        <b-skeleton size="is-large" width="100%" height="160px" position="is-centered" :active="loading"></b-skeleton>
                    </div>
                    <div class="proNameDiv">
                        <b-skeleton size="is-large" width="100%" height="" position="is-centered" :active="loading"></b-skeleton>
                    </div>
                    <div class="priceABtnDiv">
                        <b-skeleton size="is-large" width="100%" height="" :count='2' position="is-centered" :active="loading"></b-skeleton>
                    </div>
                </div>
            </div>
            <div class="aJewelProductConDiv col mb-5 mt-5">
                <div class="aJewelProductDiv">
                    <div class="proImageDiv">
                        <b-skeleton size="is-large" width="100%" height="160px" position="is-centered" :active="loading"></b-skeleton>
                    </div>
                    <div class="proNameDiv">
                        <b-skeleton size="is-large" width="100%" height="" position="is-centered" :active="loading"></b-skeleton>
                    </div>
                    <div class="priceABtnDiv">
                        <b-skeleton size="is-large" width="100%" height="" :count='2' position="is-centered" :active="loading"></b-skeleton>
                    </div>
                </div>
            </div>
            <div class="aJewelProductConDiv col mb-5 mt-5">
                <div class="aJewelProductDiv">
                    <div class="proImageDiv">
                        <b-skeleton size="is-large" width="100%" height="160px" position="is-centered" :active="loading"></b-skeleton>
                    </div>
                    <div class="proNameDiv">
                        <b-skeleton size="is-large" width="100%" height="" position="is-centered" :active="loading"></b-skeleton>
                    </div>
                    <div class="priceABtnDiv">
                        <b-skeleton size="is-large" width="100%" height="" :count='2' position="is-centered" :active="loading"></b-skeleton>
                    </div>
                </div>
            </div>
            <div class="aJewelProductConDiv col mb-5 mt-5">
                <div class="aJewelProductDiv">
                    <div class="proImageDiv">
                        <b-skeleton size="is-large" width="100%" height="160px" position="is-centered" :active="loading"></b-skeleton>
                    </div>
                    <div class="proNameDiv">
                        <b-skeleton size="is-large" width="100%" height="" position="is-centered" :active="loading"></b-skeleton>
                    </div>
                    <div class="priceABtnDiv">
                        <b-skeleton size="is-large" width="100%" height="" :count='2' position="is-centered" :active="loading"></b-skeleton>
                    </div>
                </div>
            </div>
            <div class="aJewelProductConDiv col mb-5 mt-5">
                <div class="aJewelProductDiv">
                    <div class="proImageDiv">
                        <b-skeleton size="is-large" width="100%" height="160px" position="is-centered" :active="loading"></b-skeleton>
                    </div>
                    <div class="proNameDiv">
                        <b-skeleton size="is-large" width="100%" height="" position="is-centered" :active="loading"></b-skeleton>
                    </div>
                    <div class="priceABtnDiv">
                        <b-skeleton size="is-large" width="100%" height="" :count='2' position="is-centered" :active="loading"></b-skeleton>
                    </div>
                </div>
            </div>
            <div class="aJewelProductConDiv col mb-5 mt-5">
                <div class="aJewelProductDiv">
                    <div class="proImageDiv">
                        <b-skeleton size="is-large" width="100%" height="160px" position="is-centered" :active="loading"></b-skeleton>
                    </div>
                    <div class="proNameDiv">
                        <b-skeleton size="is-large" width="100%" height="" position="is-centered" :active="loading"></b-skeleton>
                    </div>
                    <div class="priceABtnDiv">
                        <b-skeleton size="is-large" width="100%" height="" :count='2' position="is-centered" :active="loading"></b-skeleton>
                    </div>
                </div>
            </div>
            <div class="aJewelProductConDiv col mb-5 mt-5">
                <div class="aJewelProductDiv">
                    <div class="proImageDiv">
                        <b-skeleton size="is-large" width="100%" height="160px" position="is-centered" :active="loading"></b-skeleton>
                    </div>
                    <div class="proNameDiv">
                        <b-skeleton size="is-large" width="100%" height="" position="is-centered" :active="loading"></b-skeleton>
                    </div>
                    <div class="priceABtnDiv">
                        <b-skeleton size="is-large" width="100%" height="" :count='2' position="is-centered" :active="loading"></b-skeleton>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<script>

import { GetCategories } from '@/Service/getHttpData'

export default {
    data() {
        return {
            loading: true,
            productArr: []
        }
    },
    components: {

    },
    mounted() {
        
        setTimeout  (() => {
            GetCategories()
            .then(res => {
                console.log(res.data);
                this.productArr = res.data
                this.loading = !this.loading;
            })
        }, 3 * 1000)
    }
}
</script>

<style>
    /* #jewelSect{
        width: 100%;
        height: 400px;
    }
    .aJewelProductDiv{
        height: 300px;
        border: 2px solid lightgray;
        border-radius: 5px;
    }
    .aJewelProductConDiv{
        min-width: 220px !important;
        max-width: 220px !important;
    }
    .proImageDiv{
        width: 100%;
        height: 180px;
        padding: 10px;
    }
    .proNameDiv{
        width: 100%;
        height: 45px;
        padding: 10px;
    }
    .priceABtnDiv{
        width: 100%;
        height: 80px;
        padding: 10px;
    } */
</style>