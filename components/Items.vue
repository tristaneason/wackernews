<template>
    <div class="code">
        <ul class="list pa2">
            <li class="item f6" v-for="item in items" :key="item.id">
                <div class="score">
                    {{item.score}}
                </div>
                <div class="title">
                    <template v-if="item.url">
                        <a class="f6" :href="item.url" target="_blank">{{item.title}}</a>
                    </template>
                    <template v-else>
                        <span class="f6">{{item.title}}</span>
                    </template>
                </div>
                <div class="details">
                    by <nuxt-link :to="`/user/${item.by}`">{{item.by}}</nuxt-link>
                    <p class="ma0 i f6">{{item.time | timeSince}} ago</p>
                </div>
                <template v-if="item.descendants">
                    <div class="comments">
                        {{item.descendants}} comments
                    </div>
                </template>
            </li>
        </ul>
    </div>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        computed: mapState([
            'ids',
            'items'
        ])
    }
</script>

<style scoped>
    .item {
        display: grid;
        grid: repeat(4, 1.5rem) / repeat(10, 1fr);
        grid-row-gap: 1rem;
    }

    .score {
        grid-row: 1 / -1;
        grid-column: span 1;
        align-self: center;
        justify-self: center;
    }

    .title {
        grid-row: 1 / 3;
        grid-column: 2 / -2;
        align-self: end;
    }

    .comments {
        grid-row: 3 / -1;
        grid-column: 2 / 6;
    }

    .details {
        grid-row: 3 / -1;
        grid-column: 6 / -2;
        justify-self: end;
    }
</style>
