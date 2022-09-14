<template>
    <div class="card card-body mt-4">
        <form @submit.prevent="onSubmit">
            <div class="form-group">
                <label>Name</label>
                <input v-model="user.name" class="form-control" required />
            </div>
            <div class="form-group mt-3">
                <label>Email</label>
                <input v-model="user.email" type="email" class="form-control" required />
            </div>

            <button type="submit" class="btn btn-success mt-3">Update User</button>
        </form>
    </div>
</template>

<script>
import { useRoute, useRouter } from "vue-router"
import { getUser, updateUser } from "@/firebase" // , updateUser

export default {
    setup() {
        const route = useRoute();
        const params = route.params;
        
        const router = useRouter();

        const user = getUser(params.id);

        const onSubmit = async () => {
            await updateUser(params.id, user.value);
            router.push({ name: 'home' });
            // router.push("/");
        }

        return { user, onSubmit };
    }
}
</script>