function generateTopic(){
    return Math.ceil(Math.random() * 100000);
}

function sendMessage(messageBox){
    var sentNoticeHeader = "Your message has been sent./nHere is your message:";
    alert(sentNoticeHeader + messageBox);
}
var sns = new AWS.SNS();

function test() {
    sns.addPermission(params, function (err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else     console.log(data);           // successful response
    });
}

