<template>
    <b-container>
        <b-jumbotron>
            <p>INDEX</p>
        </b-jumbotron>
    </b-container>
</template>

<script>
    import routeMixin  from '../../mixins/route-mixin';
    import socketMixin from '../../mixins/socket-mixin';

    export default {
        name: "Index",
        mixins:[
            routeMixin,
            socketMixin
        ],
        props:[],
        data(){
            return{
            }
        },
        methods:{},
        components:{},
        computed:{},
        watch:{},
        beforeCreate(){},
        created(){
            this.pusher_alert();
        },
        beforeMount(){},
        mounted(){},
        beforeUpdate(){},
        updated(){},
        beforeDestroy(){},
        destroyed(){}
    }
</script>

<style scoped lang="scss">

</style>