const apiKey = 'lXWjbGOaJmQO4rvvoMoLepiEXPoHAI67'

//http://api.giphy.com/v1/gifs/random?api_key=lXWjbGOaJmQO4rvvoMoLepiEXPoHAI67


fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
	.then( resp => resp.json())
	.then( ({data}) => {

		const {url} = data.images.original
		

		const img = document.createElement('img')
		img.src = url 

		document.body.append(img)
	})