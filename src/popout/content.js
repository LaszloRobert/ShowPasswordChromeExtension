chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message,sender,sendResponse){
    if (message.txt === "show"){
        let pass = document.getElementsByTagName('input');

        for (elem of pass){
            if(elem.type === "password"){
                elem.type = 'text';
            }
        }
       
    }
}