import React from "react";
import { Breadcrumb, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import PageHeader from "../../../layouts/layoutcomponents/pageheader";
export default function Empty() {
  return (
    <div>
             <PageHeader titles="Empty" active="Empty" items={['Pages']} />
      <Row></Row>
    </div>
  );
}
