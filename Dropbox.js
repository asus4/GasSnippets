/**
* Dropbox api from GAS
*/
var Dropbox = (function() {
  
  var DROPBOX_URL = "https://content.dropboxapi.com/2/";
  
  /**
  * Constructor
  * @param {string} token - the dropbox api token
  */
  var Dropbox = function(token) {
    this.apiToken = token;
  };
  
  /**
  * post 
  * @param {string} rest the rest uri
  * @param {object} param parameters
  * @param {Blob} data post data (optional)
  * @return {ApiResponse} the response
  */
  Dropbox.prototype.postRequest = function(rest, param, data) {
    var uri = DROPBOX_URL + rest;
    var options = {
      method : 'post',
      headers : {
        Authorization : 'Bearer ' + this.apiToken,
        'Dropbox-API-Arg' : JSON.stringify(param)
      }
    };
    
    if(data) {
      options.contentType = 'application/octet-stream';
      options.payload = data;
    }
    
    Logger.log(options);
    return UrlFetchApp.fetch(uri, options);
  }
  
  /**
  * files/download
  * @param {string} path the download file path
  * @return {ApiResponse} the response
  */
  Dropbox.prototype.download = function(path) {
    var param = {
      path:path
    };
    return this.postRequest('files/download', param);
  };
  
  /**
  * files/upload
  * @param {string} path the upload file path
  * @return {ApiResponse} the response
  */
  Dropbox.prototype.upload = function(path, data) {
    var param = {
      path : path,
      mode : 'overwrite'
    };
    return this.postRequest('files/upload', param, data);
  };
  
  return Dropbox;
})();
