import React, { useEffect, useState } from "react";
import Loading from "./Loading";

const Shopping = () => {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try{
      setLoading(false)
      let response = await fetch("https://fakestoreapi.com/products");
      setApiData(await response.json());
    }catch(error){
      console.log(error)
    }

  };

  useEffect(() => {
    getData();
  }, []);

  let myStyle = {
    width: "18rem",
  };

  if(loading){
    return <Loading/>
  }


  return (
    <div>
      <hr />
      <div class="d-flex justify-content-around main_cont">
        <div className="container my-3">
          <div class="row">
            {apiData.map((curele) => {
              return (
                <>
                  <div class="card my-3" style={myStyle}>
                    <div class="row-md-12">
                      <img src={curele.image} class="card-img-top" alt="..." />
                      <div class="card-body">
                        <h5 class="card-title">
                          {curele.description.slice(0, 12)}
                        </h5>
                        <p class="card-text">
                          <b>
                            <i>{curele.category}</i>{" "}
                          </b>
                        </p>
                        <b>Price : ${curele.price}</b>
                        <br />
                        <a href="#" class="btn btn-primary">
                          Add to Cart
                        </a>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shopping;
