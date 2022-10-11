import mongoose from "mongoose";
const sellingPlanGroupsSchema = mongoose.Schema({
  shop: {
    type: String,
    trim: true,
    required: true,
    unique: true,
  },
  plan_id: {
    type: String,
    trim: true,
    required: true,
    unique: true,
  },
  pu_name: {
    type: String,
    trim: true,
  },
  in_name: {
    type: String,
    trim: true,
    required: true,
    unique: true,
  },
  products_ids: {
    type: Array,
    trim: true,
  },
  plans: {
    type: String,
    trim: true,
    required: true,
  },
  updated_date: {
    type: Date,
  },
  create_date: {
    type: Date,
    default: Date.now,
  },
});

const sellingPlanGroups = mongoose.model(
  "sellingPlanGroups",
  sellingPlanGroupsSchema
);

export default sellingPlanGroups;
