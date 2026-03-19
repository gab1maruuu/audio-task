<template>
  <nav class="navbar navbar-expand-lg sticky-top shadow-sm custom-header">
    <div class="container-fluid px-lg-5">
      <a class="navbar-brand logo fw-bold fs-3 text-white" href="#">
        Foot<span class="text-accent">Cast</span>
      </a>
      <button class="navbar-toggler border-0 text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <div class="navbar-nav ms-auto gap-3">
          <router-link to="/" class="nav-link text-white-50 px-3 py-2 rounded custom-nav-btn" active-class="text-white fw-bold">Inicio</router-link>
          <router-link to="/episodios" class="nav-link text-white-50 px-3 py-2 rounded custom-nav-btn" active-class="text-white fw-bold">Episodios</router-link>
          <router-link to="/contacto" class="nav-link text-white-50 px-3 py-2 rounded custom-nav-btn" active-class="text-white fw-bold">Contacto</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header',
  emits: ['change-view']
}

</script>

<style scoped>
.custom-header {
  background-color: #1a2347;
  height: 80px;
}

.text-accent {
  color: #4f46e5;
}

.custom-nav-btn {
  font-size: 15px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.custom-nav-btn:hover {
  color: white !important;
  background-color: rgba(255, 255, 255, 0.05);
}

@media (max-width: 991.98px) {
  .custom-header {
    height: auto;
  }
}
</style>
