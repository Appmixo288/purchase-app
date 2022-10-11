export const SELLING_PLAN_GROUPS_CREATE = (data) => {
  return `mutation {
    sellingPlanGroupCreate(
      input: {
        name: "Subscribe and save"
        merchantCode: "subscribe-and-save"
        
        options: ["Delivery every"]
        position: 1
        sellingPlansToCreate: [
          {
            name: "Delivered every DAY"
            options: "1 DAY(s)"
            position: 1
            category: SUBSCRIPTION
            billingPolicy: { recurring: { interval: DAY, intervalCount: 1 } }
            deliveryPolicy: { recurring: { interval: DAY, intervalCount: 1 } }
            pricingPolicies: [
              {
                fixed: {
                  adjustmentType: PERCENTAGE
                  adjustmentValue: { percentage: 15.0 }
                }
              }
            ]
          }
          {
            name: "Delivered every two DAY"
            options: "2 DAY(s)"
            position: 2
            category: SUBSCRIPTION
            billingPolicy: { recurring: { interval: DAY, intervalCount: 2 } }
            deliveryPolicy: { recurring: { interval: DAY, intervalCount: 2 } }
            pricingPolicies: [
              {
                fixed: {
                  adjustmentType: PERCENTAGE
                  adjustmentValue: { percentage: 10.0 }
                }
              }
            ]
          }
          {
            name: "Delivered every three DAY"
            options: "3 DAY(s)"
            position: 3
            category: SUBSCRIPTION
            billingPolicy: { recurring: { interval: DAY, intervalCount: 3 } }
            deliveryPolicy: { recurring: { interval: DAY, intervalCount: 3 } }
            pricingPolicies: [
              {
                fixed: {
                  adjustmentType: PERCENTAGE
                  adjustmentValue: { percentage: 5.0 }
                }
              }
            ]
          }
        ]
      }
      resources: { productIds: ["gid://shopify/Product/7852163694827"
  ], productVariantIds: ["gid://shopify/ProductVariant/43340936315115","gid://shopify/ProductVariant/43340828377323"
  ] }
    ) {
      sellingPlanGroup {
        id
      }
      userErrors {
        field
        message
      }
    }
  }
  `;
};
