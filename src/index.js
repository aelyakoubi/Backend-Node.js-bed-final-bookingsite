import * as Sentry from '@sentry/node';
import 'dotenv/config';
import express from 'express';
import errorHandler from './middleware/errorHandler.js';
import log from './middleware/logMiddleware.js';
import amenitiesRouter from './routes/amenities.js';
import bookingsRouter from './routes/bookings.js';
import hostsRouter from './routes/hosts.js';
import loginRouter from './routes/login.js';
import propertiesRouter from './routes/properties.js';
import reviewsRouter from './routes/reviews.js';
import usersRouter from './routes/users.js';

const app = express();

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  integrations: [
    new Sentry.Integrations.Http({
      tracing: true,
    }),
    new Sentry.Integrations.Express({
      app,
    }),
  ],
  tracesSampleRate: 1.0,
});

app.use(Sentry.Handlers.requestHandler());
app.use(Sentry.Handlers.tracingHandler());

app.get('/', (req, res) => {
  res.send(
    'I have included a `.env` file for testing purposes only, to access the database in the development environment. This setup is not intended for deployment or production use.'
  );
});

app.use(express.json());
app.use(log);

app.use('/users', usersRouter);
app.use('/bookings', bookingsRouter);
app.use('/properties', propertiesRouter);
app.use('/reviews', reviewsRouter);
app.use('/hosts', hostsRouter);
app.use('/amenities', amenitiesRouter);

app.use('/login', loginRouter);

app.use(Sentry.Handlers.errorHandler());

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
