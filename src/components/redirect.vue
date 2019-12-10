<template>
    <div>
        <h1>Redirigiendo</h1>
    </div>
</template>

<script>
export default {
    name: "Redirect",
    mounted() {
        var searchString = this.$route.params.searchString;
        this.$router.push('/search/'+ searchString);
    }
}
</script>