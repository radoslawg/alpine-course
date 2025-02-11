document.addEventListener('alpine:init', () => {
    Alpine.data('counter', () => ({
        count: 10,
        name: "Mario",

        logCount() {
            console.log(this.count);
        }
    }))
})