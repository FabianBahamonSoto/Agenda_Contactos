const mongoose = require('mongoose');
const app = require('../Routes/app');

app.set('port', 3000);

mongoose.connect('mongodb://localhost:27017/contactos', {useNewUrlParser: true, useUnifiedTopology: true},
    (err, res) => {
        if(err)
        {
            console.log('Error in moongose ', err);
        }
        else{
            console.log("Successfull conection in the port: ");
            app.listen(app.get('port'), () => {
                console.log(app.get('port'));
            });
        }
    }
);