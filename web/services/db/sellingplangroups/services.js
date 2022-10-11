import { APP_STATUS } from "../../../constants/index.js";
import Sellplan from "./model.js";

export const addSellPlanGroupsData = async ({ plan_id, data }) => {
  console.log("Add sellingPLanGroups");
  await Sellplan.updateOne({ plan_id }, { ...data, plan_id }, { upsert: true });
};

export const deleteSellPlanGroupsData = async (plan_id) => {
  console.log("uninstallShop");
  // delete global.ACTIVE_SHOPIFY_SHOPS[shop];
  await Sellplan.findOneAndDelete({ plan_id });
};
export const getSellPlanGroupsData = (plan_id) =>
  Sellplan.findOne({ plan_id }).lean();
