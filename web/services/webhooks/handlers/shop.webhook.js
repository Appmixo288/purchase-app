import { uninstallShop } from "../../db/shop/shop.services.js";

export const appUninstallWebhookHandler = async (topic, shop, body) => {
  // delete ACTIVE_SHOPIFY_SHOPS[shop];
  await uninstallShop(shop);
};
