export const state = () => ({
  photos: []
})
export const getters = {
  newPhoto(state) {
    return state.photos
  }
}
export const mutations = {
  loadphotos(state, payload) {
    payload.forEach(element => {
      state.photos.push(element)
    });
    // state.photos.push(payload[0])
  }
}
export const actions = {
  async loadPhoto({
    state,
    commit
  }, payload) {
    const
      image = await this.$axios.$get(`https://pixabay.com/api/?key=2034646-6e3ff18cd219c0cfa3fb70eef&q=yellow+flowers&image_type=photo&pretty=true&per_page=4&page=${payload}`)
    commit('loadphotos', image.hits)

  }
}
