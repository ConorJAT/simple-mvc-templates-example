// There is no reason for the name here except as an
// example of how to set something for the POST
let name = 'unknown';

const hostIndex = (req, res) => {
  return res.render('index', { 
    title: 'Home Page',
    pageName: 'Home Page',
    userName: name,
  });
};

const hostPage1 = (req, res) => {
  const users = ['Conor', 'Liam', 'Collin'];
  const filtered = users.filter(x => x === req.query.name);

  return res.render('page1', { 
    title: 'Page 1',
    users: filtered,
   });
};

const hostPage2 = (req, res) => {
  return res.render('page2');
};

const getName = (req, res) => {
  return res.json({ name });
};

const setName = (req, res) => {
  if (!req.body.firstname || !req.body.lastname) {
    return res.status(400).json({
      error: 'Missing firstname and/or lastname parameters',
      id: 'setNameMissingParams',
    });
  }

  name = `${req.body.firstname} ${req.body.lastname}`;
  return res.json({ name });
};

const notFound = (req, res) => {
  return res.status(404).render('notFound', { url: req.url });
};

module.exports = {
  index: hostIndex,
  page1: hostPage1,
  page2: hostPage2,
  getName,
  setName,
  notFound,
};
