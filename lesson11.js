document.addEventListener('alpine:init', () => {
    Alpine.data('demo', () => ({
        posts: [],
        bg: '',

        init() {
            console.log('init')
            fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
                .then(response => response.json())
                .then(data => this.posts = data)

            this.$watch('bg', (newbg, oldbg) => {
                document.body.style.backgroundColor = newbg
            })

        },
    }))
})