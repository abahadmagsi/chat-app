var sendButton = ()=>{
    let msgtxt = document.getElementById('msgtxt');
    firebase.database().ref('masseges').push(msgtxt.value);
    msgtxt.value =""


    
}
firebase.database().ref('masseges').on('child_added',(data1)=>{
    var txtBox = document.getElementById('txtBox');
    txtBox.innerHTML += `<li>${data1.val()}</li>`
})

var receverMsg = ()=>{firebase.database().ref('masseges').on('child_added',(data)=>{
    let msgBox = document.getElementById('msgBoxR');
    msgBox.innerHTML +=`<li>${data.val()}</li>`;

    })
}
receverMsg()