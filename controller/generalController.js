exports.setHeaders = (req, res, next) => {
    // const allowedHost = ['http://localhost:4200'];
    // if(allowedHost.indexOf(origin) !== -1)  res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods','GET, POST, PUT');
    res.header('Access-Control-Allow-Headers','Content-Type, Authorization, Origin, Accept, X-Requested-With');
    res.header('Access-Control-Allow-Credentials',true);
    next();
};

exports.notFound = (req, res, next) => {
    res.status(404).json({message: 'Route is not found'});
};

