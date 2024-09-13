import React from "react";
import CountUp from "react-countup";
import ReactApexChart from "react-apexcharts";
import { Breadcrumb, Col, Row, Card, Button } from "react-bootstrap";
import { totalTransactions, Recentorders, timeline, browser, COLUMNS1, DATATABLE1, GlobalFilter } from '../../commondata/commondata';
import { Link } from "react-router-dom";
import { useTable, useSortBy, useGlobalFilter, usePagination } from "react-table";
import PageHeader from "../../layouts/layoutcomponents/pageheader";

export default function Dashboard() {

  const tableInstance = useTable(
    {
      columns: COLUMNS1,
      data: DATATABLE1,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps, // table props from react-table
    headerGroups, // headerGroups, if your table has groupings
    getTableBodyProps, // table body props from react-table
    prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
    state,
    setGlobalFilter,
    page, // use, page or rows
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
  } = tableInstance;

  const { globalFilter, pageIndex, pageSize } = state;
  return (
    <div>
      <PageHeader titles="Dashboard 01" active="Dashboard 01" items={['Home']} />

      <Row>
        <Col lg={12} md={12} sm={12} xl={12}>
          <Row>
            <Col lg={6} md={12} sm={12} xl={3}>
              <Card className=" overflow-hidden">
                <Card.Body className="card-body">
                  <Row>
                    <div className="col">
                      <h6 className="">Total Sales</h6>
                      <h3 className="mb-2 number-font">
                        <CountUp
                          end={34516}
                          separator=","
                          start={0}
                          duration={2.94}
                        />
                      </h3>
                      <p className="text-muted mb-0">
                        <span className="text-primary me-1">
                          <i className="fa fa-chevron-circle-up text-primary me-1"></i>
                          <span>3% </span>
                        </span>
                        last month
                      </p>
                    </div>
                    <div className="col col-auto">
                      <div className="counter-icon bg-primary-gradient box-shadow-primary brround ms-auto">
                        <i className="fe fe-trending-up text-white mb-5 "></i>
                      </div>
                    </div>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <div className="col-lg-6 col-md-12 col-sm-12 col-xl-3">
              <div className="card overflow-hidden">
                <div className="card-body">
                  <Row>
                    <div className="col">
                      <h6 className="">Total Leads</h6>
                      <h3 className="mb-2 number-font">
                        <CountUp
                          end={56992}
                          separator=","
                          start={0}
                          duration={2.94}
                        />
                      </h3>
                      <p className="text-muted mb-0">
                        <span className="text-secondary me-1">
                          <i className="fa fa-chevron-circle-up text-secondary me-1"></i>
                          <span>3% </span>
                        </span>
                        last month
                      </p>
                    </div>
                    <div className="col col-auto">
                      <div className="counter-icon bg-danger-gradient box-shadow-danger brround  ms-auto">
                        <i className="icon icon-rocket text-white mb-5 "></i>
                      </div>
                    </div>
                  </Row>
                </div>
              </div>
            </div>
            <Col lg={6} md={12} sm={12} xl={3}>
              <Card className="card overflow-hidden">
                <Card.Body className="card-body">
                  <Row>
                    <div className="col">
                      <h6 className="">Total Profit</h6>
                      <h3 className="mb-2 number-font">
                        $
                        <CountUp
                          end={42567}
                          separator=","
                          start={0}
                          duration={2.94}
                        />
                      </h3>
                      <p className="text-muted mb-0">
                        <span className="text-success me-1">
                          <i className="fa fa-chevron-circle-down text-success me-1"></i>
                          <span>0.5% </span>
                        </span>
                        last month
                      </p>
                    </div>
                    <div className="col col-auto">
                      <div className="counter-icon bg-secondary-gradient box-shadow-secondary brround ms-auto">
                        <i className="fe fe-dollar-sign text-white mb-5 "></i>
                      </div>
                    </div>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6} md={12} sm={12} xl={3}>
              <Card className=" overflow-hidden">
                <Card.Body className="card-body">
                  <Row>
                    <div className="col">
                      <h6 className="">Total Cost</h6>
                      <h3 className="mb-2 number-font">
                        $
                        <CountUp
                          end={34789}
                          separator=","
                          start={0}
                          duration={2.94}
                        />
                      </h3>
                      <p className="text-muted mb-0">
                        <span className="text-danger me-1">
                          <i className="fa fa-chevron-circle-down text-danger me-1"></i>
                          <span>0.2% </span>
                        </span>
                        last month
                      </p>
                    </div>
                    <div className="col col-auto">
                      <div className="counter-icon bg-success-gradient box-shadow-success brround  ms-auto">
                        <i className="fe fe-briefcase text-white mb-5 "></i>
                      </div>
                    </div>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col className="col-sm-12 col-md-12 col-lg-12 col-xl-9">
          <Card>
            <Card.Header className="card-header">
              <h3 className="card-title">Total Transactions</h3>
            </Card.Header>
            <Card.Body className="card-body pb-0">
              <div id="chartArea" className="chart-donut">
                <ReactApexChart
                  options={totalTransactions.options}
                  series={totalTransactions.series}
                  type="area"
                  height={325}
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={12} lg={12} xl={3}>
          <Card className="card custom-card ">
            <Card.Header className="card-header">
              <h3 className="card-title">Recent Orders</h3>
            </Card.Header>
            <Card.Body className="pt-0 px-3">
              <div id="recentorders" className="apex-charts apexs">
                <div id="chart">
                  <ReactApexChart
                    options={Recentorders.options}
                    series={Recentorders.series}
                    type="radialBar"
                    height={310}
                  />
                </div>
              </div>
              <div className="row sales-product-infomation pb-0 mb-0 mx-auto wd-100p mt-6">
                <div className="col-md-6 col justify-content-center text-center ">
                  <p className="mb-0 d-flex justify-content-center">
                    <span className="legend bg-primary"></span>Delivered
                  </p>
                  <h3 className="mb-1 fw-bold">5238</h3>
                  <div className="d-flex justify-content-center ">
                    <p className="text-muted mb-0">Last 6 months</p>
                  </div>
                </div>
                <div className="col-md-6 col text-center float-end">
                  <p className="mb-0 d-flex justify-content-center ">
                    <span className="legend bg-background2"></span>Cancelled
                  </p>
                  <h3 className="mb-1 fw-bold">3467</h3>
                  <div className="d-flex justify-content-center ">
                    <p className="text-muted mb-0">Last 6 months</p>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xl={4} md={12}>
          <Card className=" overflow-hidden">
            <Card.Header className="card-header">
              <div>
                <h3 className="card-title">Timeline</h3>
              </div>
            </Card.Header>
            <Card.Body className="card-body pb-0 pt-4">
              <div className="activity1">
                {timeline.map((timelines) => (
                  <div className="activity-blog" key={Math.random()}>
                    <div className={`activity-img brround bg-${timelines.color}-transparent text-${timelines.color}`}>
                      <i className={`fa ${timelines.icon} fs-20`}></i>
                    </div>
                    <div className="activity-details d-flex">
                      <div>
                        <b>
                          <span className="text-dark">{timelines.data} </span>
                        </b>
                        {timelines.data1}
                        <span className="d-flex text-muted fs-11">
                          {timelines.data2}
                        </span>
                      </div>
                      <div className="ms-auto fs-13 text-dark fw-semibold">
                        <span className={`badge bg-${timelines.color1} text-white`}>{timelines.data3}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={4} md={12} className="col-xl-4 col-md-12">
          <Card className="card">
            <Card.Header className="card-header">
              <h4 className="card-title fw-semibold ">Browser Usage</h4>
            </Card.Header>
            <Card.Body className="card-body pt-2 pb-2">
              {browser.map((browsers) => (
                <div className="d-md-flex align-items-center browser-stats" key={Math.random()}>
                  <div className="d-flex">
                    <i className={`fa ${browsers.icon} me-2`}></i>
                    <p className="fs-16 my-auto mb-0">{browsers.heading}</p>
                  </div>
                  <div className="ms-auto my-auto">
                    <div className="d-flex">
                      <span className="my-auto fs-16">{browsers.data}</span>
                      <span className={`text-${browsers.color} fs-15`}>
                        <i className={browsers.data1}></i>{browsers.data2}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </Card.Body>
          </Card>
        </Col>
        <Col xl={4} md={12}>
          <Card>
            <Card.Header className="card-header">
              <h4 className="card-title fw-semibold ">Daily Activity</h4>
            </Card.Header>
            <Card.Body className="card-body pb-0">
              <ul className="task-list">
                <li>
                  <i className="task-icon bg-primary"></i>
                  <h6>
                    Task Finished &nbsp;
                    <span className="text-muted fs-11 ms-2">29 Oct 2020</span>
                  </h6>
                  <p className="text-muted fs-12">
                    Adam Berry finished task on &nbsp;
                    <Link to="#" className="fw-semibold">
                      Project Management
                    </Link>
                  </p>
                </li>
                <li>
                  <i className="task-icon bg-secondary"></i>
                  <h6>
                    New Comment &nbsp;
                    <span className="text-muted fs-11 ms-2">25 Oct 2020</span>
                  </h6>
                  <p className="text-muted fs-12">
                    Victoria commented on Project &nbsp;
                    <Link to="#" className="fw-semibold">
                      AngularJS Template
                    </Link>
                  </p>
                </li>
                <li>
                  <i className="task-icon bg-primary"></i>
                  <h6>
                    New Comment &nbsp;
                    <span className="text-muted fs-11 ms-2">25 Oct 2020</span>
                  </h6>
                  <p className="text-muted fs-12">
                    Victoria commented on Project &nbsp;
                    <Link to="#" className="fw-semibold">
                      AngularJS Template
                    </Link>
                  </p>
                </li>
                <li>
                  <i className="task-icon bg-secondary"></i>
                  <h6>
                    Task Overdue &nbsp;
                    <span className="text-muted fs-11 ms-2">14 Oct 2020</span>
                  </h6>
                  <p className="text-muted mb-0 fs-12">
                    Petey Cruiser finished task &nbsp;
                    <Link to="#" className="fw-semibold">
                      Integrated management
                    </Link>
                  </p>
                </li>
                <li>
                  <i className="task-icon bg-primary"></i>
                  <h6>
                    Task Overdue &nbsp;
                    <span className="text-muted fs-11 ms-2">29 Oct 2020</span>
                  </h6>
                  <p className="text-muted mb-0 fs-12">
                    Petey Cruiser finished task &nbsp;
                    <Link to="#" className="fw-semibold">
                      Integrated management
                    </Link>
                  </p>
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm={12} className="col-12">
          <Card>
            <Card.Header>
              <h3 className="card-title mb-0">Product Sales</h3>
            </Card.Header>
            <Card.Body>
              <div className="salesdatatable">
                <div className="table-responsive">
                  <Card.Body className="pt-0 example1-table">
                    <div className="table-responsive">
                      <>
                        <div className="d-flex">
                          <select
                            className=" mb-4 selectpage border me-1"
                            value={pageSize}
                            onChange={(e) => setPageSize((e.target.value))}
                          >
                            {[10, 25, 50].map((pageSize) => (
                              <option key={pageSize} value={pageSize}>
                                Show {pageSize}
                              </option>
                            ))}
                          </select>
                          <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
                        </div>
                        <table
                          {...getTableProps()}
                          className="table table-bordered text-nowrap mb-0"
                        >
                          <thead>
                            {headerGroups.map((headerGroup) => (
                              <tr {...headerGroup.getHeaderGroupProps()} key={Math.random()}>
                                {headerGroup.headers.map((column) => (
                                  <th
                                    {...column.getHeaderProps(column.getSortByToggleProps())}
                                    className={column.className}
                                    key={Math.random()}
                                  >
                                    <span className="tabletitle">{column.render("Header")}</span>
                                    <span>
                                      {column.isSorted ? (
                                        column.isSortedDesc ? (
                                          <i className="fa fa-angle-down ms-2"></i>
                                        ) : (
                                          <i className="fa fa-angle-up ms-2"></i>
                                        )
                                      ) : (
                                        ""
                                      )}
                                    </span>
                                  </th>
                                ))}
                              </tr>
                            ))}
                          </thead>
                          <tbody {...getTableBodyProps()}>
                            {page.map((row) => {
                              prepareRow(row);
                              return (
                                <tr className="" {...row.getRowProps()} key={Math.random()}>
                                  {row.cells.map((cell) => {
                                    return (
                                      <td {...cell.getCellProps()} key={Math.random()}>{cell.render("Cell")}</td>
                                    );
                                  })}
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                        <div className="d-block d-sm-flex mt-4 align-items-center">
                          <span className="">
                            Page{" "}
                            <strong>
                              {pageIndex + 1} of {pageOptions.length}
                            </strong>{" "}
                          </span>
                          <span className="ms-sm-auto ">
                            <Button
                              variant=""
                              className="btn-default tablebutton me-2 d-sm-inline d-block my-1"
                              onClick={() => gotoPage(0)}
                              disabled={!canPreviousPage}
                            >
                              {" Previous "}
                            </Button>
                            <Button
                              variant=""
                              className="btn-default tablebutton me-2 my-1"
                              onClick={() => {
                                previousPage();
                              }}
                              disabled={!canPreviousPage}
                            >
                              {" << "}
                            </Button>
                            <Button
                              variant=""
                              className="btn-default tablebutton me-2 my-1"
                              onClick={() => {
                                previousPage();
                              }}
                              disabled={!canPreviousPage}
                            >
                              {" < "}
                            </Button>
                            <Button
                              variant=""
                              className="btn-default tablebutton me-2 my-1"
                              onClick={() => {
                                nextPage();
                              }}
                              disabled={!canNextPage}
                            >
                              {" > "}
                            </Button>
                            <Button
                              variant=""
                              className="btn-default tablebutton me-2 my-1"
                              onClick={() => {
                                nextPage();
                              }}
                              disabled={!canNextPage}
                            >
                              {" >> "}
                            </Button>
                            <Button
                              variant=""
                              className="btn-default tablebutton me-2 d-sm-inline d-block my-1"
                              onClick={() => gotoPage(pageCount - 1)}
                              disabled={!canNextPage}
                            >
                              {" Next "}
                            </Button>
                          </span>
                        </div>
                      </>
                    </div>
                  </Card.Body>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
