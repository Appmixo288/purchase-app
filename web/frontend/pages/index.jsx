import { Navigation } from "../components";
import { useState } from "react";
import Dashboard from "./dashboard.jsx";
import Subscription_rules from "./subscription_rules.jsx";
import Subscriptions from "./subscriptions.jsx";
import Customization from "./customization.jsx";
import Subscription_Rule_Form from "./subscription_rule_form.jsx";
function HomePage(props) {
  // console.log("props :>> ", props);
  const [tab_selected, setTab_Selected] = useState(props.tab ? props.tab : 1);
  return (
    <>
      <Navigation
        // className="navigation"
        selected={tab_selected}
        setTab_Selected={(e) => {
          setTab_Selected(e);
        }}
      />
      <div className="main-body">
        {tab_selected == 0 && <Dashboard />}
        {tab_selected == 1 ? (
          props.subtab == 5 ? (
            <Subscription_Rule_Form />
          ) : (
            <Subscription_rules />
          )
        ) : (
          ""
        )}
        {/* {tab_selected == 1 && <Subscription_rules />} */}
        {tab_selected == 2 && <Subscriptions />}
        {tab_selected == 3 && <Customization />}
      </div>
    </>
  );
}

export default HomePage;
