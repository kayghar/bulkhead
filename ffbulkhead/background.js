function createProxyTab(tab) {
	var url_raw = tab.url
	
    var i_protocol = url_raw.indexOf('://') + 3;
	var url_protocol = url_raw.substr(0,i_protocol);
    var url_post_protocol = url_raw.substr(i_protocol);
	
    var i_tld = url_post_protocol.indexOf('/');
    var url_tld = url_post_protocol.substr(0,i_tld);
	var url_post_tld = url_post_protocol.substr(i_tld);
	
	url_tld = url_tld.replace(/\./g, "-");
	
    var tab_url = url_protocol + url_tld + ".proxy.lib.uwaterloo.ca" + url_post_tld;
	
	browser.tabs.create({
      active: true,
      url: tab_url
    });
};

browser.browserAction.onClicked.addListener(createProxyTab);
