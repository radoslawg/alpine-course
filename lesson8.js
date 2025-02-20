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
        errors: {},
        beltChoices: ['black', 'white', 'red', 'orange', 'brown'],

        validateForm() {
            this.errors = {}
            if (this.username.length < 3) {
                this.errors.username = 'Username must be at least 3 characters long'
            }
            if (!this.email.includes('@')) {
                this.errors.email = 'Please enter a valid email address'
            }
            if (this.password.length < 8) {
                this.errors.password = 'Password must be at least 8 characters long'
            }
            if (this.password !== this.passwordConfirm) {
                this.errors.passwordConfirm = 'Passwords do not match'
            }
            if (!this.belt) {
                this.errors.belt = 'Please select a belt color'
            }
            if (this.bio.length < 10) {
                this.errors.bio = 'Bio must be at least 10 characters long'
            }
        },

        submitForm($event) {
            this.validateForm()
            console.log(this.errors)
            if (Object.keys(this.errors).length === 0) {
                console.log(this.username, this.email, this.password, this.passwordConfirm, this.belt, this.bio, this.newsletter)

                $event.target.reset()
            }
        }
    }))
})