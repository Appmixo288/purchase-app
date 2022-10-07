import { Card, Tabs, Icon, Button } from "@shopify/polaris";
import { useState, useCallback } from "react";
import "./components.css";
import {
  HomeMinor,
  ToolsMajor,
  EditMajor,
  ListMajor,
} from "@shopify/polaris-icons";
export function Navigation(props) {
  // console.log("props :>> ", props);
  const [selected, setSelected] = useState(props.selected ? props.selected : 0);
  const tabs = [
    {
      id: "home",
      content: (
        <span className={selected == 0 ? "tab_selected" : "tab"}>
          <Icon source={HomeMinor} color={selected == 0 ? "primary" : "base"} />
          <p className="f16">Home</p>
        </span>
      ),
      accessibilityLabel: "home",
      panelID: "home",
    },
    {
      id: "subscriptionrules",
      content: (
        <span className={selected == 1 ? "tab_selected" : "tab"}>
          <Icon
            source={ToolsMajor}
            color={selected == 1 ? "primary" : "base"}
          />
          <p className="f16">Subscription Rules</p>
        </span>
      ),
      accessibilityLabel: "subscription",
      panelID: "subscriptionrules",
    },
    {
      id: "subscription",
      content: (
        <span className={selected == 2 ? "tab_selected" : "tab"}>
          <Icon source={ListMajor} color={selected == 2 ? "primary" : "base"} />
          <p className="f16">Subscription</p>
        </span>
      ),
      accessibilityLabel: "subscription",
      panelID: "subscription",
    },
    {
      id: "customization",
      content: (
        <span className={selected == 3 ? "tab_selected" : "tab"}>
          <Icon source={EditMajor} color={selected == 3 ? "primary" : "base"} />
          <p className="f16">Customization</p>
        </span>
      ),
      accessibilityLabel: "customization",
      panelID: "customization",
    },
  ];

  return (
    // <Card>
    <div className="navigation">
      <Tabs
        tabs={tabs}
        selected={selected}
        onSelect={(selectedTabIndex) => {
          props.setTab_Selected(selectedTabIndex);
          setSelected(selectedTabIndex);
        }}
        disclosureText="More option"
      />
    </div>
    // </Card>
  );
}
