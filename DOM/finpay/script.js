
document.body.className = `bg-[#d1dbdf73] m-0 p-0 font-medium font-[sans-serif]`

//Nav bar
const nav = document.createElement('nav')
nav.style.display = 'flex'
const navlogo = document.createElement('img')
// navlogo.classList.add('h-')
navlogo.src = 'finpay-logo.png'
navlogo.alt = 'finpay Logo'
navlogo.className = `h-[120px] w-[120px] ml-[32px]`

// list
const navul = document.createElement('ul')
function navli(list) {
     const lilist = document.createElement('li')
     lilist.appendChild(document.createTextNode(list))
     navul.append(lilist)
     lilist.className = `py-[12px] px-[30px]`
}     
navli('Products')
navli('Customers')
navli('Pricing')
navli('Learn')
navul.className = `flex  p-[35px]`

// buttons 
const butdiv = document.createElement('div')
butdiv.className = `flex justify-center items-center ml-[29%]`

const loginbut = document.createElement('button')
loginbut.innerText = 'Login'
loginbut.className = `border-[black] border-[1px] py-[9px] px-[16px] rounded-[14px] cursor-pointer`

const signup = document.createElement('button')
signup.innerText = 'Sign Up'
signup.className  =`border-[#2aa0c4fa] border-[2px] py-[9px] px-[17px] rounded-[14px] m-[12px] bg-[#2aa0c4fa] cursor-pointer`

// Hero Section
const herodiv = document.createElement('div')
herodiv.className = `flex mt-[56px]`

const h1div = document.createElement('div')
h1div.className = `inline w-[57%] pl-[104px] pr-[210px]`

const heroh11 = document.createElement('h1')
heroh11.innerText = 'Get paid early'
heroh11.className = `text-5xl font-semibold`


const heroh12 = document.createElement('h1')
heroh12.innerText = 'save automatically all you pay'
heroh12.className = `text-5xl`

const heroh2 = document.createElement('h2')
heroh2.innerHTML = 'Supports small businesses With simple invoicing, powerful integrations, and cash flow management tool'
heroh2.className = `mt-[12px] pr-[43px]`

const container = document.createElement('div')
container.className = `w-[300px] h-[300px]`

const firstimg = document.createElement('img')
firstimg.src = 'dipa.png'
firstimg.src = 'dipa.png';
firstimg.className = `block`

const secondtimg = document.createElement('img')
secondtimg.src = 'visa-card.png'
secondtimg.className = `absolute top-[86px] right-[115px] h-[70%] pointer-events-none`

const emaildiv = document.createElement('div')
emaildiv.className = `flex items-center bg-white rounded-[12px] p-1 shadow-md max-w-md mx-auto mt-9`;

const input = document.createElement('input')
input.type = 'email'
input.placeholder = 'Your businesses email'
input.id = 'input'
input.className = `flex-grow px-4 py-2 text-sm text-gray-700 rounded-[12px] outline-none`;

const formbutton = document.createElement('button')
formbutton.innerText = 'Get Started'
formbutton.className = `flex items-center bg-teal-600 text-white px-4 py-3 rounded-[12px] text-sm hover:bg-teal-700 transition-all ml-2`;

const formbuttonI = document.createElement('i')
formbuttonI.className = `fas fa-arrow-up-right-from-square ml-2 text-sm`

const socialimg = document.createElement('img')
socialimg.src = 'social.png'
socialimg.className =`mt-12`

// Feature section

const featurediv = document.createElement('div')
featurediv.className =`bg-white w-300 ml-15 rounded-2xl mt-20`

const featureh3 = document.createElement('h3')
featureh3.innerText = 'Future Payment'
featureh3.className = 'text-teal-700 p-12 pb-2 pl-24'

const h1h3div = document.createElement('div')
h1h3div.className = 'w-70% p-12 pt-2 flex'


const featureh1 = document.createElement('h1')
featureh1.innerText = 'Experience that grows with our scale.'
featureh1.className = 'text-black text-4xl font-semibold  pr-12 pl-12'

const featureh32 = document.createElement('h3')
featureh32.innerText = 'Design a financial operating system that works for your business and streamlined cash flow management'
featureh32.className = 'pl-12 mr-16 text-teal-700'

