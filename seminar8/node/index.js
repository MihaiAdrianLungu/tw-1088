const app = require('./app/app');
const bcrypt = require('bcrypt');
const User = require('./database/models/User');

const handleErrorResponse = (res, error, message) => { 
  console.error(`Error: ${message}`, error); 
  return res.status(500).json({ success: false, message: `Error ${message}.` }); 
};

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/users', async function(req, res) {
  try {
    const users = await User.findAll();

    users?.forEach(user => {
      delete user.dataValues.password;
    })

    res.status(200).json(users);
  } catch (error) {
    handleErrorResponse(res, error, 'Error retrieving users');
  }
})

app.get('/users/:id', async function(req, res) {
  try {
    const id = req.params.id;

    const user = await User.findByPk(id);

    if(!user) {
      res.status(404).json({success: false, message: 'User not found', data: {}});
    }

    delete user.dataValues.password;

    return res.status(200).json({success: true, message: 'User was found', data: user})
  } catch (error) {
    handleErrorResponse(res, error, 'Error retrieving users');
  }
})

app.post('/users', async function(req, res) {
  try {
    const {username, password, email, role} = req.body;

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const user = await User.create({
      username: username,
      password: hash,
      email: email,
      role: role
    })

    delete user.dataValues.password;

    res.status(201).json(user);
  } catch (error) {
    handleErrorResponse(res, error, 'Error retrieving users');
  }
})

app.put('/users/:id', async function(req, res) {
  try {
    const id = req.params.id;
    const user = await User.findByPk(id);

    if(!user) {
      res.status(404).json({success: false, message: 'User not found', data: {}});
    }

    const updatedUser = await user.update(req.body);

    delete updatedUser.dataValues.password;

    return res.status(200).json({success: true, message: 'User updated', data: updatedUser});
  } catch (error) {
    handleErrorResponse(res, error, 'Error retrieving users');
  }
})

app.delete('/users/:id', async function(req, res) {
  try {
    const id = req.params.id;

    const user = await User.findByPk(id);

    if(!user) {
      res.status(404).json({success: false, message: 'User not found', data: {}});
    }

    await user.destroy();

    return res.status(200).json({success: true, message: 'User deleted', data: {}})
  } catch (error) {
    handleErrorResponse(res, error, 'Error retrieving users');
  }
})

app.listen(3000);