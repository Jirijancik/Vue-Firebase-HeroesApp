<template>
    <div class="hero-table">
        <add-hero/>
        <hero-list/>
    </div>
</template>

<script>
    import AddHero from "./Add-Hero";
    import HeroList from "./Hero-List";

export default {
    components:{"add-hero": AddHero, "hero-list": HeroList}
}
</script>

<style scoped>
    .hero-table{
        background-color: #333;
        color: white;
    }
</style>