const iconsdiv = document.createElement('div')
iconsdiv.className = `flex pl-23 pr-32 pb-28`

const featurediv1 = document.createElement('div')
featurediv1.className = `justify-center items-start flex flex-col mr-12`
const div1i = document.createElement('i')
div1i.className = "fa-solid fa-money-bill-transfer text-3xl text-teal-700 mb-5"
const div1h1 = document.createElement('h1')
div1h1.className = 'text-xl mb-2'
div1h1.innerText = 'Free Transfer'
const div1p = document.createElement('p')
div1p.innerHTML = 'Create a financial experierceay and Automate repeat purchases by scheduling recurring payment'
div1p

const featurediv2 = document.createElement('div')
featurediv2.className = `justify-center items-start flex flex-col mr-12`
const div2i = document.createElement('i')
div2i.className = "fa-solid fa-building-columns text-3xl text-teal-700 mb-5"
const div2h1 = document.createElement('h1')
div2h1.innerText = 'Multiple Account'
div2h1.className = 'text-xl mb-2'
const div2p = document.createElement('p')
div2p.innerText = 'Run your operations with cash from your account and generate yeild on funds Stored in your'

const featurediv3 = document.createElement('div')
featurediv2.className = `justify-center items-start flex flex-col mr-12 `
const div3i = document.createElement('i')
div3i.className = "fa-solid fa-shield-halved text-3xl text-teal-700 mb-5"
const div3h1 = document.createElement('h1')
div3h1.innerText = 'Unmached Security'
div3h1.className = 'text-xl mb-2'
const div3p = document.createElement('p')
div3p.innerText = 'Securely manage yow finances With Organization-wide MFA, card-locking, and account-level controls.'

// Why Finpay
const backgrounddiv = document.createElement('div')
backgrounddiv.className = `bg-[#f6f8fbad] pt-20 pb-[60px]`

const backgrounddivh3 = document.createElement('h3')
backgrounddivh3.innerText = 'WHY US'
backgrounddivh3.className = `text-teal-700 flex justify-center items-center`

const backgrounddivh1 = document.createElement('h1')
backgrounddivh1.innerText = 'Why they prefer Finpay'
backgrounddivh1.className = `text-black text-4xl font-semibold pt-2 flex justify-center items-center mb-12`

const whypreferdiv = document.createElement('div')
whypreferdiv.className = `flex ml-[34px]`
// 3k+
const div3k = document.createElement('div') 
div3k.className = `bg-[#d1dbdf73] flex flex-col ml-[150px] w-[35%] p-9 rounded-3xl`


const h13k = document.createElement('h1')
h13k.innerText = '3K+'
h13k.className = `text-7xl font-bold `

const text3k = document.createElement('h1')
text3k.innerText = 'Business already running on Finpay'
text3k.classList = `text-black text-3xl mt-8`

// instant
const divinstant = document.createElement('div') 
divinstant.className = `bg-[#d1dbdf73] ml-9 w-[35%] p-9 rounded-3xl`


const textinstant = document.createElement('h1')
textinstant.innerText = 'Instant Withdraw your funds at any time'
textinstant.classList = `text-black text-3xl`

const instantimg = document.createElement('img')
instantimg.src = 'arrowpicture.png'
instantimg.className = `w-60 m-auto mt-9`

//Graph

const graph = document.createElement('div')
graph.className = `bg-[#d1dbdf73] w-[71%] ml-[187px] mt-[28px] flex rounded-3xl`


const graphdiv1 = document.createElement('div')
graphdiv1.className = `flex flex-col justify-center p-[28px] w-[37%] ml-[66px] pr-[38px]`
//

const graphh1 = document.createElement('h1')
graphh1.innerText = 'No asset volatility'
graphh1.className = `text-4xl mb-[21px]`

const graphp = document.createElement('p')
graphp.innerText = 'Generate returns on your cash reserves without making any investments.'
graphp.className = `pr-[64px]`

const graphimg = document.createElement('img')
graphimg.src = 'summary.png'
graphimg.className = `p-[37px] ml-[34px]`


