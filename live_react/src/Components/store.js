import createStore from "unistore";
import axios from "axios";

const initialState = {
    avatar: "",
    email: "",
    password: "",
    username: "",
    is_login: false,
    listMovies: [],
    listMoviesFilter: []
}



// const apiKey = "b52d5a69e15d4703b23b7f2b94f2beb7";
// const baseUrl = "https://newsapi.org/v2/";
// const urlHeadLine = baseUrl + "top-headLines?country=id&" + "pageSize=7&" + "apiKey=" + apiKey;
// const urlNewsKiri = baseUrl + "everything?q=bitcoin&" + "pageSize=7&" + "language=en&" + "apiKey=" + apiKey;

const urlMovies = "https://api-todofancy.herokuapp.com/api/movies"

export const store = createStore(initialState)

export const actions = store => ({
    setField: (state, event) => {
        return {[event.target.name]: event.target.value};
    },
    postLogout: state => {
        return {is_login: false};
    },
    postLogin: async state => {
        const data = {username: state.username, password: state.password};
        await axios 

        // https://api-todofancy.herokuapp.com/api/auth
            .post ("https://api-todofancy.herokuapp.com/api/auth", data)
            .then (response => {
                console.log("postlogin response", response.data);
                if (response.data.hasOwnProperty("user_data")) {
                    store.setState({
                        is_login: true,
                        // api_key: response.data.api_key,
                        username: response.data.user_data.username,
                        email: response.data.user_data.email,
                        avatar: response.data.user_data.avatar
                    });
                }
            })
            .catch(error => {
                console.log("error");
            })
        },
    
    getMovies: async state => {
            const data = {
                listMovies: state.listMovies
            }
            await axios
                .get(urlMovies)
                .then ( response => {
                    store.setState({
                        listMovies: response.data.movies,
                    });
                })
                
                .catch(error => {
                    console.log("error");
                })
            },

    searchMovies: async (value, keyword) => {
        try {
            const response = await axios.get(urlMovies)
            console.log(response);
            // listMovies = response.data.movies
                        
            // // .filter(response.data.movies)
            // listMovies: .filter(response.data.movies)}
            // store.setState({listMovies: .filter(response.data.movies)})
            // store.setState({
            const listMovies = response.data.movies
            console.log("ini list movies ",listMovies)
            function cari() {
                return listMovies.Category === "fiction";
              }

            // })   
            store.setState({
                listMoviesFilter: listMovies
            })   
            }
            catch(error){
                console.log(error);
            }
    }

});