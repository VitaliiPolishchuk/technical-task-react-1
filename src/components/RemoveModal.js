import React from "react";
import styled from "styled-components";

const RemoveModal = () => {
  return (
    <Wrapper>
      <div className="modal">
        <button>Yes</button>
        <button>No</button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  .modal {
    position: absolute;
    top: 50%;
    left: 50%;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    z-index: 100;
    display: ${(props) => (props.isOpen ? "block" : "none")};
  }
`;

export default RemoveModal;
