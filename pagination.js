
const title = ["Id", "Name", "Email"]
const table = document.createElement("table")
table.className = "table";
const thead = document.createElement("thead")
thead.className = "thead-dark";
const tbody = document.createElement("tbody")
tbody.className = "thead-dark";
table.append(thead, tbody)
function renderdata(data=[]){
const nodes=[]
for(let i=0;i<data.length;i++) {
const tcell=document.createElement("td")
tcell.innerText=title[i]
nodes.push(tcell)
}
return nodes;
}
thead.append(...renderdata(title))
document.body.append(table)
table.append(thead)



let array = []

document.body.append(table)

const people = fetch("https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json");
people.then((result) => result.json())
    .then((data) => {

        
        // console.log(data);

        array.push(data)

        let inititalIndex = 0
        let finalIndex = 10

        for (i = inititalIndex; i < finalIndex; i++) {

            
            let tr = document.createElement('tr')
            let tdID = document.createElement('td')
            let tdName = document.createElement('td')
            let tdEmail = document.createElement('td')
            tdID.innerHTML = data[i].id
            tdName.innerHTML = data[i].name
            tdEmail.innerHTML = data[i].email
            tr.appendChild(tdID)
            tr.appendChild(tdName)
            tr.appendChild(tdEmail)
            tbody.appendChild(tr)

        }


        let prev = document.getElementById('prev')

        prev.addEventListener('click', () => {
            if(inititalIndex>0){  inititalIndex = inititalIndex - 10;
            finalIndex = finalIndex - 10
            tbody.innerHTML = ''

            for (i = inititalIndex; i < finalIndex; i++) {

                let tr = document.createElement('tr')
                let tdID = document.createElement('td')
                let tdName = document.createElement('td')
                let tdEmail = document.createElement('td')
                tdID.innerHTML = data[i].id
                tdName.innerHTML = data[i].name
                tdEmail.innerHTML = data[i].email
                tr.appendChild(tdID)
                tr.appendChild(tdName)
                tr.appendChild(tdEmail)
                tbody.appendChild(tr)

            }}
          
        })
          
        let buttonone=document.getElementById("1")
        buttonone.addEventListener('click',()=>{
        
            tbody.innerHTML = ''
            for (i = 0; i < 10; i++) {

                let tr = document.createElement('tr')
                let tdID = document.createElement('td')
                let tdName = document.createElement('td')
                let tdEmail = document.createElement('td')
                tdID.innerHTML = data[i].id
                tdName.innerHTML = data[i].name
                tdEmail.innerHTML = data[i].email
                tr.appendChild(tdID)
                tr.appendChild(tdName)
                tr.appendChild(tdEmail)
                tbody.appendChild(tr)
                }
        }
        )

        let buttontwo=document.getElementById("2")
        buttontwo.addEventListener('click',()=>{
        
            tbody.innerHTML = ''
            for (i = 10; i < 20; i++) {

                let tr = document.createElement('tr')
                let tdID = document.createElement('td')
                let tdName = document.createElement('td')
                let tdEmail = document.createElement('td')
                tdID.innerHTML = data[i].id
                tdName.innerHTML = data[i].name
                tdEmail.innerHTML = data[i].email
                tr.appendChild(tdID)
                tr.appendChild(tdName)
                tr.appendChild(tdEmail)
                tbody.appendChild(tr)
                }
        }
        )


        let buttonthree=document.getElementById("3")
        buttonthree.addEventListener('click',()=>{
        
            tbody.innerHTML = ''
            for (i = 20; i < 30; i++) {

                let tr = document.createElement('tr')
                let tdID = document.createElement('td')
                let tdName = document.createElement('td')
                let tdEmail = document.createElement('td')
                tdID.innerHTML = data[i].id
                tdName.innerHTML = data[i].name
                tdEmail.innerHTML = data[i].email
                tr.appendChild(tdID)
                tr.appendChild(tdName)
                tr.appendChild(tdEmail)
                tbody.appendChild(tr)
                }
        }
        )

        let buttonfour=document.getElementById("4")
        buttonfour.addEventListener('click',()=>{
        
            tbody.innerHTML = ''
            for (i = 30; i < 40; i++) {

                let tr = document.createElement('tr')
                let tdID = document.createElement('td')
                let tdName = document.createElement('td')
                let tdEmail = document.createElement('td')
                tdID.innerHTML = data[i].id
                tdName.innerHTML = data[i].name
                tdEmail.innerHTML = data[i].email
                tr.appendChild(tdID)
                tr.appendChild(tdName)
                tr.appendChild(tdEmail)
                tbody.appendChild(tr)
                }
        }
        )

        let buttonfive=document.getElementById("5")
        buttonfive.addEventListener('click',()=>{
        
            tbody.innerHTML = ''
            for (i = 40; i < 50; i++) {

                let tr = document.createElement('tr')
                let tdID = document.createElement('td')
                let tdName = document.createElement('td')
                let tdEmail = document.createElement('td')
                tdID.innerHTML = data[i].id
                tdName.innerHTML = data[i].name
                tdEmail.innerHTML = data[i].email
                tr.appendChild(tdID)
                tr.appendChild(tdName)
                tr.appendChild(tdEmail)
                tbody.appendChild(tr)
                }
        }
        )


        let buttonsix=document.getElementById("6")
        buttonsix.addEventListener('click',()=>{
        
            tbody.innerHTML = ''
            for (i = 50; i < 60; i++) {

                let tr = document.createElement('tr')
                let tdID = document.createElement('td')
                let tdName = document.createElement('td')
                let tdEmail = document.createElement('td')
                tdID.innerHTML = data[i].id
                tdName.innerHTML = data[i].name
                tdEmail.innerHTML = data[i].email
                tr.appendChild(tdID)
                tr.appendChild(tdName)
                tr.appendChild(tdEmail)
                tbody.appendChild(tr)
                }
        }
        )

        let buttonseven=document.getElementById("7")
        buttonseven.addEventListener('click',()=>{
        
            tbody.innerHTML = ''
            for (i = 60; i < 70; i++) {

                let tr = document.createElement('tr')
                let tdID = document.createElement('td')
                let tdName = document.createElement('td')
                let tdEmail = document.createElement('td')
                tdID.innerHTML = data[i].id
                tdName.innerHTML = data[i].name
                tdEmail.innerHTML = data[i].email
                tr.appendChild(tdID)
                tr.appendChild(tdName)
                tr.appendChild(tdEmail)
                tbody.appendChild(tr)
                }
        }
        )


        let buttoneight=document.getElementById("8")
        buttoneight.addEventListener('click',()=>{
        
            tbody.innerHTML = ''
            for (i = 70; i < 80; i++) {

                let tr = document.createElement('tr')
                let tdID = document.createElement('td')
                let tdName = document.createElement('td')
                let tdEmail = document.createElement('td')
                tdID.innerHTML = data[i].id
                tdName.innerHTML = data[i].name
                tdEmail.innerHTML = data[i].email
                tr.appendChild(tdID)
                tr.appendChild(tdName)
                tr.appendChild(tdEmail)
                tbody.appendChild(tr)
                }
        }
        )

        let buttonnine=document.getElementById("9")
        buttonnine.addEventListener('click',()=>{
        
            tbody.innerHTML = ''
            for (i = 80; i < 90; i++) {

                let tr = document.createElement('tr')
                let tdID = document.createElement('td')
                let tdName = document.createElement('td')
                let tdEmail = document.createElement('td')
                tdID.innerHTML = data[i].id
                tdName.innerHTML = data[i].name
                tdEmail.innerHTML = data[i].email
                tr.appendChild(tdID)
                tr.appendChild(tdName)
                tr.appendChild(tdEmail)
                tbody.appendChild(tr)
                }
        }
        )

        let buttonten=document.getElementById("10")
        buttonten.addEventListener('click',()=>{
        
            tbody.innerHTML = ''
            for (i = 90; i < 100; i++) {

                let tr = document.createElement('tr')
                let tdID = document.createElement('td')
                let tdName = document.createElement('td')
                let tdEmail = document.createElement('td')
                tdID.innerHTML = data[i].id
                tdName.innerHTML = data[i].name
                tdEmail.innerHTML = data[i].email
                tr.appendChild(tdID)
                tr.appendChild(tdName)
                tr.appendChild(tdEmail)
                tbody.appendChild(tr)
                }
        }
        )





        let next = document.getElementById('next')
        next.addEventListener('click', () => {
             if(finalIndex<100){  inititalIndex = inititalIndex + 10;
                finalIndex = finalIndex + 10
                tbody.innerHTML = ''
             for (i = inititalIndex; i < finalIndex; i++) {

                let tr = document.createElement('tr')
                let tdID = document.createElement('td')
                let tdName = document.createElement('td')
                let tdEmail = document.createElement('td')
                tdID.innerHTML = data[i].id
                tdName.innerHTML = data[i].name
                tdEmail.innerHTML = data[i].email
                tr.appendChild(tdID)
                tr.appendChild(tdName)
                tr.appendChild(tdEmail)
                tbody.appendChild(tr)

            }
}
          
        })



    })

console.log(array)