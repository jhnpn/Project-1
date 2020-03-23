

$(document).ready(function () {


    // var searchTrigger = function(){
    //     var term = 'mario'
    //     $.ajax({
    //         url: 'https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/games/?search='+term+'&fields=name,id',
    //         type: 'post',
    //         headers: {
    //             'Accept':'application/json',
    //             'user-key':'6fc2ca57683cbf5b7414f3a79d44161a',
    //             'Access-Control-Allow-Origin':'localhost:5500'
            
    //         }   
    //     }).then(function(response){
    //         console.log('this is my response ' + response)
    //         return response
    //     }).then(function(data){
    //         console.log(data);
    //     })
    //     .catch(function(error){
    //         console.log('This is my error '+ error)
    //     });
    // }

    // searchTrigger();

    $('#search').on('keypress', function(e){
        let term = e.target.value
        console.log(e.key);
        if (e.key === "Enter") {
            e.preventDefault();
            $.ajax({
                url: 'https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/games/?search='+term+'&fields=name,id',
                type: 'post',
                headers: {
                    'Accept':'application/json',
                    'user-key':'6fc2ca57683cbf5b7414f3a79d44161a',
                    'Access-Control-Allow-Origin':'localhost:5500'
                
                }   
            }).then(function(response){
                console.log('this is my response ' + response)
                return response
            }).then(function(data){
                console.log(data);
            })
            .catch(function(error){
                console.log('This is my error '+ error)
            });
        }
    
        }
        
    )
});

