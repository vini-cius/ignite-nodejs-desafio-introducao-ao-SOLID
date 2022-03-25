import { app } from ".";
import swaggerUi from 'swagger-ui-express';

import swaggerDocument from './swagger.json';

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.listen(3333, () => console.log("Server is running!"));
