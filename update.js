// Block websites
function isBlockedSite() {
    const blockedSites = [
        'correo.uniandes.edu.co',
        'facebook.com',
        'youtube.com',
        '9gag.com'
    ];

    for (let i = 0; i < blockedSites.length; ++i) {
        if (location.href.indexOf(blockedSites[i]) !== -1) {
            return true;
        }
    }
    return false;
}

if (isBlockedSite()) {
    const NoDistractScreenHTML = `
    <!--BEGIN_NO_DISTRACT_CODE-->
    <style>
    #distract-div {
        background-color: Firebrick;
        z-index: 2000000000;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }
    #distract-div .distract-text {
        width: 100%;
        text-align: center;
        margin: auto;
    }
    #distract-div h1 {
        padding-top: 20%;
        font-size: 5em;
        font-family: script;
        color: white;
    }
    </style>
    <div id="distract-div">
        <h1 class="distract-text">Be productive!</h1>
    </div>
    <!--END_NO_DISTRACT_CODE-->`
    function handleResponse(message) {
        console.log(`background script sent a response: ${message.response}`);
        if(message.response){
            document.documentElement.innerHTML = NoDistractScreenHTML;
        }  
    }
      
    function handleError(error) {
        console.log(`Error: ${error}`);
    }

    var sending = browser.runtime.sendMessage({"content":1});
    sending.then(handleResponse, handleError);
}