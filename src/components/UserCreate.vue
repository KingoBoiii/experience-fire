<template>
    <div class="card card-body mt-4">
        <form @submit.prevent="onSubmit">
            <div class="form-group">
                <label>Name</label>
                <input v-model="form.name" class="form-control" required />
            </div>
            <div class="form-group mt-3">
                <label>Email</label>
                <input v-model="form.email" type="email" class="form-control" required />
            </div>

            <button type="submit" class="btn btn-success mt-3">Create User</button>
        </form>
    </div>
</template>

<script>
import { reactive } from "vue"
import { createUser } from "@/firebase"

export default {
    name: "UserCreate",
    setup() {
        const form = reactive({name: '', email: ''});
        const onSubmit = async () => {
            await createUser({...form});
            form.name = '';
            form.email = '';
        }

        return { form, onSubmit };
    }
}
</script>

<style>

</style>