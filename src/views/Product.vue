<template>
    <main class="content container proPageMain">
        <section class="p-5" style="width: 100%; display: flex; justify-content: space-between; flex-wrap: wrap;">
            <div class="pictSect">
                <div class="imParent">
                    <img v-if="!loading" :src="product.image" alt="" style="width: 100%; height: 200px;" >
                    <b-skeleton size="is-large" width="100%" height="200px" position="is-centered" :active="loading"></b-skeleton>
                </div>
            </div>
            <div class="tiSect p-5">
                <b-skeleton size="is-large" width="100%" height="" :count='1' position="" :active="loading"></b-skeleton>
                <b-skeleton size="is-large" width="100%" height="" :count='1' position="" :active="loading"></b-skeleton>
                <b-skeleton size="is-large" width="150px" height="" :count='1' position="" :active="loading"></b-skeleton>
                <b-skeleton size="is-large" width="150px" height="" :count='1' position="" :active="loading"></b-skeleton>
                <b-skeleton size="is-large" width="150px" height="" :count='1' position="is-centered" :active="loading"></b-skeleton>
                <div>
                    <h5 class="mb-1" v-if="!loading">{{product.title}}</h5>
                    <span v-if="!loading" id="ratings"><b-rate v-model="product.rating.rate" :icon-pack="'fa'" :icon="'star'" :max="5" :size="'5'" :rtl="false" :spaced="true" :custom-text="'(' + product.rating.count +')'" :disabled="true"></b-rate></span><span></span>
                </div>
                <div>
                    <h5 v-if="!loading" class="mb-0">#15,500</h5>
                    <p v-if="!loading">+shipping cost (500)</p>

                </div>
                <div class="text-center">
                    <button v-if="!loading" class="btn btn-danger">ADD TO CART</button>
                </div>
            </div>
            <div class="proDescDiv p-5">
                <b-skeleton size="is-large" width="100%" height="" position="is-centered" :active="loading"></b-skeleton>
                <b-skeleton size="is-large" width="100%" height="200px" position="is-centered" :active="loading"></b-skeleton>
                <h4  v-if="!loading" class="text-center">Description</h4>
                <p v-if="!loading" >{{product.description}}</p>
            </div>
        </section>
        <section class="miscSect mt-5">
            <b-skeleton size="is-large" width="100%" height="200px" position="is-centered" :active="loading"></b-skeleton>
            <div>
                
            </div>
        </section>
        
    </main>
</template>

<script>

import { GetAProductWithId } from '@/Service/getHttpData'

export default {
    data(){
        return{
            loading: true,
            product: {},
        }
    },
    mounted(){
        //console.log(this.$route.params);
        GetAProductWithId(this.$route.params.id)
        .then(res => {
            console.log(res.data);
            this.product = res.data;
            this.loading = false
        })
    }
}
</script>

<style>
    .proPageMain{
       display: flex; 
       justify-content: space-evenly;
    }
    .pictSect, .tiSect, .miscSect{
        background-color: gray;
        
    }
    .pictSect{
        width: 40%;
        height: 200px;
        border-radius: 15px;
        margin-top: 5px;
        margin-bottom: 5px;
    }
    .tiSect{
        width: 55%;
        height: 200px;
        border-radius: 15px;
        margin-top: 5px;
        margin-bottom: 5px;
    }
    .miscSect{
        width: 40%;
        height: 200px;
        border-radius: 15px;
        margin-top: 5px;
        margin-bottom: 5px;
    }
    .proDescDiv{
        width: 100%;
        background-color: gray;
        border-radius: 15px;
    }
    .proDescDiv h4{
        border-bottom: 3px solid rgb(75, 75, 75);
        padding-bottom: 10px;
    }
</style>