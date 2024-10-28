<template>
  <header>
    <div class="container">
      <img
        src="https://res.cloudinary.com/lereacteur-apollo/image/upload/v1704448979/RNCP31114/cours-vue/exo-sem-1/my-blog-avatar_xhjc4e.png"
        alt=""
      />
      <h2>My Blog</h2>
    </div>
  </header>
</template>

<style scoped>
header {
  height: var(--header-height);
  border-bottom: 1px solid var(--yellow);
  padding: 10px 0;
}
img {
  height: 100%;
}
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
