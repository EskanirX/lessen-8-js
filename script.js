let mainDiv = document.getElementById('div-conteiner')
// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'GET'
// })
// .then(function(data){
//     return data.json();
// })
// .then(function(response){
//     response.forEach(element => {
//         Comment(element)
//     });
    
// })
// .catch(function(error){

// })



// function Comment(item){
//     let divItem = document.createElement('div');
//     let h2Item = document.createElement('h2');
//     h2Item.innerText = `${item.id}`;
//     let h3Item = document.createElement('h3');
//     h3Item.innerText = `${item.title}`;
//     divItem.appendChild(h2Item);
//     divItem.appendChild(h3Item);
//     mainDiv.appendChild(divItem);
// }


fetch('https://reqres.in/api/users?page=2', {
    method: 'GET'
})
.then(function(MainData){
    return MainData.json()
})
.then(function(response){
    console.log(response);
    response.data.forEach(element => {
        info(element)
    });
})
.catch(function(error){

})

function info(item){
    let div = document.createElement('div')
    let h2 = document.createElement('h2');
    h2.innerText = `${item.email}`;
    let h3 = document.createElement('h3');
    h3.innerText = `${item.last_name}`;
    div.appendChild(h2);
    div.appendChild(h3);
    mainDiv.appendChild(div)
}