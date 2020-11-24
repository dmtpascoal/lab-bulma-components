import "bulma/css/bulma.css";
import React from 'react';

function CoolButton(props) {
  return (
    <div>
      <button class={props.buttonType}>
        {props.name}
      </button>
    </div>
  );
}

export default CoolButton;