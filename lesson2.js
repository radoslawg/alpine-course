document.addEventListener('alpine:init', () => {
    Alpine.data('signupForm', () => ({
        username: '',
        email: '',
        password: '',
        passwordConfirm: '',
        belt: '',
        bio: '',
        newsletter: true,

    }))
})