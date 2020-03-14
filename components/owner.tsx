import * as React from "react";

type Props = {
  name: string;
  age: number;
};

const OwnerComponent: React.FunctionComponent<Props> = ({ name, age }) => (
  <div className="owner">
    <h2>Owner</h2>
    <p>Name: {name}</p>
    <p>Age: {age}</p>
    <style jsx>{`
      .owner {
        border-color: black;
        border-style: dashed;
        padding: 10px;
        margin: 10px;
      }
    `}</style>
  </div>
);

export default OwnerComponent;
