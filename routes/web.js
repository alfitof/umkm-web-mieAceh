const authControllers = require('../app/http/controllers/authControllers');
const cartControllers = require('../app/http/controllers/customers/cartControllers');
const orderControllers = require('../app/http/controllers/customers/orderControllers');
const homeControllers = require('../app/http/controllers/homeControllers');
const adminOrderControllers = require('../app/http/controllers/admin/orderControllers');
const statusControllers = require('../app/http/controllers/admin/statusControllers');

const guest = require('../app/http/middleware/guest');
const auth = require('../app/http/middleware/auth');
const admin = require('../app/http/middleware/admin');

function initRoutes(app) {
  app.get('/', homeControllers().index);

  app.get('/login', guest, authControllers().login);

  app.post('/login', authControllers().postLogin);

  app.get('/register', guest, authControllers().register);

  app.post('/register', authControllers().postRegister);

  app.post('/logout', authControllers().logout);

  app.get('/cart', cartControllers().index);

  app.post('/update-cart', cartControllers().update);

  app.post('/orders', auth, orderControllers().store);
  app.get('/customer/orders', auth, orderControllers().index);
  app.get('/customer/orders/:id', auth, orderControllers().show);

  app.get('/admin/orders', admin, adminOrderControllers().index);
  app.post('/admin/order/status', admin, statusControllers().update);
}

module.exports = initRoutes;
