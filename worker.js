self.addEventListener("message", function(event) {
    this.console.log("Web worker started getting the data:", event.data);

    let data = event.data;

    switch(data) {
        case "lets get started!":
            this.self.postMessage("Web Worker started and replied back!!!!");
            break;
        case "Other":
            this.self.postMessage("different task....and final answer is good");
            break;

        case "fetch":
            // read JSON with fetch API 
            // (more details: http://zetcode.com/articles/javascriptjsonurl/)
            this.fetch('https://my-json-server.typicode.com/typicode/demo/posts')
                .then(function(response) {
                    return response.json();
                })
                .then(function(data) {
                    self.postMessage(data);
                });
            break;
        
        default:
            this.console.log("Invalid request");
            this.console.log(data);
            this.self.postMessage("closing web worker");
            this.self.close;
    }
});