import { useState } from "react";
import "./Hero.css";
import "./Hero";
function ProductCard(props) {
  const [isChecked, setIschecked] = useState(false);
  const [Products, setProduct] = useState([]);

  function Add(e) {
    e.preventDefault();
    //          const inptname = document.querySelector('.thename').value;
    // const inptAge = document.querySelector('.price').value;
    // const inptcity = document.querySelector('.quatity').value;

    setProduct([
      ...Products,
      { id: crypto.randomUUID(), name: name, level: level },
    ]);

    setName([""]);
    setLevel([""]);
    console.log("please");
  }

  const [change, setChange] = useState(0);
  const [name, setName] = useState("");
  const [level, setLevel] = useState("");

  function Save() {
    const theformS = document.querySelector(".conta2BOxscnd");

    theformS.style.display = "none";
    setProduct(
      Products.map((item) =>
        item.id === change ? { ...item, name, level } : item,
      ),
    );

    setChange(null);
    setName("");
    setLevel("");
  }

  // function Edit(itm) {
  //   setName(itm.name);

  //   setLevel(itm.Level);
  //   setChange(itm.id);
  // }

  return (
    <section className="thecontainerconta2b">
      <div className="conta2BOx">
        <input
          type="checkbox"
          value={isChecked}
          onChange={(e) => setIschecked(e.target.checked)}
          className="thecheck"
        />
        <h2 style={{ textDecoration: isChecked ? "line-through" : "none" }}>
          {props.name}
        </h2>
        <p className="thetxtline">{props.city} Level</p>
        <button className="controls" onClick={props.rm}>
          Delete
        </button>
        <button className="controls" onClick={props.edit}>
          Edit
        </button>
      </div>

      <form action="" className="conta2BOxscnd" onSubmit={Add}>
        <h1>Add a product now</h1>

        <input
          id="theName"
          type="text"
          placeholder="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />

        <select
          name=""
          id="theslctLvl"
          value={level}
          onChange={(event) => setLevel(event.target.value)}
        >
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
          <option value="extrem">Extrem</option>
        </select>

        <button type="submit" className="btnform">
          Add
        </button>
        <button className="btnform" onClick={Save}>
          save
        </button>
        {/* {change !== null && (<button className='btnform' type="button" onClick={Save}> Save Edit </button>)} */}
      </form>
    </section>
  );
}

export default ProductCard;
