/**
 * Client tests
 */
import React from "react";
import { shallow } from "enzyme";

import SeajswsComponent from "src/components/seajsws-component";

describe("components/seajsws-component", () => {

  describe("Mounting", () => {

    it("should render into the document", () => {
      const component = shallow(<SeajswsComponent />);
      expect(component).to.not.be.null;
    });

  });

});
