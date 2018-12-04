import axios from 'axios'

class UserClient {
    async findByEmail(email) {
        try {
            const url = `${process.env.URL_BASE}/api/users/${email}`
            const {data} = await axios({url: url, method: 'GET'})
            return data
        } catch (err) {
            throw err
        }
    }
}

export default new UserClient()
