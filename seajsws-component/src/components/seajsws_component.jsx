import React from "react";
import { FormattedMessage } from "react-intl";

import styles from "../../src/styles/seajsws_component.css";
import messages from "../lang/default-messages";

export default class SeajswsComponent extends React.Component {
  render() {
    return (
      <div className={styles.someStyle}>
        <FormattedMessage {...messages.editMe} />
      </div>
    );
  }
}

SeajswsComponent.displayName = "SeajswsComponent";

SeajswsComponent.propTypes = {};

SeajswsComponent.defaultProps = {};
