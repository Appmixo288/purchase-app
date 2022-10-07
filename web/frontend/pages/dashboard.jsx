import {
  Stack,
  Badge,
  Card,
  Page,
  Layout,
  FormLayout,
  Button,
} from "@shopify/polaris";

const Dashboard = () => {
  return (
    <>
      <Page title="Dashboard" className="main-dashboard">
        <FormLayout>
          <FormLayout.Group>
            <Card title="Total subscriptions" sectioned>
              <p>100 </p>
            </Card>
            <Card title="Monthly recurring revenue" sectioned>
              <p>₹ 2440.95 </p>
            </Card>

            <Card title="Total customers" sectioned>
              <p>233</p>
            </Card>
          </FormLayout.Group>
        </FormLayout>
      </Page>
    </>
  );
};

export default Dashboard;
