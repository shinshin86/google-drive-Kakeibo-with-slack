function kakeiboReport() {
  var slackWebhookUrl = {SLACK_WEB_HOOK_URL};
  var totalGraphUrl = {TOTAL_GRAPH_URL_FROM_DATA_PORTAL};
  var eachItemGraphUrl = {EACH_ITEM_GRAPH_URL_FROM_DATA_PORTAL}

  reporting(slackWebhookUrl, totalGraphUrl, 'It is total graph');
  reporting(slackWebhookUrl, eachItemGraphUrl, 'It is each item graph');
}

function reporting(webhookUrl, graphUrl, message){
  var text = message + "\n" + graphUrl + "\n";
  var payload = { 'text': text };
    
  var options = {
    'method' : 'post',
    'contentType' : 'application/json',
    'payload' : JSON.stringify(payload),
  };
    
  UrlFetchApp.fetch(webhookUrl, options);
}

