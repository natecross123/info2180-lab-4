window.addEventListener('load', () => {
    document.querySelector("button#btn").addEventListener("click", (event) => {
        event.preventDefault();

        fetch('superheroes.php')
            .then(response => response.text())
            .then(data => {
               
                alert(data);
            })
            .catch(error => console.error('Error:', error));
    });
});