// Steps
const stepdiv = document.createElement('div')
stepdiv.className = `bg-[#08344c] p-[63px]`

const stepdiv1 = document.createElement('div')
stepdiv1.className = `p-[40px] mr-[268px]`

const steph3 = document.createElement('h3')
steph3.innerText = 'STEP'
steph3.className = `text-teal-700`

const steph1 = document.createElement('h1')
steph1.innerText = 'Maximize your returns with a Reserve account that generates.'
steph1.className = `text-6xl text-white mt-[23px]`

const stepdiv2 = document.createElement('div')
stepdiv2.className = `flex justify-around mt-[12px]`

const stepimg1 = document.createElement('img')
stepimg1.src = 'open-your-acount.png'
stepimg1.className = ` w-[27%]  rounded-3xl`

const stepimg2 = document.createElement('img')
stepimg2.src = 'transfer-money.png'
stepimg2.className = ` w-[27%]  rounded-3xl`

const stepimg3 = document.createElement('img')
stepimg3.src = 'watch-your-balance.png'
stepimg3.className = ` w-[27%]  rounded-3xl`

//  Last Part
const lastbg = document.createElement('div')
lastbg.className = `flex justify-center items-center flex-col bg-white`

const wemissiondiv= document.createElement('div')
wemissiondiv.className = `mt-[77px] flex justify-center items-center flex-col w-[32%]`

const wemissionh3 = document.createElement('h3')
wemissionh3.innerText = 'OUR MISSION '
wemissionh3.className = `text-xs text-teal-700`

const wemissionh1 = document.createElement('h1')
wemissionh1.innerText = `We've helped innovative companies`
wemissionh1.className = `text-4xl py-0 px-[35px] text-center mt-3`

const wemissionh2 = document.createElement('h2')
wemissionh2.innerText = 'Hundereds of all  sizes and across all industries have made a big improvements with us. '
wemissionh2.className = `text-sm text-center py-0 px-[70px] mt-3`

const wemissiondiv2 = document.createElement('div')
wemissiondiv2.className  =`flex justify-around w-[50%] mt-[47px]`

const revenuediv = document.createElement('div')
revenuediv.className = `text-center`
const revenueh1 = document.createElement('h1')
revenueh1.className = `text-5xl text-semibold mb-[10px]`
revenueh1.innerText = '24%'
const revenueh3 = document.createElement('h3')
revenueh3.innerText = 'Revenue business'

const anualdiv = document.createElement('div')
anualdiv.className = `text-center`
const anualh1 = document.createElement('h1')
anualh1.className = `text-5xl font-semibold mb-[10px]`
anualh1.innerText  ='180K'
const anualh3 = document.createElement('h3')
anualh3.innerText = 'In anual revenue'


const monthsdiv = document.createElement('div')
monthsdiv.className = `text-center`
const monthsh1 = document.createElement('h1')
monthsh1.className = `text-5xl text-semibold mb-[10px]`
monthsh1.innerText = '10+'
const monthsh3 = document.createElement('h3')
monthsh3.innerText = 'Months of runway'

// Choose plan
const chooseplan = document.createElement('div')
chooseplan.className = `mt-[80px]`

const chooseplanh3 = document.createElement('h3')
chooseplanh3.innerText = 'CHOOSE PLAN'
chooseplanh3.className = `text-center text-sm font-semibold`

const chooseplandiv  = document.createElement('div')
chooseplandiv.className = `flex mt-[20px]`
const plusimg = document.createElement('img')
plusimg.src = 'plus.png'
plusimg.className = `w-[456px] mr-[69px] rounded-[26px]`
const premiumimg = document.createElement('img')
premiumimg.src = 'preminum.png'

// Try it now
const tryit = document.createElement('div')
tryit.className  =`bg-[#08344c] w-[80%]  mt-[99px] p-[67px] rounded-3xl flex justify-around`

const tryitdiv1 = document.createElement('div')
tryitdiv1.className = `w-[38%]`

const trydivh2 = document.createElement('h2')
trydivh2.innerText = 'TRY IT NOW'
trydivh2.className = `text-xs text-teal-700`

const trydivh1 = document.createElement('h1')
trydivh1.innerText = 'Ready to level up your payment process?'
trydivh1.className = `text-white text-4xl mx-0 my-[18px]`

