<template>
    
</template>

<script>

    import routeMixin from '../mixins/route-mixin';
    import socketMixin from '../mixins/socket-mixin';
    export default {
        name: "Template",
        mixins:[
            socketMixin,
            routeMixin
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
        created(){},
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