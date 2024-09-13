import React from "react";
import { Row, Col, Card, Table } from "react-bootstrap";
import {Datainvoice,Printpage} from '../../../commondata/commondata';
import PageHeader from "../../../layouts/layoutcomponents/pageheader";
export default function Invoice() {
  return (
    <div>
             <PageHeader titles="Invoice" active="Invoice" items={['Pages']} />
      <Row>
        <Col md={12}>
          <Card>
            <Card.Body>
              <div className="clearfix">
                <div className="float-start">
                  <h3 className="card-title mb-0">#INV-526</h3>
                </div>
                <div className="float-end">
                  <h3 className="card-title">Date: 12-09-2019</h3>
                </div>
              </div>
              <hr />
              <Row>
                <Col lg={6}>
                  <p className="h3">Invoice Form:</p>
                  <address>
                    Street Address
                    <br />
                    State, City
                    <br />
                    Region, Postal Code
                    <br />
                    yourdomain@example.com
                  </address>
                </Col>
                <Col className="text-end"lg={6}>
                  <p className="h3">Invoice To:</p>
                  <address>
                    Street Address
                    <br />
                    State, City
                    <br />
                    Region, Postal Code
                    <br />
                    ypurdomain@example.com
                  </address>
                </Col>
              </Row>
              <div className="table-responsive push invoice_tabledata">
              <Table className="table table-bordered table-hover mb-0 text-nowrap border-bottom">
      <tbody>
        <tr>
          <th className="text-center"></th>
          <th>ITEM</th>
          <th className="text-center">QUANTITY</th>
          <th className="text-end">UNIT PRICE</th>
          <th className="text-end">SUB TOTAL</th>
        </tr>

        {Datainvoice.map((list, index) => (
          <tr key={index} className="border-bottom">
            <td className="text-center">{list.ID}</td>
            <td>
              <p className="font-w600 mb-1">{list.TITLE}</p>
              <div className="text-muted">{list.LINE}</div>
            </td>
            <td className="text-center">{list.NUMBER}</td>
            <td className="text-end">{list.PRICE}</td>
            <td className="text-end">{list.SUBTOTAL}</td>
          </tr>
        ))}
        <tr>
          <td colSpan="4" className="fw-bold text-uppercase text-end">
            Total
          </td>
          <td className="fw-bold text-end h4">$12,038</td>
        </tr>
      </tbody>
    </Table>
              </div>
            </Card.Body>
            <Printpage />
          </Card>
        </Col>
      </Row>
    </div>
  );
}
