let output= document.getElementById("searchBar");
 const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '328b6ef3bfmsh88abf7688667e50p147846jsn83362d5ae826',
		'X-RapidAPI-Host': 'domainr.p.rapidapi.com'
	}
};

fetch('https://domainr.p.rapidapi.com/v2/register?mashape-key=undefined&domain=example.com&registrar=namecheap.com', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));