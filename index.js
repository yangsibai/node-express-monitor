monitor = function (app, handler, time, special) {
    if (time === undefined) {
        time = 500;
    }
    if (special === undefined) {
        special = {}
    }

    app.use(function (req, res, next) {
        var start = Date.now();
        res.on('finish', function () {
            var end = Date.now();
            var elapsed = end - start;
            if ((special.hasOwnProperty(req.path) && special[req.path] > time) || elapsed > time) {
                handler.call(this, req, time);
            }
        });
    });
};

module.exports = monitor;