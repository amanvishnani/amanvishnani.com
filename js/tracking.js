CommonWeb.Callback = function (event, object) {
    object.timestamp = new Date();
    let metadata = {
        appName: navigator.appName,
        platform: navigator.platform,
        language: navigator.language,
        cpu: navigator.hardwareConcurrency,
        memory: navigator.deviceMemory
    }
    object.metadata = metadata;
    console.log(event);
    console.log(object);
}

$(document).ready(function name(params) {
    // add a user-specific GUID to all events for tracking user flow
    CommonWeb.trackSession();

    // track the pageview
    CommonWeb.trackPageview();

    // track clicks for each link on the page
    CommonWeb.trackClicks();

    // track submissions for every form on the page
    CommonWeb.trackFormSubmissions();

    // track changes to every input on the page
    CommonWeb.trackInputChanges($("input"));

    CommonWeb.trackInputChanges($("textarea"));

    CommonWeb.trackClicksPassive($("img"));
    CommonWeb.trackClicksPassive($("input#name"));
    CommonWeb.trackClicksPassive($(".container"));

});
