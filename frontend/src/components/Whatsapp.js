import React from "react";
import { Button, Icon } from "semantic-ui-react";

function Whatsapp() {
  return (
    <div className="whatsapp">
      <a
<<<<<<< HEAD
        href="https://api.whatsapp.com/send?phone=1234567809?text=I am contacting through the whatsapp"
=======
        href="https://api.whatsapp.com/send?phone=1234567890?text=I am contacting through the whatsapp"
>>>>>>> 33ae568eab9bc2f8510a34925c288243a267e2d2
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
