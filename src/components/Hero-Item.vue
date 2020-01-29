<template>
    <div>
    <div class="hero-item-name">
        <input v-if="isEdited" type="text" class="hero-item-edit" v-model="itemName" @keyup.enter="handleSubmit">

        <div v-else class="hero-item-label" @dblclick="editItem">
            {{itemName}}
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
            isEdited:false,
            itemName : this.itemData.name
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
            this.itemName = e.target.value;
            this.isEdited = false;
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
