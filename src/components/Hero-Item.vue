<template>
    <div>
    <div class="hero-item-name">
        <input v-if="isEdited" type="text" class="hero-item-edit" v-model="itemData.name" @keyup.enter="handleSubmit">

        <div v-else class="hero-item-label" @dblclick="editItem">
            {{itemData.name}}
        </div>
    </div>
    </div>
</template>

<script>
export default {
    props:[
        'itemData'
    ],
    data(){
        return{
            isEdited:false
        }
    },
    methods:{
        editItem(){
            this.isEdited = true
        },
        handleSubmit(e){
            if(e.target.value.trim().length ===0){
                return;
            }
            this.itemData.name = e.target.value;
        }
    }
}
</script>

<style lang="scss" scoped>
    .hero-item-edit, .hero-item-label{
        //width: 100%;
        font-size: 25px;
        margin: 0;
        padding: 10px 0px;
        text-align: center;
        border: none;
    }



</style>>
