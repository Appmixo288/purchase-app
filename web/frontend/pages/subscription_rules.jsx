import {
  Stack,
  Badge,
  Card,
  Page,
  Layout,
  FormLayout,
  EmptyState,
  Button,
} from "@shopify/polaris";
import { Link, useNavigate, useLocation } from "react-router-dom";
import HomePage from "./";
import { emptySubscription } from "../assets/index";
import { Redirect } from "@shopify/app-bridge/actions";
const SubscriptionRules = () => {
  const navigate = useNavigate();
  return (
    <>
      <Page
        title="Subscription Rules"
        primaryAction={
          // <Link to="/subscription_rule_form" className="text_btn_decoration">
          <Button
            primary
            onClick={() => {
              navigate("/subscription_rule_form");
            }}
          >
            Create Subscription Rules
          </Button>
          // </Link>
        }
      >
        <div className="mb16">
          <Card sectioned>
            <EmptyState
              heading="Create the first subscription rule"
              action={{
                content: "Create Subscription Rules",
                onAction: () => {
                  navigate("/subscription_rule_form");
                },
              }}
              image={emptySubscription}
            >
              <p>Create rules to enable customers subscribe to products.</p>
            </EmptyState>
          </Card>
        </div>
      </Page>
    </>
  );
};

export default SubscriptionRules;
