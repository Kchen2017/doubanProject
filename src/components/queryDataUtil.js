
export default {
    getMovieList(type){
        var url = 'http://127.0.0.1:3090/getmovielist?type=' + type;
        return new Promise((resolve, reject)=>{
            fetch(url).then(function (response) {
                return response.json();
            }).then(function (data) {
                resolve(data);
            });
        })
    }
}