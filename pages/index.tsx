import { NextPage } from "next";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { iRootState, Dispatch } from "../store";

import OwnerComponent from "../components/owner";

const IndexPage: NextPage = () => {
  const farm = useSelector((state: iRootState) => state.farm);
  const owner = useSelector((state: iRootState) => state.owner);
  const dispatch = useDispatch<Dispatch>();

  const [incrementBy, setIncrementBy] = useState(5);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIncrementBy(+event.target.value);
  };

  return (
    <div style={{ display: "flex" }}>
      <OwnerComponent name={owner.name} age={owner.age}></OwnerComponent>
      <div className="farm">
        <h2>Farm</h2>
        <p>Eggs: {farm.eggs}</p>
        <button className="button" onClick={dispatch.farm.incrementEgg}>
          increment
        </button>
        <button className="button" onClick={dispatch.farm.incrementEggAsync}>
          incrementAsync
        </button>
        <p>Chickens: {farm.chickens}</p>
        <label>
          Increment by:
          <input type="text" value={incrementBy} onChange={handleChange} />
        </label>
        <button
          className="button"
          onClick={() => dispatch.farm.incrementChicken(incrementBy)}
        >
          increment
        </button>
        <button
          className="button"
          onClick={() => dispatch.farm.incrementChickenAsync(incrementBy)}
        >
          incrementAsync
        </button>
      </div>

      <style jsx>{`
        .farm {
          padding: 10px;
          margin: 10px;
        }
        .button {
          color: white;
          background: #4da5ff;
        }
      `}</style>
    </div>
  );
};
export default IndexPage;
