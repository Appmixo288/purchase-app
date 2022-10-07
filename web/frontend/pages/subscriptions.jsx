import {
  Stack,
  Badge,
  Card,
  Page,
  Layout,
  FormLayout,
  EmptyState,
  Button,
  DataTable,
} from "@shopify/polaris";
import "./pages.css";

import { emptySubscription } from "../assets/index";
const Subscriptions = () => {
  const rows = [
    ["Emerald Silk Gown", "$875.00", 124689, 140, "$122,500.00"],
    ["Mauve Cashmere Scarf", "$230.00", 124533, 83, "$19,090.00"],
    [
      "Navy Merino Wool Blazer with khaki chinos and yellow belt",
      "$445.00",
      124518,
      32,
      "$14,240.00",
    ],
  ];

  return (
    <Page title="Subscription">
      <div className="mb16">
        <Card sectioned>
          <EmptyState
            heading="Your subscriptions will be shown here."
            image={emptySubscription}
          >
            <p>Create your first subscription to start the journey.</p>
          </EmptyState>
        </Card>
      </div>
    </Page>
  );
};

export default Subscriptions;
