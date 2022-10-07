import axios from "axios";
import { Shopify, LATEST_API_VERSION } from "@shopify/shopify-api";
export const createShopifyRestClient = (shop, accessToken) => {
  return axios.create({
    baseURL: `https://${shop}/admin/api/${LATEST_API_VERSION}`,
    responseType: "json",
    headers: {
      "X-Shopify-Access-Token": accessToken,
    },
  });
};

export const createShopifyGraphqlClient = (shop, accessToken) =>
  new Shopify.Clients.Graphql(shop, accessToken);

export * as ShopifyShopServices from "./shop.services.js";
