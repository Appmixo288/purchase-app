import mongoose from "mongoose";

export const connectDB = () => {
  // console.log("DATABASE_URL  :  ", process.env.DATABASE_URL);
  const url = process.env.DATABASE_URL;
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then((res) => {
        console.log("> DB connected");
        resolve();
      })
      .catch((e) => {
        console.log("DB connection failed", e);
        reject(e);
      });
  });
};
export * as DBShopServices from "./shop/shop.services.js";
// export * as DBSessionServices from "./session/session.services.js";
