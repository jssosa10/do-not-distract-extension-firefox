var no_distract_service = {
    enabled : false,
    init : function(){
        browser.browserAction.onClicked.addListener(function(){
            no_distract_service.toggle();
        });

        browser.runtime.onMessage.addListener(no_distract_service.handleMessage);
        return this;
    },
    toggle :function(){
        no_distract_service.enabled = !no_distract_service.enabled;
        no_distract_service.updateIcon();
        return this;
    },
    updateIcon : function(){
        let buttonStatus = no_distract_service.enabled ? 'on' :'off';
        browser.browserAction.setIcon({path:{48:'./icons/no-distract-'+buttonStatus+'-48.png'}});
        return this;
    },
    handleMessage : function (request, sender, sendResponse) {
        sendResponse({response: no_distract_service.enabled});
    }
}
var bg = no_distract_service.init();