

$(document).ready(function () {
    jQuery.ajaxPrefilter(function(options) {
        if (options.crossDomain && jQuery.support.cors) {
            options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
        }
    });
    $('#search').on('keyup', function(e){
        let term = e.target.value
        console.log(e.key);
        if (e.key === "Enter") {
            $.ajax({
                url: 'https://api-v3.igdb.com/games/',
                type: 'post',
                dataType : "application/json",
                data: `fields *; where name = ${term}`,
                headers: { 
                    'user-key':'6fc2ca57683cbf5b7414f3a79d44161a',
                    'Access-Control-Allow-Origin': '*'
                },
                success: function (data) {
                    console.info(data);
                }, 
                error : function(err){
                    console.log(term);
                    console.log("we have an error!")
                }
            });
        }
        
    })
});