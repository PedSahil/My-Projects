let postform = document.getElementById("postdata");
postform.addEventListener("submit",(e)=>{
    e.preventDefault();
    let formData = new FormData(postform);
    let username = formData.get("username");
    let password = formData.get("password");
    let postdata = {username,password};
    let data = fetch("http://localhost:3000/users",{
        method:"POST",
        headers:{
            "Content-type":"Application/json"
        },
        body:JSON.stringify(postdata)
    })
})
// ===============================
// ^ Update
let updateform = document.getElementById("updatedata");
updateform.addEventListener("submit",(e)=>{
    e.preventDefault();
    let formData = new FormData(updateform);
    let username = formData.get("username");
    let password = formData.get("password");
    let postdata = {username,password};
    let id_num = document.getElementById("id_num").value;
    let data = fetch(`http://localhost:3000/users/${id_num}`,{
        method:"PUT",
        headers:{
            "Content-type":"Application/json"
        },
        body:JSON.stringify(postdata)
    })
})
// =========================================
// ^ Delete the data
let deleteform = document.getElementById("deletedata");
deleteform.addEventListener("submit",(e)=>{
    e.preventDefault();
    let id_num = document.getElementById("del_id").value;
    let data = fetch(`http://localhost:3000/users/${id_num}`,{
        method:"DELETE"
    })
})

// ==============================
// ^ get data
let getData = document.getElementById("get_data")
getData.addEventListener("click",()=>{
    document.getElementById("main_table").innerHTML=`
    <table>
    <thead>
    <th>SLNO</th>
    <th>Id</th>
    <th>userName</th>
    <th>Password</th>
    </thead>
    <tbody id="tbody"></tbody>
    </table>
    `
    let data = fetch("http://localhost:3000/users");
    console.log(data);
    data.then((m)=>{
        console.log(m);
        let finaldata = m.json();
        console.log(finaldata);
        finaldata.then((y)=>{
            console.log(y);
            let tbody = document.getElementById("tbody");
            y.map((e,i)=>{
                tbody.innerHTML +=`
                    <tr>
                        <td>${i+1}</td>
                        <td>${e.id}</td>
                        <td>${e.username}</td>
                        <td>${e.password}</td>
                    </tr>
                `
            })
        })
    })
})

