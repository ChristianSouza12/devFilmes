

import axios from "axios";


const api = axios.create({

        baseURL:'https://api.themoviedb.org/3',
        params:{
            api_key: "27e01dab3361fa62eecdfa6866ffe6a0",
            language:"pt-BR",
            page: 1
        }

})


export default api