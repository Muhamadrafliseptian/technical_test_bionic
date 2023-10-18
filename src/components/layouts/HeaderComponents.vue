<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container">
      <router-link class="navbar-brand text-success" to="/">
        <b>BTI</b>
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <ListItem>
            <template #list>
              <router-link class="nav-link" to="/"> Home </router-link>
            </template>
          </ListItem>
          <ListItem>
            <template #list>
              <router-link class="nav-link" to="/about"> ERD Test </router-link>
            </template>
          </ListItem>
          <ListItem>
            <template #list>
              <router-link class="nav-link" to="/slicing"> Slicing Css </router-link>
            </template>
          </ListItem>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import ListItem from '@/components/header-components/ListItem.vue'
export default {
  components: {
    ListItem
  }
}
</script>
