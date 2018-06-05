function parseFormValues(e) {
  var data = ''
  var username = '';
  var icon = ':hatching_chick:';
  var channelName = '#your_kakeibo_channel'; // 家計簿報告の通知を行いたいSlackチャンネルを設定
  var msg = '';
  var msgTitle = '家計簿報告';
  
  var formResponse = e.response;
  var itemResponse = formResponse.getItemResponses();
   for (var i = 0; i < itemResponse.length; i++){
     var formData = itemResponse[i];
     var title = formData.getItem().getTitle();
     var response = formData.getResponse();
    
     data += '■'
     data += title
     data += ':'
     data += response
     data += '\n'
     
     // utility  
     switch(i) {
       // username
       case 0:
         username = response + "さんの家計簿報告BOT";
         msg  = ":moneybag:" + response + "さんが家計簿報告をしました:moneybag:";
         break;
     }   
  }
  
  var attach = {
    pretext: msg,
    title: msgTitle,
    text: data,
    color: "#7CD197"
  }
  
  var attachments = []
  attachments.push(attach);
  
  var jsonData = {
    username: username,
    channel: channelName,
    icon_emoji: icon,
    attachments: attachments
  }

  return jsonData;
}    

function sendToSlack(data, url) {
  var payload = JSON.stringify(data);
  var options = {
    "method" : "POST",
    "contentType" : "application/json",
    "payload" : payload
  };
  UrlFetchApp.fetch(url, options);
}

function onFormSubmit(e){
  // webhook url
  var POST_URL = "" // あなたが使用するSlackのwebhook URLを入力してください

  sendToSlack(parseFormValues(e), POST_URL);
}
