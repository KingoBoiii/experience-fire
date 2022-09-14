<template>
  <div>
    <h1>EXPERIENCE FIRE</h1>
    <UserCreate />
    <UserList />
  </div>
</template>

<script>
import UserCreate from "@/components/UserCreate.vue"
import UserList from "@/components/UserList.vue"

export default {
  name: 'HomeView',
  components: {
    UserCreate,
    UserList
  }
}
</script>
