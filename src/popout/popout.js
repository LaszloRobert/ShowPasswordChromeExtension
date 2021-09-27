document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('button');
    button.addEventListener('click',function(event){
        setup();
    });
});

function setup(){
    let params = 
    {
        active:true,
        currentWindow: true
    }
        
     chrome.tabs.query(params, gotTabs);

    function gotTabs(tabs){
        let message = 
        {
            txt:"show"
        }

        chrome.tabs.sendMessage(tabs[0].id, message);
    }

}