const trydivh3 = document.createElement('h3')
trydivh3.innerText = 'Supports small businesses wth simple invoicing, powerful integrations, and cash flow management tools.'
trydivh3.className = `text-sm text-white`



const tryitdiv2 = document.createElement('div')
tryitdiv2.className = `flex items-center justify-center `

const button1 = document.createElement('button')
button1.innerText = 'Get Started Now'
button1.className  =`border-[#2aa0c4fa] border-[2px] py-[9px] px-[17px] rounded-[14px] m-[12px] bg-[#2aa0c4fa] cursor-pointer`


const button2 = document.createElement('button')
button2.innerText = 'Learn More '
button2.className = `border-[#2aa0c4fa] border-[1px] py-[9px] px-[17px] rounded-[14px] m-[12px] cursor-pointer text-white`

const button2I = document.createElement('i')
button2I.className = `fas fa-arrow-up-right-from-square ml-2 text-sm text-white`

// Last section
const lastdiv = document.createElement('div')
lastdiv.className = `flex justify-around w-[80%] mt-[15px] mb-[30px]`

const lastdiv1 = document.createElement('div')

const lastlogo = document.createElement('img')
lastlogo.src = 'finpay-logo.png'
lastlogo.alt = 'finpay Logo'
lastlogo.className = `h-[120px] w-[120px] ml-[32px]`

const lastdiv2 = document.createElement('div')
lastdiv2.className = `mt-[48px] flex`

const solutiondiv = document.createElement('div')

const solutionh2 = document.createElement('h2')
solutionh2.innerText = 'Solutions'
solutionh2.className = 'font-semibold mb-6'
solutiondiv.appendChild(solutionh2)

const solutionitems = ['Small Business', 'Freelancers', 'Customers', 'Taxes']

solutionitems.forEach(text => {
    const solutionitem = document.createElement('p')
    solutionitem.innerText = text
    solutionitem.classList.add('text-sm', 'text-gray-600', 'mb-2', 'cursor-pointer', 'hover:text-gray-900')
    solutiondiv.appendChild(solutionitem)
})

const companydiv = document.createElement('div')
companydiv.className = `mx-[30px]`

const companyh2 = document.createElement('h2')
companyh2.innerText = 'Company'
companyh2.className = `font-semibold mb-6`
companydiv.appendChild(companyh2)



const companyitems = ['About Us ', 'Career', 'Contact']

companyitems.forEach(text => {
    const companyitem = document.createElement('p')
    companyitem.innerText = text
    companyitem.classList.add('text-sm', 'text-gray-600', 'mb-2', 'cursor-pointer', 'hover:text-gray-900')
    companydiv.appendChild(companyitem)
}) 

const learndiv = document.createElement('div')
learndiv.className = `mx-[30px]`

const learnh2 = document.createElement('h2')
learnh2.innerText = 'Learn'
learnh2.className = `font-semibold mb-6`
learndiv.appendChild(learnh2)



const learnitems = ['Blog', 'Ebooks', 'Guide', 'Templetes']

learnitems.forEach(text => {
    const learnitem = document.createElement('p')
    learnitem.innerText = text
    learnitem.classList.add('text-sm', 'text-gray-600', 'mb-2', 'cursor-pointer', 'hover:text-gray-900')
    learndiv.appendChild(learnitem)
}) 

const lastdiv3 = document.createElement('div')
lastdiv3.className = `mt-[48px]`

const div3h3 = document.createElement('h3')
div3h3.innerText = 'Follow us on'
div3h3.className = `text-xs text-[#08344c]`

const div3logodiv = document.createElement('div')
div3logodiv.className = `flex justify-between mt-[12px]`

const div3I1 = document.createElement('i')

div3I1.className = `fa-brands fa-twitter text-[#08344c]`

const div3I2 = document.createElement('i')
div3I2.className = `fa-brands fa-linkedin text-[#08344c]`

const div3I3 = document.createElement('i')
div3I3.className  = `fa-brands fa-facebook text-[#08344c]`


// Create footer
const footer = document.createElement('footer')
footer.className = ' pt-6 pb-6 w-[70%]'

