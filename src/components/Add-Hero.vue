<template>
  <div>
    <form @submit.prevent="addHero" class="add-hero-form">
      <div class="add-hero-input">
        <input type="text" v-model="heroName" placeholder="Add Hero" name="Hero input" />
      </div>
      <button type="submit">ADD HERO</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      heroName: ""
    };
  },
  methods: {
    addHero(e) {
      const newHero = {
        name: this.heroName,
        created: new Date().toUTCString()
      };

      this.$emit("add-hero", newHero);

      e.target.reset();
    }
  }
};
</script>