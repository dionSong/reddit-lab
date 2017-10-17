$.ajax({
    url: 'https://www.reddit.com/r/EarthPorn.json'
    
  })
.then
  (function(succes){
    let data = succes.data.children;

    for (i = 0; i < data.length; i++){
      let link = document.createElement('a');
 
      
      let query = `?${data[i].data.title}`
     
      let changedQuery = query.replace(/ /g, '@');
      
      link.setAttribute(`href`, `single.html${changedQuery}`);
  
      link.innerHTML = data[i].data.title;
      
      document.body.appendChild(link);
    }
    
  }, function(reject){
    alert('something went wrong');  
  });

 





  