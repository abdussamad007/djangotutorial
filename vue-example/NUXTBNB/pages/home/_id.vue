<template>
    <!--div>{{home.title}}</div -->
    <div>
        <div style="display:flex;"> 
            <img v-for="image in home.images" :key="image" alt="Someting Funny..." :src="image" width="200" height="150"/>
        </div>
        {{home.title}} <br/>
        {{home.pricePerNight}} /night <br/>
        <img src="/images/marker.svg" width="20" height="20" />
        {{home.location.address}} {{home.location.city}} {{home.location.state}} {{home.location.country}} <br/>
        <img src="/images/star.svg" width="20" height="20" />
        {{home.reviewValue}}<br/>
        {{home.guests}} guests {{home.bedrooms}} rooms  {{home.beds}} beds {{home.bathrooms}} bath <br/>
    </div>
    
</template>
<script>
//import homes from '~/data/homes'
export default {
     head(){
        return {
            title:this.home.title
        }
    },
   
    async asyncData({params,$dataApi}){
        //const home = homes.find((home) => home.objectID==this.$route.params.id)
        console.log('-----------------------')
      //  const home = await $dataA
        console.log(params.id)
        const home = await $dataApi.getHome(params.id)
        //console.log(homeData)
        //this.home=home;
        return {
            home,
        }
        
    }
}
</script>