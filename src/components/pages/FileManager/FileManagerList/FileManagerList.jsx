import React from "react";
import { Breadcrumb, Col, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import {list} from '../../../../commondata/commondata';
import PageHeader from "../../../../layouts/layoutcomponents/pageheader";
export default function FileManagerList() {
  return (
    <div>
             <PageHeader titles="File Manager list" active="File Manager list" items={['Pages']} />

      <Row className="row-sm">
        {list.map((lists)=>(
        <Col xxl={2} xl={3} lg={4} md={4} sm={6} key={Math.random()}>
          <Card className="overflow-hidden">
            <Link
              to={`${import.meta.env.BASE_URL}pages/FileManager/FileDetails/FileDetails`}
              className={lists.class}
            >
              <img className="w-100 file-manager-list"
                src={lists.src}
                alt="img"
              />
            </Link>
            <Card.Footer>
              <div className="d-flex justify-content-between flex-wrap">
                <div className="">
                  <h5 className="mb-0 fw-semibold text-break">{lists.heading}</h5>
                </div>
                <div className="my-auto">
                  <span className="text-muted mb-0">{lists.data}</span>
                </div>
              </div>
            </Card.Footer>
          </Card>
        </Col>
        ))}
      </Row>
    </div>
  );
}
