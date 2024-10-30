window.addEventListener('load', ()=>{
    document.querySelector("button#btn").addEventListener("click",(event)=>{
        event.preventDefault();
       
        let cleanUrl = `superheroes.php?query= ${searchVal}`.replace( /"[^-0-9+&@#/%?=~_|!:,.;\(\)]"/g,'');

        fetch(cleanUrl, {method : 'GET'})
        .then(resp => resp.text())
        .then(elements => {
            let h3El = document.createElement("h3");
            let h3Text = document.createTextNode("RESULT");
           
        })

      
    });

});