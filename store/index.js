import axios from '~/plugins/axios'
import { knex } from '~/plugins/db'

export const state = () => ({
    ids: [],
    items: []
})

export const mutations = {
    setIds(state, ids) {
        state.ids = ids
    },
    setItems(state, items) {
        state.items = items
    }
}

export const actions = {
    async LOAD_ITEMS({ commit }) {
        const response = await axios.get('topstories.json')
        const ids = response.data
        const tendIds = ids.slice(0, 10)

        const itemsPromises = tendIds.map(id => axios.get(`item/${id}.json`))
        const itemsResponses = await Promise.all(itemsPromises)
        const items = itemsResponses.map(res => res.data)

        const realItems = items.map(
            item => item ? item : { title: "Failed to load", id: 0 }
        )

        // knex.schema.createTable('stories', table => {
        //     table.increments('id')
        //     table.string('stories')
        //     table.time('created_at')
        // })
        //
        // knex('stories').insert(realItems)

        commit('setItems', realItems)
    }
}
