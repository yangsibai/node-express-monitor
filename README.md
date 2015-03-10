##node-express-monitor

Monitor express request elapsed time.

###Installation

    npm install express-monitor

###Get started

    var app = express();
    var hanlder = function(request, elapsedTime){
        //
    };
    var timeLimit = 500ms;
    require("express-monitor")(hanlder, timeLimit);

###License

MIT.

