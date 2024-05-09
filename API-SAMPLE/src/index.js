import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import rateLimit from 'express-rate-limit'
import compression from 'compression'

import userRoute from './route/user.routes'
import appRoute from './route/routes'

const app = express();
const port = 4000;
const limiter = rateLimit({
	windowMs: 60 * 1000, // 1 minute
	limit: 50, // Limit each IP to 50 requests per `window` (here, per 1 minute).
})

//secure Express apps by setting HTTP response headers.
app.use(helmet());
// Enable cors for all requests
app.use(cors());
// Apply rate limit middleware to API requests
app.use(limiter);
// Requests that pass through the middleware will be compressed.
app.use(compression());

app.use('/v1', appRoute)
app.use('/v1/user', userRoute);

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}/v1`);
})