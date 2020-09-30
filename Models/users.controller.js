const Users = require('../Models/users');

//Funcion para crear nuevo usuario
function newContact(req, res)
{
    const userCreate = new Users();

    userCreate.nombre = req.body.nombre;
    userCreate.telefono = req.body.telefono;
    userCreate.fechaNacimiento = req.body.fechaNacimiento;
    userCreate.direccion = req.body.direccion;
    userCreate.correo = req.body.correo; 

    userCreate.save((err, newUser) => 
    {
        if(err)
        {
            res.status(500).send({status: 500, message: 'Server error'});
        }
        else
        {
            if(!newUser)
            {
                res.status(400).send({status: 400, message: 'It was not possible create the new user'});
            }
            else
            {
                res.status(200).send(
                    {
                        status: 200,
                        message: 'User created successfully', 
                        newUser,
                    }
                );
            }
        }
    });
}

//Funcion para obtener los usuarios creados
function getAllContact(req, res)
{
    Users.find((err, userFound) =>
        {
            if(err)
            {
                res.status(500).send({status: 500, message: 'Server error'});
            }
            else
            {
                if(!userFound)
                {
                    res.status(400).send({status: 400, message: 'It was not possible find the users'});
                }
                else
                {
                    res.status(200).send(
                        {
                            status: 200,
                            message: 'Users found successfully',
                            userFound,
                        }
                    );
                }
            }
        }
    );
}

//Obtener un usuario para su edicion
function getOneContact(req, res)
{
    const idGetAll = req.params.id;
    Users.findById( idGetAll, (err, userIdFound) =>
    {
        if(err)
        {
            res.status(500).send({status: 500, message: 'Server error'});
        }
        else
        {
            if(!userIdFound)
            {
                res.status(400).send({status: 400, message: 'It was not possible to find the user by the id'});
            }
            else 
            {
                res.status(200).send(
                    {
                        status: 200,
                        message: 'User found successfully',
                        userIdFound,
                    });
            }
        }
    }
    );
}

//Funcion para actualizar los datos de un usuario
function updateContact(req, res)
{
    const idUpdate = req.params.id; 
    const newData = req.body; 
    
    Users.findByIdAndUpdate(idUpdate, newData, (err, updateUser) =>
    {
        if(err)
        {
            res.status(500).send({status: 500, message: 'Server error'});
        }
        else
        {
            if(!updateUser)
            {
                res.status(400).send({status: 400, message: 'It was not possible to update the user'});
            }
            else
            {
                res.status(200).send(
                {
                    status: 200,
                    message: 'User update successfully',
                    updateUser,
                });
            }
        }
    });
}
//Funcion para eliminar un usuario
function deleteContact(req, res)
{
    const idDelete = req.params.id;

    Users.findByIdAndDelete(idDelete, (err, userDelete) =>
    {
        if(err)
        {
            res.status(500).send({status: 500, message: 'Server error'});
        }
        else
        {
            if(!userDelete)
            {
                res.status(400).send({status: 400, message: 'It was not possible to delete the user'});
            }
            else
            {
                res.status(200).send(
                    {
                        status: 200,
                        message: 'User delete successfully',
                        userDelete, 
                    }
                );
            }
        }
    });
}

function buscador(req, res)
{
    let termino = ''; 

    if(req.params && req.params.name)
    {
        termino = new RegExp(`.*${req.params.name}.*`, 'i');
    }

    Users.find({nombre: termino} || {telefono: termino}, (err, datoTermino) => 
    {
        if(err)
        {
            res.status(500).send({status: 500, message: 'Server error'});
        }
        else 
        {
            if(!datoTermino)
            {
                res.status(400).send({status: 400, message: 'It was not possible find the contact'});
            }
            else 
            {
                res.status(200).send
                ({
                    status: 200, message: 'Contact found successfully',
                    datoTermino,
                })
            }
        }
    }) 
}

module.exports = 
{
    newContact,
    getAllContact,
    getOneContact,
    updateContact,
    deleteContact,
    buscador,
}