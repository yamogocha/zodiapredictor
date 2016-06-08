var zodiac=[
	{
		sign:"aries",
		personalities:"Adventurous and energetic, Pioneering and courageous, Enthusiastic and confident, Dynamic and quick-witted",
		image:"img/aries.png"
	},
	{
		sign:"taurus",
		personalities:"Patient and reliable, Warmhearted and loving, Persistent and determined, Placid and security loving",
		image:"img/taurus.png"
	},
	{
		sign:"gemini",
		personalities:"Adaptable and versatile, Communicative and witty, Intellectual and eloquent, Youthful and lively",
		image:"img/gemini.png"
	},
	{
		sign:"cancer",
		personalities:"Emotional and loving, Intuitive and imaginative, Shrewd and cautious, Protective and sympathetic",
		image:"img/cancer.png"
	},
	{
		sign:"leo",
		personalities:"Generous and warmhearted, Creative and enthusiastic, Broad-minded and expansive, Faithful and loving",
		image:"img/leo.png"
	},
	{
		sign:"virgo",
		personalities:"Modest and shy, Meticulous and reliable, Practical and diligent, Intelligent and analytical",
		image:"img/virgo.png"
	},
	{
		sign:"libra",
		personalities:"Diplomatic and urbane, Romantic and charming, Easygoing and sociable, Idealistic and peaceable",
		image:"img/libra.png"
	},
	{
		sign:"scorpio",
		personalities:"Determined and forceful, Emotional and intuitive, Powerful and passionate, Exciting and magnetic",
		image:"img/scorpio.png"
	},
	{
		sign:"sagittarius",
		personalities:"Optimistic and freedom-loving, Jovial and good-humored, Honest and straightforward, Intellectual and philosophical",
		image:"img/sagittarius.png"
	},
	{
		sign:"capricorn",
		personalities:"Practical and prudent, Ambitious and disciplined, Patient and careful, Humorous and reserved",
		image:"img/capricorn.png"
	},
	{
		sign:"aquarius",
		personalities:"Friendly and humanitarian, Honest and loyal, Original and inventive, Independent and intellectual",
		image:"img/aquarius.png"
	},
	{
		sign:"pisces",
		personalities:"Imaginative and sensitive, Compassionate and kind, Selfless and unworldly, Intuitive and sympathetic",
		image:"img/pisces.png"
	}
]

function getInfo(){
	var sign=document.getElementById('sign').value.toLowerCase()
	for(i=0; i<zodiac.length; i++){
		if(sign===zodiac[i].sign){ 
			document.getElementById('your-sign').innerHTML = zodiac[i].sign
			document.getElementById('icon').src = zodiac[i].image
			document.getElementById('details').innerHTML = "Personalities: "+zodiac[i].personalities
			return
		}else{
			document.getElementById('your-sign').innerHTML = "Invalid! Try typing one of the zodiac signs."
			document.getElementById('icon').src = " "
			document.getElementById('details').innerHTML = " "
		}
	}

}