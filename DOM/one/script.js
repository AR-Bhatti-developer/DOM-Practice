document.body.style.margin = '0px'
document.body.style.padding = '0px'
document.body.style.backgroundColor = 'rgba(240, 234, 217, 1)'
// Header 
const header = document.createElement('header')
header.className = 'header'
header.style.background = 'blue'
header.style.color = 'white'
header.style.display = 'flex'
header.style.alignItems = 'center'
header.style.justifyContent = 'center'

// Header h1
const headerh1 = document.createElement('h1')
headerh1.innerText = 'Tribute to Dr Abdul Qadir Khan'


// Main
const maindiv = document.createElement('div')
maindiv.style.background = 'white'
maindiv.style.margin = '20px'

//img
const img = document.createElement('img')
img.setAttribute('src', 'abdulQadir.jpg')
img.src = "abdulQadir.jpg"
img.alt = 'Dr Abdul Kadir Khan'
img.style.height = '200px'
img.style.padding = '20px'
img.style.paddingBottom = '0px'

//About
const mainh2 = document.createElement('h2')
mainh2.innerText = 'About Dr Abdul Qadir Khan'
mainh2.style.color = 'black'
mainh2.style.paddingLeft = '20px'

//Paragraph
const para = document.createElement('p')
para.innerText = 'Dr. Abdul Qadeer Khan was a renowned Pakistani nuclear scientist and is widely known as the father of Pakistan’s nuclear program. He played a crucial role in making Pakistan a nuclear power, especially after the successful nuclear tests in 1998. His work greatly contributed to strengthening the country’s defense and scientific progress. He is remembered as a national hero for his dedication to Pakistan’s security and technological advancement.'
para.style.padding = '20px'
para.style.paddingTop = '0px'

//seconddiv
const seconddiv = document.createElement('div')
seconddiv.style.background = 'white'
seconddiv.style.margin = '20px'

//Achievments h2
const achivh2 = document.createElement('h2')
achivh2.innerText = 'Achivements'
achivh2.style.padding = '20px'
achivh2.style.paddingBottom = '0px'
achivh2.style.paddingTop = '30px'

//Achivement List
const achivul = document.createElement('ul')
achivul.style.padding = '20px'
achivul.style.paddingTop = '0px'
achivul.style.margin = '0px'

function addachivements (achive) {
     const achivli = document.createElement('li')
     achivli.appendChild(document.createTextNode(achive))
     achivul.append(achivli)
     achivli.style.margin = '30px'

}
addachivements('Established Pakistan’s Uranium Enrichment Program – He set up the Kahuta Research Laboratories (KRL), where uranium enrichment for nuclear weapons began.')
addachivements('Made Pakistan a Nuclear Power – He was the key scientist behind Pakistan’s successful nuclear tests in May 1998.')
addachivements('Awarded Hilal-e-Imtiaz and Nishan-e-Imtiaz – He received Pakistan’s highest civil awards for his scientific contributions.')
addachivements('Boosted National Defense Technology – He played a vital role in advancing missile and nuclear defense capabilities of Pakistan.')

// Append
document.body.append(header)
header.append(headerh1)
document.body.append(maindiv)
maindiv.append(img)
maindiv.append(mainh2)
maindiv.append(para)
document.body.append(seconddiv)
seconddiv.append(achivh2)
seconddiv.append(achivul)
