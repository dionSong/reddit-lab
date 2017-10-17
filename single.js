//selftext --> post content
// ### HINT!
// You will need to pass the title as a parameter to your `a` tag's href attribute.
	
let queryString = window.location.search;
console.log(queryString);



let changedQuery = queryString.replace(/@/g, ' ').replace('?', '');
console.log(changedQuery)

$.ajax({
    url: 'https://www.reddit.com/r/EarthPorn.json'
    
  })
    .then
    (function(succes){
        let post = succes.data.children;
      
        for (i = 0; i < post.length; i++){
        
            
        if(post[i].data.title === changedQuery){

            let heading = document.createElement('h1');
            heading.innerHTML = post[i].data.title
            document.body.appendChild(heading);

            let subHeading = document.createElement('h3');
            subHeading.innerHTML =  `Author: ${post[i].data.author}`
            document.body.appendChild(subHeading);

            let img = document.createElement('img');
                img.setAttribute(`src`, `${post[i].data.url}`);
            document.body.appendChild(img);

            let content = document.createElement('p');
            content.innerHTML = post[i].data.selftext;
            document.body.appendChild(content);

            
            
            console.log(post[i]);
            




            // let heading = document.createElement('h1');
            // heading.innerHTML = post.data.title;
            // document.body.appendChild(heading);

            
        }
         
    
        
       
        
        
        
       
   
        }
        
    }, function(reject){
        alert('something went wrong');  
    });

