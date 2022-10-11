import { APP_STATUS } from "../../../constants/index.js";
import Shop from "./model.js";

export const addShopData = async ({ shop, data }) => {
  console.log("addShopData");
  await Shop.updateOne({ shop }, { ...data, shop }, { upsert: true });
};

export const uninstallShop = async (shop) => {
  console.log("uninstallShop");
  // delete global.ACTIVE_SHOPIFY_SHOPS[shop];
  await Shop.findOneAndDelete({ shop });
};
export const getShopData = (shop) => Shop.findOne({ shop }).lean();
