export default(axios,baseUrl)=>{
    return{
        getAll(){
            console.log("servicio operativo");
            return axios.get(`${baseUrl}api/user`);
        },
        create(params){
            return axios.post(`${baseUrl}api/user`,params);
        },
        get(id){
            return axios.get(`${baseUrl}api/user/${id}`);
        },
        update(id,params){
            return axios.put(`${baseUrl}api/user/${id}`,params);
        },
        eliminate(id){
            return axios.delete(`${baseUrl}api/user/${id}`);
        }
    }
}