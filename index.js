const express = require('express');
const app = express();

app.disable('etag');
app.use(express.json());

app.use('/users', require('./routes/peralta_users.routes'));
app.use('/products', require('./routes/salva_products.routes'));
app.use('/orders', require('./routes/rano_orders.routes'));
app.use('/resource', require('./routes/superio_suppliers.routes'));
app.use('/categories', require('./routes/paligsa_categories.routes'));
app.use('/reviews', require('./routes/morte_reviews.routes'));
app.use('/notifications', require('./routes/sienes_notifications.routes'));

app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: {
      code: "404 (Not Found)",
      message: "Target Resource or Endpoint does Not Exist."
    }
  });
});

app.listen(1234, () => {
  console.log('Server is running on http://localhost:1234');
});