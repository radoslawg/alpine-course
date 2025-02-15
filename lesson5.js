document.addEventListener('alpine:init', () => {
    Alpine.data('signupForm', () => ({
        username: '',
        email: '',
        password: '',
        passwordConfirm: '',
        belt: '',
        bio: '',
        newsletter: true,
        showPass: false,

        submitForm() {
            console.log(this.username, this.email, this.password, this.passwordConfirm, this.belt, this.bio, this.newsletter)
        }
    }))
})