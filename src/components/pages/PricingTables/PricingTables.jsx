import React from "react";
import { Link } from "react-router-dom";
import { Row } from "react-bootstrap";
import {DataSTARTERPACK,DataSTARTERPACK1,DATACOLUMNPRICE,Data,DATAsvg} from '../../../commondata/commondata';
import PageHeader from "../../../layouts/layoutcomponents/pageheader";

export default function PricingTables() {

  return (
    <div>
             <PageHeader titles="PricingTables" active="PricingTables" items={['Pages']} />
      <Row>
      {DataSTARTERPACK.map((playerData, k) => (
        <div className={`col-sm-6 col-xl-${playerData.COL}`} key={k}>
          <div className="panel price panel-color plan-card text-center mb-7">
            <div className="pt-4">
              <div className="mb-4">
                <i
                  className={`fa fa-${playerData.ICON}  plan-icon bg-${playerData.BG}`}
                ></i>
              </div>
              <h3
                className={`text-uppercase fw-semibold text-${playerData.BG} card-category bg-${playerData.BG}-transparent`}
              >
                {playerData.NAME}
              </h3>
            </div>
            <div className="panel-body text-center">
              <p className="lead">
                <strong>{playerData.PRICE} /</strong> month
              </p>
            </div>
            <ul className="list-group list-group-flush text-center">
              <li className="list-group-item">
                <strong>{playerData.FREE}</strong> Domain Name
              </li>
              <li className="list-group-item">
                <strong>{playerData.ONE}</strong> One-Click Apps
              </li>
              <li className="list-group-item">
                <strong> {playerData.DATABASE} </strong> Databases
              </li>
              <li className="list-group-item">
                <strong> Money </strong> BackGuarantee
              </li>
              <li className="list-group-item border-bottom-0">
                <strong> 24/7</strong> support
              </li>
            </ul>
            <div className="panel-footer text-center">
              <Link className={`btn btn-lg btn-${playerData.BG}`} to="#">
                Sign Up Now
              </Link>
            </div>
          </div>
        </div>
      ))}
      </Row>
      <Row>
      {DataSTARTERPACK1.map((basicdata, k) => (
        <div className={`col-sm-6 col-xl-${basicdata.COL}`} key={k}>
          <div className="card">
            <div className={`card-status bg-${basicdata.BG}`}></div>
            <div className="card-body text-center">
              <div className="card-category">{basicdata.PACK}</div>
              <div className="display-5 my-4">{basicdata.PRICE}</div>
              <ul className="list-unstyled leading-loose">
                <li>
                  <strong>{basicdata.NUMBER}</strong> Ads
                </li>
                <li>
                  <i
                    className={`fe fe-${basicdata.fe} me-2 text-${basicdata.COLOR} `}
                  ></i>
                  {basicdata.DAYS} days
                </li>
                <li>
                  <i
                    className={`fe fe-${basicdata.fe2} me-2 text-${basicdata.COLORS} `}
                  ></i>
                  Private Messages
                </li>

                <li>
                  <i
                    className={`fe fe-${basicdata.fe3} me-2 text-${basicdata.COLOR1} `}
                  ></i>
                  Urgent Ads
                </li>
              </ul>
              <div className="text-center mt-6">
                <Link to="#" className={`btn btn-${basicdata.BG}`}>
                  Choose plan
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
      </Row>
      <h4 className="card-title mt-4">Pricing cards 4 colums</h4>
      <Row>
      {Data.map((datacard, k) => (
        <div className="col-sm-6 col-xl-3" key={k}>
          <div className="panel price panel-color">
            <div className={`panel-heading bg-${datacard.BG} p-0 text-center`}>
              <h3>{datacard.ID}</h3>
            </div>
            <div className="panel-body text-center">
              <p className="lead">
                <strong>{datacard.PRICE} /</strong> month
              </p>
            </div>
            <ul className="list-group list-group-flush text-center">
              <li className="list-group-item">
                <strong>{datacard.FREE} Free</strong> Domain Name
              </li>
              <li className="list-group-item">
                <strong>{datacard.ONE}</strong> One-Click Apps
              </li>
              <li className="list-group-item">
                <strong>{datacard.DATA}</strong> Databases
              </li>
              <li className="list-group-item">
                <strong> Money </strong> BackGuarantee
              </li>
              <li className="list-group-item border-bottom-0">
                <strong> 24/7</strong> support
              </li>
            </ul>
            <div className="panel-footer text-center">
              <Link className={`btn btn-lg btn-${datacard.BG}`} to="#">
                Purchase Now!
              </Link>
            </div>
          </div>
        </div>
      ))}
      </Row>
      <h4 className="card-title mt-4">Pricing cards 4 colums</h4>
      <Row>
      {DATAsvg.map((datacard, s) => (
        <div className={`col-sm-6 col-xl-${datacard.COL}`} key={s}>
          <div className="princing-item mb-4">
            <div className="pricing-divider text-center">
              <h3 className="text-light">{datacard.TITLE}</h3>
              <h4 className="my-0 display-2 text-light fw-normal mb-3">
                <span className="h3">$</span> {datacard.PRICE}
                <span className="h5">/mo</span>
              </h4>
              <svg
                className="pricing-divider-img"
                enableBackground="new 0 0 300 100"
                height="100px"
                id="Layer_3"
                preserveAspectRatio="none"
                viewBox="0 0 300 100"
                width="300px"
                x="0px"
                y="0px"
              >
                <defs>
                  <path
                    id="Layer_3s"
                    className="deco-layer deco-layer--1"
                    d="M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729
                                              c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z"
                    fill="#FFFFFF"
                    opacity="0.6"
                  ></path>
                  <path
                    id="Layer_3d"
                    className="deco-layer deco-layer--2"
                    d="M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729
                                              c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z"
                    fill="#FFFFFF"
                    opacity="0.6"
                  ></path>
                  <path
                    id="Layer_3f"
                    className="deco-layer deco-layer--3"
                    d="M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716
                                              H42.401L43.415,98.342z"
                    fill="#FFFFFF"
                    opacity="0.7"
                  ></path>
                  <path
                    id="Layer_3g"
                    className="deco-layer deco-layer--4"
                    d="M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428
                                          c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z"
                    fill="#FFFFFF"
                  ></path>
                </defs>

                <svg
                  className="pricing-divider-img"
                  viewBox="0 0 300 100"
                  width="300px"
                  height="100px"
                  preserveAspectRatio="none"
                  x="0"
                  y="0"
                >
                  <use href="#Layer_3s" />
                </svg>
                <svg
                  className="pricing-divider-img"
                  viewBox="0 0 300 100"
                  width="300px"
                  height="100px"
                  preserveAspectRatio="none"
                  x="0"
                  y="0"
                >
                  <use href="#Layer_3d" />
                </svg>
                <svg
                  className="pricing-divider-img"
                  viewBox="0 0 300 100"
                  width="300px"
                  height="100px"
                  preserveAspectRatio="none"
                  x="0"
                  y="0"
                >
                  <use href="#Layer_3f" />
                </svg>
                <svg
                  className="pricing-divider-img"
                  viewBox="0 0 300 100"
                  width="300px"
                  height="100px"
                  preserveAspectRatio="none"
                  x="0"
                  y="0"
                >
                  <use href="#Layer_3g" />
                </svg>
              </svg>
            </div>
            <div className=" br-br-0 br-bl-0 bg-white mt-0 shadow text-center">
              <ul className="list-group list-group-flush text-center">
                <li className="list-group-item">
                  <b>10</b> users included
                </li>
                <li className="list-group-item">
                  <b>2 GB</b> of storage
                </li>
                <li className="list-group-item">
                  <b>Free </b>Email support
                </li>
                <li className="list-group-item">
                  <b> 24/7</b> support
                </li>
                <li className="list-group-item border-bottom-0">
                  <b>Help center access</b>
                </li>
              </ul>
              <div className="card-footer">
                <button type="button" className={`btn btn-${datacard.BG}`}>
                  Sign up for free
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      </Row>
      <h4 className="card-title mt-4">Column pricing table</h4>
      <Row>
      {DATACOLUMNPRICE.map((basicdata, k) => (
        <div className="col-sm-6 col-xl-3" key={k}>
          <div className="card">
            <div className={`card-body text-center pricing bg-${basicdata.BG}`}>
              <div className="card-category">{basicdata.ID}</div>
              <div className="display-3 my-4">{basicdata.PRICE}</div>
              <ul className="list-unstyled leading-loose">
                <li>
                  <strong>{basicdata.FREE} </strong> FreeDomain Name
                </li>
                <li>
                  <strong>{basicdata.ONE}</strong> One-Click Apps
                </li>
                <li>
                  <strong>{basicdata.DATA}</strong> Databases
                </li>
                <li>
                  <strong>Money</strong> BackGuarantee
                </li>
                <li>
                  <strong>24/7</strong> Support
                </li>
              </ul>
              <div className="text-center mt-4">
                <Link to="#" className="btn btn-white d-grid">
                  Buy Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
      </Row>
    </div>
  );
}