// Horizontal line
const hr = document.createElement('hr')
hr.className = 'border-t border-gray-200 mb-4 w-[90%] mx-auto'


// Copyright text
const copyright = document.createElement('p')
copyright.innerHTML = '&copy; Finpay 2025. All rights reserved.'
copyright.className = 'text-sm text-center text-gray-500'





//Apend
document.body.append(nav)
nav.append(navlogo)
nav.append(navul)
nav.append(butdiv)
butdiv.append(loginbut)
butdiv.append(signup)
document.body.append(herodiv)
herodiv.append(h1div)
h1div.append(heroh11)
h1div.append(heroh12)
h1div.append(heroh2)
h1div.append(emaildiv)
emaildiv.append(input)
emaildiv.append(formbutton)
formbutton.append(formbuttonI)
h1div.append(socialimg)
herodiv.append(container)
container.append(firstimg)
container.append(secondtimg)
document.body.append(featurediv)
featurediv.append(featureh3)
featurediv.append(h1h3div)
h1h3div.append(featureh1)
h1h3div.append(featureh32)
featurediv.append(iconsdiv)
iconsdiv.append(featurediv1)
featurediv1.append(div1i)
featurediv1.append(div1h1)
featurediv1.append(div1p)
iconsdiv.append(featurediv2)
featurediv2.append(div2i)
featurediv2.append(div2h1)
featurediv2.append(div2p)
iconsdiv.append(featurediv3)
featurediv3.append(div3i)
featurediv3.append(div3h1)
featurediv3.append(div3p)
document.body.append(backgrounddiv)
backgrounddiv.append(backgrounddivh3)
backgrounddiv.append(backgrounddivh1)
backgrounddiv.append(whypreferdiv)
whypreferdiv.append(div3k)
div3k.append(h13k)
div3k.append(text3k)
whypreferdiv.append(divinstant)
divinstant.append(textinstant)
divinstant.append(instantimg)
backgrounddiv.append(graph)
graph.append(graphdiv1)
graphdiv1.append(graphh1)
graphdiv1.append(graphp)
graph.append(graphimg)
document.body.append(stepdiv)
stepdiv.append(stepdiv1)
stepdiv1.append(steph3)
stepdiv1.append(steph1)
stepdiv.append(stepdiv2)
stepdiv2.append(stepimg1)
stepdiv2.append(stepimg2)
stepdiv2.append(stepimg3)
document.body.append(lastbg)
lastbg.append(wemissiondiv)
wemissiondiv.append(wemissionh3)
wemissiondiv.append(wemissionh1)
wemissiondiv.append(wemissionh2)
lastbg.append(wemissiondiv2)
wemissiondiv2.append(revenuediv)
revenuediv.append(revenueh1)
revenuediv.append(revenueh3)
wemissiondiv2.append(anualdiv)
anualdiv.append(anualh1)
anualdiv.append(anualh3)
wemissiondiv2.append(monthsdiv)
monthsdiv.append(monthsh1)
monthsdiv.append(monthsh3)
lastbg.append(chooseplan)
chooseplan.append(chooseplanh3)
chooseplan.append(chooseplandiv)
chooseplandiv.append(plusimg)
chooseplandiv.append(premiumimg)
lastbg.append(tryit)
tryit.append(tryitdiv1)
tryitdiv1.append(trydivh2)
tryitdiv1.append(trydivh1)
tryitdiv1.append(trydivh3)
tryit.append(tryitdiv2)
tryitdiv2.append(button1)
tryitdiv2.append(button2)
button2.append(button2I)
lastbg.append(lastdiv)
lastdiv.append(lastdiv1)
lastdiv1.append(lastlogo)
lastdiv.append(lastdiv2)
lastdiv2.append(solutiondiv)
lastdiv2.append(companydiv)
lastdiv2.append(learndiv)
lastdiv.append(lastdiv3)
lastdiv3.append(div3h3)
lastdiv3.append(div3logodiv)
div3logodiv.append(div3I1)
div3logodiv.append(div3I2)
div3logodiv.append(div3I3)
lastbg.append(footer)
footer.appendChild(hr)
footer.append(copyright)
