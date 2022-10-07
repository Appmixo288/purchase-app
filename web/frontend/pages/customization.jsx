import {
  Stack,
  Badge,
  Card,
  Page,
  Layout,
  Heading,
  Image,
  Button,
  TextContainer,
  RadioButton,
  DataTable,
  Icon,
} from "@shopify/polaris";
import { ViewMinor } from "@shopify/polaris-icons";
import "./pages.css";
import {
  customization1,
  customization2,
  customization3,
  customization4,
} from "../assets/index.js";
import { useState, useCallback } from "react";
const Customization = () => {
  const [value, setValue] = useState("Classic");
  console.log("value", value);
  const handleChange = useCallback(
    (_checked, newValue) => setValue(newValue),
    []
  );
  return (
    <>
      <Page
        title="Customization"
        primaryAction={<Button primary>Customization</Button>}
      >
        <div className="mb16">
          <div>
            <TextContainer>
              <Heading>Online store dashboard</Heading>
              <p>
                Choose a template for your subscription widget and customize its
                texts and styles.
              </p>
            </TextContainer>
          </div>
        </div>
        <Page fullWidth>
          <Stack>
            <Card>
              <Card.Section flush>
                <div className="cust_img">
                  <Image
                    className="custom_img"
                    source={customization1}
                    alt="a sheet with purple and orange stripes"
                  />
                </div>
              </Card.Section>
              <Card.Section subdued>
                <Stack distribution="fill">
                  <RadioButton
                    label={<p className="font16">Classic</p>}
                    helpText={<p className="pl5">Radio buttons</p>}
                    id="Classic"
                    name="Classic"
                    checked={value === "Classic"}
                    onChange={handleChange}
                  />
                </Stack>
                <div style={{ marginTop: "10px" }}>
                  <Button
                    outline
                    fullWidth
                    icon={value == "Classic" ? ViewMinor : ""}
                    size="slim"
                    disabled={value == "Classic" ? false : true}
                  >
                    View Widget
                  </Button>
                </div>
              </Card.Section>
            </Card>

            <Card>
              <Card.Section flush>
                <div className="cust_img">
                  <Image
                    className="custom_img"
                    source={customization2}
                    alt="a sheet with purple and orange stripes"
                  />
                </div>
              </Card.Section>
              <Card.Section subdued>
                <Stack distribution="fill">
                  <RadioButton
                    label={<p className="font16">Compact</p>}
                    helpText={<p className="pl5">Dropdown</p>}
                    checked={value === "Compact"}
                    id="Compact"
                    name="Compact"
                    onChange={handleChange}
                  />
                  <Badge>New</Badge>
                </Stack>
                <div style={{ marginTop: "10px" }}>
                  <Button
                    outline
                    fullWidth
                    icon={value == "Compact" ? ViewMinor : ""}
                    size="slim"
                    disabled={value == "Compact" ? false : true}
                  >
                    View Widget
                  </Button>
                </div>
              </Card.Section>
            </Card>

            <Card>
              <Card.Section flush>
                <div className="cust_img">
                  <Image
                    className="custom_img"
                    source={customization3}
                    alt="a sheet with purple and orange stripes"
                  />
                </div>
              </Card.Section>
              <Card.Section subdued>
                <Stack distribution="fill">
                  <RadioButton
                    label={<p className="font16">Comfy</p>}
                    helpText={<p className="pl5">Tiles</p>}
                    checked={value === "Comfy"}
                    id="Comfy"
                    name="Comfy"
                    onChange={handleChange}
                  />
                  <Badge status="success">Popular</Badge>
                </Stack>
                <div style={{ marginTop: "10px" }}>
                  <Button
                    outline
                    fullWidth
                    icon={value == "Comfy" ? ViewMinor : ""}
                    size="slim"
                    disabled={value == "Comfy" ? false : true}
                  >
                    View Widget
                  </Button>
                </div>
              </Card.Section>
            </Card>

            <Card>
              <Card.Section flush>
                <div className="cust_img">
                  <Image
                    className="custom_img"
                    source={customization4}
                    alt="a sheet with purple and orange stripes"
                  />
                </div>
              </Card.Section>
              <Card.Section subdued>
                <Stack distribution="fill">
                  <RadioButton
                    label={<p className="font16">Charmer</p>}
                    helpText={<p className="pl5">Columns</p>}
                    checked={value === "Charmer"}
                    id="Charmer"
                    name="Charmer"
                    onChange={handleChange}
                  />
                  <Badge>New</Badge>
                </Stack>
                <div style={{ marginTop: "10px" }}>
                  <Button
                    outline
                    fullWidth
                    size="slim"
                    icon={value == "Charmer" ? ViewMinor : ""}
                    disabled={value == "Charmer" ? false : true}
                  >
                    View Widget
                  </Button>
                </div>
              </Card.Section>
            </Card>
          </Stack>
        </Page>
      </Page>
    </>
  );
};

export default Customization;
