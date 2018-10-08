<template>
    <div>
        <header class="nav">
            <nav class="flex justify-around f3 code">
                <nuxt-link class="link underline-hover"to="/">Home</nuxt-link>
                <nuxt-link class="link underline-hover"to="/new">New</nuxt-link>
                <nuxt-link class="link underline-hover"to="/show">Show</nuxt-link>
                <nuxt-link class="link underline-hover"to="/ask">Ask</nuxt-link>
                <nuxt-link class="link underline-hover"to="/jobs">Jobs</nuxt-link>
            </nav>
        </header>
        <nuxt></nuxt>
    </div>
</template>

<script>
</script>

<style>
    .nav {
        background: linear-gradient(to right, #f54134, #f76248);
    }
    .link {
        color: #fff;
        padding: 1.5rem .5rem;
    }
    .nuxt-link-exact-active {
        font-weight: bold;
        text-decoration: underline;
    }
</style>
