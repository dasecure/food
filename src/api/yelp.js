import axios from 'axios'
export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer UUry3Qxz9_SuU1hpi1uC4yAkxSlHVr-TENpQCDBzvBy1JoPFMLfDF9v2Xdn5bUqDJDo7J8m_MuqWjFzP8reijIfPIi5OiUriWDufFgOQYoyNSUyg06owpmtQaz7eYHYx'        
    }
})