import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";

//db connection
const PORT = process.env.PORT || 5001;
connectToDatabase()
  .then(() => {
    app.listen(PORT, () =>
      console.log("server opened & connected to database")
    );
  })
  .catch((err) => console.log(err));
