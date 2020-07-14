class GitHub {
    constructor(){
        this.client_id='GitHub Client Id'
        this.client_secret='GitHub Client Secret'
        this.repos_count = 5
        this.repos_sort = 'created: asc'
    }

    async getUser(user){
        const profileData = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)

        const repoData = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)

        const profile = await profileData.json()
        const repos = await repoData.json()
        return {
            profile,
            repos
        }
    }

}
