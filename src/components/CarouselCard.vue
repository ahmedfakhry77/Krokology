<template>
  <div ref="carousel_card" class="carousel-card">
    <p class="feedback">{{ item.feedback }}</p>
    <div class="avatar-container">
      <div class="avatar-wrapper">
        <img
          class="avatar-image"
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxhdmF0YXJ8ZW58MHwwfHx8MTY5MTg0NzYxMHww&ixlib=rb-4.0.3&q=80&w=1080"
          alt="Avatar"
        />
      </div>
      <div class="info">
        <div class="name">{{ item.title }}</div>
        <p>{{ item.company }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss"></style>
