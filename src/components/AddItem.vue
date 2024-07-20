<template>
  <div>
    <h1 class="add_title">Add / Edit Review Card</h1>
    <div class="form-container">
      <form @submit.prevent="addItem">
        <input
          type="text"
          id="name"
          v-model="newItem.title"
          name="name"
          placeholder="Name"
          required
        />
        <input
          type="text"
          id="job-title"
          v-model="newItem.company"
          name="job-title"
          placeholder="Job Title"
          required
        />
        <textarea
          id="review"
          name="review"
          v-model="newItem.feedback"
          placeholder="Review"
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useCarouselStore } from "../stores/carousel";
const store = useCarouselStore();
const newItem = ref({
  title: "",
  feedback: "",
  company: "",
});
const addItem = () => {
  store.addItem({ ...newItem.value });
  newItem.value = { title: "", description: "", color: "" };
};
</script>

<style lang="scss"></style>
