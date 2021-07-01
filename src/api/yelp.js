import axios from 'axios'
export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer SJ3uXdoPQbBXmXcUqgFiagxDiuPhxzvdDBeJyUCD4iSm9ooidDsSc3jnHVu2aOgvjeSXgTW0aW6qjSZlkLEOgmzZmNVYBL2bTyMNikmsOC2hcooOK6L3HeMi_gTZYHYx'        
    }
})