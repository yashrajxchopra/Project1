
const successCallback = (position) => {
	console.log(position);
	return position;
  }
  
  const errorCallback = (error) => {
	console.log(error);
	return error;
  }
  
 navigator.geolocation.getCurrentPosition(successCallback, errorCallback)
 
console.log(successCallback())
  
document.getElementById('search-btn').addEventListener('click', (e) => {
	e.preventDefault()
    const input = document.getElementById('search-text').value
	const url = `https://weather-api99.p.rapidapi.com/weather?city=${input}&dt="10-08-2023"`
	const data = null

const xhr = new XMLHttpRequest()
xhr.withCredentials = true

xhr.addEventListener('readystatechange', function () {
	
	if (this.readyState === this.DONE) {
		const res = JSON.parse(this.responseText)
		console.log(res)
		 const lat = res.coord.lat 
		 const long = res.coord.lon
		 console.log(lat)
		 console.log(long)
		 console.log(res.weather[0].description)
		 const temperature = parseFloat(res.main.feels_like - 273.15).toFixed(2)
		 console.log(temperature)
		 console.log(res.weather[0].icon)
		 const formatString = res.weather[0].icon;
         const number = parseInt(formatString.replace(/\D/g, ''), 10);
		 console.log(number)
		 function iconfun() {
			if(number == 0122)
		 {
			let image = "https://images.freeimages.com/clg/images/18/184076/tango-weather-few-clouds_f"
			return image

		 }
		
		 return "https:https://static.thenounproject.com/png/3674270-200.png"
		  }
		const image  = iconfun()
		 
		 const weather = `<p>City:${res.name}<p>
		                  <p>Weather:${res.weather[0].description}</p>
						  <img src="${image}" height="25px" width="25px">
		                  <p>Temperature:${temperature} degree celsius<p>
						  <p>Humidity: ${res.main.humidity}%<p>`
		 const mapiframe = `<iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3401.3005394341535!2d${long}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDMwJzU3LjIiTiA3NsKwNTMnMDguOSJF!5e0!3m2!1sen!2sin!4v1691124344066!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
		 document.getElementById('my-div').innerHTML = weather
		 document.getElementById('map-div').innerHTML = mapiframe
	}
	
});

xhr.open('GET', url)
xhr.setRequestHeader('X-RapidAPI-Key', '6afcb173damsh4c630189d420dd4p18ea3fjsn1c95813fde53')
xhr.setRequestHeader('X-RapidAPI-Host', 'weather-api99.p.rapidapi.com')

xhr.send(data)
document.getElementById('search-text').value =''
})
