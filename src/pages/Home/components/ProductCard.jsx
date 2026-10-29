import { useState } from "react";
import "./Hero.css";
function ProductCard(props) {
 




  return (
    <section className="thecontainerconta2b">
      <div className="conta2BOx">
        <input
          type="checkbox"
          checked={props.isChecked}
          onChange={() => props.Completed(props.id)}
          className="thecheck"
        />
        <h2 style={{ textDecoration: props.isChecked ? "line-through" : "none" }}>
          {props.name}
        </h2>
        <p className="thetxtline">{props.level} Level</p>
        <button className="controls" onClick={props.rm}>
          Delete
        </button>
        <button className="controls" onClick={props.edit}>
          Edit
        </button>
      </div>
{props.change === props.id && ( 
  <form action=""  className="conta2BOxscnd" onSubmit={props.add}>
        <h1>Add a product now</h1>

        <input
          id="theName"
          type="text"
          placeholder="name"
          value={props.formName}
          onChange={(event) => props.setName(event.target.value)}
          required
        />

        <select
          name=""
          id="theslctLvl"
          value={props.formLevel}
          onChange={(event) => props.setLevel(event.target.value)}
        >
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
          <option value="extrem">Extrem</option>
        </select>

        <button type="submit" className="btnform">
          Add
        </button>
        <button className="btnform" type="button" onClick={props.save}>
          save
        </button>
        {/* {change !== null && (<button className='btnform' type="button" onClick={Save}> Save Edit </button>)} */}
      </form>)}
      
    </section>
  );
}

export default ProductCard;
