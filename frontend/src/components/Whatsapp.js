import React from "react";
import { Button, Icon } from "semantic-ui-react";

function Whatsapp() {
  return (
    <div className="whatsapp">
      <a
        href="https://api.whatsapp.com/send?phone=1234567890?text=I am contacting through the whatsapp"
        target="_blank"
      >
        <Button className="whatsappBtn">
            Contact us on  <Icon name="whatsapp" size="large" color="green"/>
        </Button>
      </a>
    </div>
  );
}

export default Whatsapp;
