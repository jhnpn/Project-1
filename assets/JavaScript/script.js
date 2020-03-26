$(document).ready(function () {
    // need to pull up the modal when clicking on it
    $('.modal').modal();

    // function that will grab the data from the API
    var searchTrigger = function(){
        // var term = 'mario'
        $.ajax({
            url: 'https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/games',
            type: 'post',
            headers: {
                'Accept':'application/json',
                'user-key':'6fc2ca57683cbf5b7414f3a79d44161a',
                'Access-Control-Allow-Origin':'localhost:5500'
            
            },
            data: "fields age_ratings,aggregated_rating,aggregated_rating_count,alternative_names,artworks,bundles,category,collection,cover,created_at,dlcs,expansions,external_games,first_release_date,follows,franchise,franchises,game_engines,game_modes,genres,hypes,involved_companies,keywords,multiplayer_modes,name,parent_game,platforms,player_perspectives,popularity,pulse_count,rating,rating_count,release_dates,screenshots,similar_games,slug,standalone_expansions,status,storyline,summary,tags,themes,time_to_beat,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos,websites;"   
        }).then(function(response){
            // console.log('this is my response ' + response)
            return response
        }).then(function(data){
            console.log(data);
            generateList(data);
        })
        .catch(function(error){
            console.log('This is my error '+ error)
        });
    }

    searchTrigger();

    // also need to grab data for the news and reviews feed
    var newsFeed = function() {
        $.ajax({
            url: 'https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/feeds',
            type: 'post',
            headers: {
                'Accept': 'application/json',
                'user-key': '6fc2ca57683cbf5b7414f3a79d44161a',
                'Access-Control-Allow-Origin':'localhost:5500'

            },
            data: "fields category,content,created_at,feed_likes_count,feed_video,games,meta,published_at,pulse,slug,title,uid,updated_at,url,user;"
        }).then(function(response){
            // console.log('this is my response ' + response)
            return response
        }).then(function(data){
            console.log(data);
            generateNews(data);
        })
        .catch(function(error){
            console.log('This is my error '+ error)
        });
        
    }

    newsFeed();

    // function to append News data to the site
    var generateNews = function(data) {
        for (i = 0; i < data.length; i++) {
            var content = data[i].content;
            // var newsTitle = data[i].id;
            var postContent = $("<li>");
            postContent.text(content);
            $("#news").append(postContent);
        }
    }

    $('#search').on('keypress', function(e){
        let term = e.target.value
        console.log(e.key);
        if (e.key === "Enter") {
            e.preventDefault();
            $.ajax({
                url: 'https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/games/?search='+term+'&fields=name,id,age_ratings,aggregated_rating_count,first_release_date,expansions,summary,url,websites',
                type: 'post',
                headers: {
                    'Accept':'application/json',
                    'user-key':'6fc2ca57683cbf5b7414f3a79d44161a',
                    'Access-Control-Allow-Origin':'localhost:5500'
                
                }
            }).then(function(response){
                // console.log('this is my response ' + response)
                return response
            }).then(function(data){
                console.log(data);
                generateList(data);
            })
            .catch(function(error){
                console.log('This is my error '+ error)
            });
        }
    
        }
        
    )

    var generateList = function (data) {
        $("#list-target").empty();
        for (i = 0; i < data.length; i++) {
            var name = data[i].name;
            
            var label = $("<label>");
            var checkbox = $("<input>");
            $(checkbox).attr("type", "checkbox");
            $(label).append(checkbox);
            var text = $("<span>");
            $(text).text(name);
            $(label).append(text);

            var listItem = $("<div>");
            $(listItem).addClass("collection-item");
            $(listItem).append(label);

            // var listItem = $('.collection-item');
            // listItem.text(name);
            $("#list-target").append(listItem);
            // $("#list-target").append("<li>" + name + "</li>");
        }
    }
});