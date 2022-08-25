import React from "react";
import './Home.css';

function Home() {
  return (
    <>
      <div className="container">
        <div className="product-container">
          <div className="product" style={{ backgroundColor: "#1e3932" }}>
            <div className="product-left">
              <img
                alt="Starbucks products with gold stars featured on a pink and purple gradient background."
                className="block"
                src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-78735.jpg"
              />
            </div>
            <div className="product-right">
              <div
                className="product-title"
                style={{ fontSize: 18, marginTop: 20 }}
              >
                Summer is brighter with free treats.*
              </div>
              <div
                className="product-button product-button-white"
                style={{ marginTop: 40 }}
              >
                Join Starbucks Rewards
              </div>
            </div>
          </div>
        </div>
        <div className="product-container">
          <div className="product" style={{ backgroundColor: "#fa91aa" }}>
            <div className="product-right">
              <div
                className="product-title"
                style={{ fontSize: 48, marginTop: 20, color: "#1e3932" }}
              >
                Summer’s brightest new drinks
              </div>
              <div className="product-description">
                Introducing the Pineapple Passionfruit Starbucks Refreshers®
                beverage and the Starbucks® Paradise Drink with creamy
                coconutmilk.
              </div>
              <div
                className="product-button product-button-black"
                style={{ marginTop: 10 }}
              >
                Learn more
              </div>
            </div>
            <div className="product-left">
              <img
                alt="Two yellow iced drinks with pineapple inclusions in tall glasses."
                className="block"
                src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-78796.jpg"
              />
            </div>
          </div>
        </div>
        <div className="product-container">
          <div className="product" style={{ backgroundColor: "#f06464" }}>
            <div className="product-left">
              <img
                alt="Two marbled iced coffee drinks in tall glasses."
                className="block"
                src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-78943.jpg"
              />
            </div>
            <div className="product-right">
              <div
                className="product-title"
                style={{ fontSize: 48, marginTop: 60, color: "white" }}
              >
                Cold brew for two
              </div>
              <div
                className="product-description"
                style={{ color: "white", fontSize: 22 }}
              >
                Try the new Chocolate Cream Cold Brew with silky, chocolaty cold
                foam. Or go for a Vanilla Sweet Cream Cold Brew with house-made
                vanilla-flavored sweet cream.
              </div>
              <div
                className="product-button product-button-white"
                style={{ marginTop: 10 }}
              >
                Learn more
              </div>
            </div>
          </div>
        </div>
        <div className="product-container">
          <div className="product" style={{ backgroundColor: "#faaa5a" }}>
            <div className="product-right">
              <div
                className="product-title"
                style={{ fontSize: 48, marginTop: 60, color: "#1e3932" }}
              >
                Back-to-school smiles
              </div>
              <div
                className="product-description"
                style={{ fontSize: 24, maxWidth: 500, textAlign: "center" }}
              >
                A Starbucks eGift makes an A+ treat for students, teachers and
                school support staff.
              </div>
              <div
                className="product-button product-button-black"
                style={{ marginTop: 10 }}
              >
                Send an eGift
              </div>
            </div>
            <div className="product-left">
              <img
                alt="Gift card with an illustrated backpack and “BACK AT IT!” message."
                className="block"
                src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-79187.jpg"
              />
            </div>
          </div>
        </div>
        <div className="product-container">
          <div className="product" style={{ backgroundColor: "#9bf5b4" }}>
            <div className="product-left">
              <img
                alt="Two marbled iced coffee drinks in tall glasses."
                className="block"
                src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-78943.jpg"
              />
            </div>
            <div className="product-right">
              <div
                className="product-title"
                style={{ fontSize: 48, marginTop: 60, color: "#1e3932" }}
              >
                Anytime protein
              </div>
              <div
                className="product-description"
                style={{ color: "#1e3932", fontSize: 22 }}
              >
                Try the new Chocolate Cream Cold Brew with silky, chocolaty cold
                foam. Or go for a Vanilla Sweet Cream Cold Brew with house-made
                vanilla-flavored sweet cream.
              </div>
              <div
                className="product-button product-button-black"
                style={{ marginTop: 10 }}
              >
                Order now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
