const { createApp } = Vue

const app = createApp({
  data() {
    return {
      isShown: true,
      title: 'The Final Empire',
      author: 'Sedana Yoga',
      age: 24,
      books: [
        { title: 'Book A', author: 'Sedana', isFav: true },
        { title: 'Book B', author: 'Yoga', isFav: false },
        { title: 'Book C', author: 'Cokorda', isFav: true },
      ],
    }
  },
  methods: {
    changeTitle(title) {
      this.title = title
    },
    toggleShow() {
      this.isShown = !this.isShown
    },
  },
})

app.mount('#app')
