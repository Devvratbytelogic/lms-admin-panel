import React from "react";
import {Row,Col,Card, Button} from "react-bootstrap"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { TreeItem } from '@mui/lab'
import  TreeView from '@mui/lab/TreeView';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import Box from '@mui/material/Box';
import PageHeader from "../../../layouts/layoutcomponents/pageheader";

export default function Treeview() {

  const [expanded, setExpanded] = React.useState([]);
  const [selected, setSelected] = React.useState([]);

  const handleToggle = (nodeIds) => {
    setExpanded(nodeIds);
  };

  const handleSelect = (nodeIds) => {
    setSelected(nodeIds);
  };
  const handleExpandClick = () => {
    setExpanded((oldExpanded) =>
      oldExpanded.length === 0 ? ['1', '20', '39', '58', '77', '96', '2', '9'] : [],
    );
  };
  const handleSelectClick = () => {
    setSelected((oldSelected) =>
      oldSelected.length === 0 ? ['1', '20', '39', '58', '77', '96', '2', '9'] : [],
    );
  };
  return (
    <div>
             <PageHeader titles="Trreview" active="Trreview" items={['Components']} />

      <Row>
        <Col md={12}>
          <Card className=" mg-b-20">
            <Card.Body>
              <div className="main-content-label mg-b-5">Basic Treeview</div>
              <p className="mg-b-20 card-sub-title tx-12 text-muted">
                It is Very Easy to Customize and it uses in website apllication.
              </p>
              <Row>
                <Col lg={4}>
                      <TreeView
      aria-label="file system navigator"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
    
    >
      <TreeItem nodeId="1" label="TECH">
        <TreeItem nodeId="2" label="Company Maintenance" />
        <TreeItem nodeId="3" label="Employees">
        <TreeItem nodeId="4" label="Reports" />
        </TreeItem>
        <TreeItem nodeId="5" label="Human Resources" />
      </TreeItem>
      <TreeItem nodeId="6" label="XRP">
      <TreeItem nodeId="7" label="Company Maintenance" />
        <TreeItem nodeId="8" label="Employees">
        <TreeItem nodeId="9" label="Reports" />
        </TreeItem>
        <TreeItem nodeId="10" label="Human Resources" />
      </TreeItem>
    </TreeView>
                </Col>
                <Col className=" mt-4 mt-lg-0" lg={4}>
                    <TreeView
        aria-label="file system navigator"
        defaultCollapseIcon={<RemoveCircleOutlineIcon/>}
        defaultExpandIcon={<AddCircleOutlineIcon />}
        
      >
        <TreeItem nodeId="1" label="TECH">
          <TreeItem nodeId="2" label="Company Maintenance" />
          <TreeItem nodeId="3" label="Employees">
          <TreeItem nodeId="4" label="Reports" />
          </TreeItem>
          <TreeItem nodeId="5" label="Human Resources" />
        </TreeItem>
        <TreeItem nodeId="6" label="XRP">
        <TreeItem nodeId="7" label="Company Maintenance" />
          <TreeItem nodeId="8" label="Employees">
          <TreeItem nodeId="9" label="Reports" />
          </TreeItem>
          <TreeItem nodeId="10" label="Human Resources" />
        </TreeItem>
      </TreeView>
                </Col>
                <Col lg={4} className="mt-4 mt-lg-0">
                      <TreeView
        aria-label="file system navigator"
        defaultCollapseIcon={<FolderOpenIcon/>}
        defaultExpandIcon={<FolderOpenIcon />}
        
      >
        <TreeItem nodeId="1" label="TECH">
          <TreeItem nodeId="2" label="Company Maintenance" />
          <TreeItem nodeId="3" label="Employees">
          <TreeItem nodeId="4" label="Reports" />
          </TreeItem>
          <TreeItem nodeId="5" label="Human Resources" />
        </TreeItem>
        <TreeItem nodeId="6" label="XRP">
        <TreeItem nodeId="7" label="Company Maintenance" />
          <TreeItem nodeId="8" label="Employees">
          <TreeItem nodeId="9" label="Reports" />
          </TreeItem>
          <TreeItem nodeId="10" label="Human Resources" />
        </TreeItem>
      </TreeView>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <div className="main-content-label mg-b-5">Tree View Styles</div>
              <p className="mg-b-20 card-sub-title tx-12 text-muted">
                It is Very Easy to Customize and it uses in website apllication.
              </p>
              <Row>
                <Col lg={6} xl={4}>
                    <Col lg={6} className="collapsabletreeview1">
                  <TreeView
        aria-label="file system navigator"
        defaultCollapseIcon={<RemoveCircleOutlineIcon className='text-danger'/>}
        defaultExpandIcon={<AddCircleOutlineIcon className='text-primary'/>}
      >
        <TreeItem nodeId="1" label="Treeview1">
        <TreeItem nodeId="2" label="Company Maintenance"/>
        <TreeItem nodeId="3" label="Employees">
        <TreeItem nodeId="4" label="Reports">
        <TreeItem nodeId="5" label="Report1"/>
        <TreeItem nodeId="6" label="Report2"/>
        <TreeItem nodeId="7" label="Report3"/>
        </TreeItem>
        <TreeItem nodeId="8" label="Employee Maint.">
        <TreeItem nodeId="9" label="Reports">
        <TreeItem nodeId="10" label="Report1"/>
        <TreeItem nodeId="11" label="Report2"/>
        <TreeItem nodeId="12" label="Report3"/>
        </TreeItem>
        <TreeItem nodeId="13" label="Employee Maint."/>
        <TreeItem nodeId="14" label="Reports">
        <TreeItem nodeId="15" label="Report1"/>
        <TreeItem nodeId="16" label="Report2"/>
        <TreeItem nodeId="17" label="Report3"/>
        </TreeItem>
        <TreeItem nodeId="18" label="Employee Maint."/>
        </TreeItem>
        </TreeItem>
        <TreeItem nodeId="19" label="Human Resources"/>
        </TreeItem>
        <TreeItem nodeId="20" label="Treeview2">
        <TreeItem nodeId="21" label="Company Maintenance"/>
        <TreeItem nodeId="22" label="Employees">
        <TreeItem nodeId="23" label="Reports">
        <TreeItem nodeId="24" label="Report1"/>
        <TreeItem nodeId="25" label="Report2"/>
        <TreeItem nodeId="26" label="Report3"/>
        </TreeItem>
        <TreeItem nodeId="27" label="Employee Maint.">
        <TreeItem nodeId="28" label="Reports">
        <TreeItem nodeId="29" label="Report1"/>
        <TreeItem nodeId="30" label="Report2"/>
        <TreeItem nodeId="31" label="Report3"/>
        </TreeItem>
        <TreeItem nodeId="32" label="Employee Maint."/>
        <TreeItem nodeId="33" label="Reports">
        <TreeItem nodeId="34" label="Report1"/>
        <TreeItem nodeId="35" label="Report2"/>
        <TreeItem nodeId="36" label="Report3"/>
        </TreeItem>
        <TreeItem nodeId="37" label="Employee Maint."/>
        </TreeItem>
        </TreeItem>
        <TreeItem nodeId="38" label="Human Resources"/>
        </TreeItem>
        <TreeItem nodeId="39" label="Treeview3">
        <TreeItem nodeId="40" label="Company Maintenance"/>
        <TreeItem nodeId="41" label="Employees">
        <TreeItem nodeId="42" label="Reports">
        <TreeItem nodeId="43" label="Report1"/>
        <TreeItem nodeId="44" label="Report2"/>
        <TreeItem nodeId="45" label="Report3"/>
        </TreeItem>
        <TreeItem nodeId="46" label="Employee Maint.">
        <TreeItem nodeId="47" label="Reports">
        <TreeItem nodeId="48" label="Report1"/>
        <TreeItem nodeId="49" label="Report2"/>
        <TreeItem nodeId="50" label="Report3"/>
        </TreeItem>
        <TreeItem nodeId="51" label="Employee Maint."/>
        <TreeItem nodeId="52" label="Reports">
        <TreeItem nodeId="53" label="Report1"/>
        <TreeItem nodeId="54" label="Report2"/>
        <TreeItem nodeId="55" label="Report3"/>
        </TreeItem>
        <TreeItem nodeId="56" label="Employee Maint."/>
        </TreeItem>
        </TreeItem>
        <TreeItem nodeId="57" label="Human Resources"/>
        </TreeItem>
        <TreeItem nodeId="58" label="Treeview4">
        <TreeItem nodeId="59" label="Company Maintenance"/>
        <TreeItem nodeId="60" label="Employees">
        <TreeItem nodeId="61" label="Reports">
        <TreeItem nodeId="62" label="Report1"/>
        <TreeItem nodeId="63" label="Report2"/>
        <TreeItem nodeId="64" label="Report3"/>
        </TreeItem>
        <TreeItem nodeId="65" label="Employee Maint.">
        <TreeItem nodeId="66" label="Reports">
        <TreeItem nodeId="67" label="Report1"/>
        <TreeItem nodeId="68" label="Report2"/>
        <TreeItem nodeId="69" label="Report3"/>
        </TreeItem>
        <TreeItem nodeId="70" label="Employee Maint."/>
        <TreeItem nodeId="71" label="Reports">
        <TreeItem nodeId="72" label="Report1"/>
        <TreeItem nodeId="73" label="Report2"/>
        <TreeItem nodeId="74" label="Report3"/>
        </TreeItem>
        <TreeItem nodeId="75" label="Employee Maint."/>
        </TreeItem>
        </TreeItem>
        <TreeItem nodeId="76" label="Human Resources"/>
        </TreeItem>
        <TreeItem nodeId="77" label="Treeview5">
        <TreeItem nodeId="78" label="Company Maintenance"/>
        <TreeItem nodeId="79" label="Employees">
        <TreeItem nodeId="80" label="Reports">
        <TreeItem nodeId="81" label="Report1"/>
        <TreeItem nodeId="82" label="Report2"/>
        <TreeItem nodeId="83" label="Report3"/>
        </TreeItem>
        <TreeItem nodeId="84" label="Employee Maint.">
        <TreeItem nodeId="85" label="Reports">
        <TreeItem nodeId="86" label="Report1"/>
        <TreeItem nodeId="87" label="Report2"/>
        <TreeItem nodeId="88" label="Report3"/>
        </TreeItem>
        <TreeItem nodeId="89" label="Employee Maint."/>
        <TreeItem nodeId="90" label="Reports">
        <TreeItem nodeId="91" label="Report1"/>
        <TreeItem nodeId="92" label="Report2"/>
        <TreeItem nodeId="93" label="Report3"/>
        </TreeItem>
        <TreeItem nodeId="94" label="Employee Maint."/>
        </TreeItem>
        </TreeItem>
        <TreeItem nodeId="95" label="Human Resources"/>
        </TreeItem>
        <TreeItem nodeId="96" label="Treeview6">
        <TreeItem nodeId="97" label="Company Maintenance"/>
        <TreeItem nodeId="98" label="Employees">
        <TreeItem nodeId="99" label="Reports">
        <TreeItem nodeId="100" label="Report1"/>
        <TreeItem nodeId="101" label="Report2"/>
        <TreeItem nodeId="102" label="Report3"/>
        </TreeItem>
        <TreeItem nodeId="103" label="Employee Maint.">
        <TreeItem nodeId="104" label="Reports">
        <TreeItem nodeId="105" label="Report1"/>
        <TreeItem nodeId="106" label="Report2"/>
        <TreeItem nodeId="107" label="Report3"/>
        </TreeItem>
        <TreeItem nodeId="108" label="Employee Maint."/>
        <TreeItem nodeId="109" label="Reports">
        <TreeItem nodeId="110" label="Report1"/>
        <TreeItem nodeId="111" label="Report2"/>
        <TreeItem nodeId="112" label="Report3"/>
        </TreeItem>
        <TreeItem nodeId="113" label="Employee Maint."/>
        </TreeItem>
        </TreeItem>
        <TreeItem nodeId="114" label="Human Resources"/>
        </TreeItem>
      </TreeView>
                </Col>
                </Col>
                <Col className=" mt-4 mt-lg-0" lg={6} xl={4}>
                      <TreeView
      aria-label="file system navigator"
      defaultCollapseIcon={<RemoveCircleOutlineIcon className='text-danger'/>}
      defaultExpandIcon={<AddCircleOutlineIcon className='text-primary'/>}
    >
      <TreeItem nodeId="1"   label="Treeview1">
      <TreeItem nodeId="2"   label="Company Maintenance" className='text-warning'/>
      <TreeItem nodeId="3"   label="Employees"className='text-pink'>
      <TreeItem nodeId="4"   label="Reports">
      <TreeItem nodeId="5"   label="Report1" className='text-success'/>
      <TreeItem nodeId="6"   label="Report2" className='text-success'/>
      <TreeItem nodeId="7"   label="Report3" className='text-success'/>
      </TreeItem>
      <TreeItem nodeId="8"   label="Employee Maint.">
      <TreeItem nodeId="9"   label="Reports">
      <TreeItem nodeId="10"  label="Report1" className='text-success'/>
      <TreeItem nodeId="11"  label="Report2" className='text-success'/>
      <TreeItem nodeId="12"  label="Report3" className='text-success'/>
      </TreeItem>
      <TreeItem nodeId="13"  label="Employee Maint." className='text-warning'/>
      <TreeItem nodeId="14"  label="Reports">
      <TreeItem nodeId="15"  label="Report1" className='text-success'/>
      <TreeItem nodeId="16"  label="Report2" className='text-success'/>
      <TreeItem nodeId="17"  label="Report3" className='text-success'/>
      </TreeItem>
      <TreeItem nodeId="18"  label="Employee Maint." className='text-warning'/>
      </TreeItem>
      </TreeItem>
      <TreeItem nodeId="19"  label="Human Resources" className='text-warning' />
      </TreeItem>
      <TreeItem nodeId="20" label="Treeview1">
      <TreeItem nodeId="21" label="Company Maintenance" className='text-warning'/>
      <TreeItem nodeId="22" label="Employees"className='text-pink'>
      <TreeItem nodeId="23" label="Reports">
      <TreeItem nodeId="24" label="Report1" className='text-success'/>
      <TreeItem nodeId="25" label="Report2" className='text-success'/>
      <TreeItem nodeId="26" label="Report3" className='text-success'/>
      </TreeItem>
      <TreeItem nodeId="27" label="Employee Maint.">
      <TreeItem nodeId="28" label="Reports">
      <TreeItem nodeId="29"  label="Report1" className='text-success'/>
      <TreeItem nodeId="30"  label="Report2" className='text-success'/>
      <TreeItem nodeId="31"  label="Report3" className='text-success'/>
      </TreeItem>
      <TreeItem nodeId="32"  label="Employee Maint." className='text-warning'/>
      <TreeItem nodeId="33"  label="Reports">
      <TreeItem nodeId="34"  label="Report1" className='text-success'/>
      <TreeItem nodeId="35"  label="Report2" className='text-success'/>
      <TreeItem nodeId="36"  label="Report3" className='text-success'/>
      </TreeItem>
      <TreeItem nodeId="37"  label="Employee Maint." className='text-warning'/>
      </TreeItem>
      </TreeItem>
      <TreeItem nodeId="38"  label="Human Resources" className='text-warning' />
      </TreeItem>
      <TreeItem nodeId="39" label="Treeview1">
      <TreeItem nodeId="40" label="Company Maintenance" className='text-warning'/>
      <TreeItem nodeId="41" label="Employees"className='text-pink'>
      <TreeItem nodeId="42" label="Reports">
      <TreeItem nodeId="43" label="Report1" className='text-success'/>
      <TreeItem nodeId="44" label="Report2" className='text-success'/>
      <TreeItem nodeId="45" label="Report3" className='text-success'/>
      </TreeItem>
      <TreeItem nodeId="46" label="Employee Maint.">
      <TreeItem nodeId="47" label="Reports">
      <TreeItem nodeId="48"  label="Report1" className='text-success'/>
      <TreeItem nodeId="49"  label="Report2" className='text-success'/>
      <TreeItem nodeId="50"  label="Report3" className='text-success'/>
      </TreeItem>
      <TreeItem nodeId="51"  label="Employee Maint." className='text-warning'/>
      <TreeItem nodeId="52"  label="Reports">
      <TreeItem nodeId="53"  label="Report1" className='text-success'/>
      <TreeItem nodeId="54"  label="Report2" className='text-success'/>
      <TreeItem nodeId="55"  label="Report3" className='text-success'/>
      </TreeItem>
      <TreeItem nodeId="56"  label="Employee Maint." className='text-warning'/>
      </TreeItem>
      </TreeItem>
      <TreeItem nodeId="57"  label="Human Resources" className='text-warning' />
      </TreeItem>
      <TreeItem nodeId="58" label="Treeview1">
      <TreeItem nodeId="59" label="Company Maintenance" className='text-warning'/>
      <TreeItem nodeId="60" label="Employees"className='text-pink'>
      <TreeItem nodeId="61" label="Reports">
      <TreeItem nodeId="62" label="Report1" className='text-success'/>
      <TreeItem nodeId="63" label="Report2" className='text-success'/>
      <TreeItem nodeId="64" label="Report3" className='text-success'/>
      </TreeItem>
      <TreeItem nodeId="65" label="Employee Maint.">
      <TreeItem nodeId="66" label="Reports">
      <TreeItem nodeId="67"  label="Report1" className='text-success'/>
      <TreeItem nodeId="68"  label="Report2" className='text-success'/>
      <TreeItem nodeId="69"  label="Report3" className='text-success'/>
      </TreeItem>
      <TreeItem nodeId="70"  label="Employee Maint." className='text-warning'/>
      <TreeItem nodeId="71"  label="Reports">
      <TreeItem nodeId="72"  label="Report1" className='text-success'/>
      <TreeItem nodeId="73"  label="Report2" className='text-success'/>
      <TreeItem nodeId="74"  label="Report3" className='text-success'/>
      </TreeItem>
      <TreeItem nodeId="75"  label="Employee Maint." className='text-warning'/>
      </TreeItem>
      </TreeItem>
      <TreeItem nodeId="76"  label="Human Resources" className='text-warning' />
      </TreeItem>
      <TreeItem nodeId="77" label="Treeview1">
      <TreeItem nodeId="78" label="Company Maintenance" className='text-warning'/>
      <TreeItem nodeId="79" label="Employees"className='text-pink'>
      <TreeItem nodeId="80" label="Reports">
      <TreeItem nodeId="81" label="Report1" className='text-success'/>
      <TreeItem nodeId="82" label="Report2" className='text-success'/>
      <TreeItem nodeId="83" label="Report3" className='text-success'/>
      </TreeItem>
      <TreeItem nodeId="84" label="Employee Maint.">
      <TreeItem nodeId="85" label="Reports">
      <TreeItem nodeId="86"  label="Report1" className='text-success'/>
      <TreeItem nodeId="87"  label="Report2" className='text-success'/>
      <TreeItem nodeId="88"  label="Report3" className='text-success'/>
      </TreeItem>
      <TreeItem nodeId="89"  label="Employee Maint." className='text-warning'/>
      <TreeItem nodeId="90"  label="Reports">
      <TreeItem nodeId="91"  label="Report1" className='text-success'/>
      <TreeItem nodeId="92"  label="Report2" className='text-success'/>
      <TreeItem nodeId="93"  label="Report3" className='text-success'/>
      </TreeItem>
      <TreeItem nodeId="94"  label="Employee Maint." className='text-warning'/>
      </TreeItem>
      </TreeItem>
      <TreeItem nodeId="95"  label="Human Resources" className='text-warning' />
      </TreeItem>
      <TreeItem nodeId="96" label="Treeview1">
      <TreeItem nodeId="97" label="Company Maintenance" className='text-warning'/>
      <TreeItem nodeId="98" label="Employees"className='text-pink'>
      <TreeItem nodeId="99" label="Reports">
      <TreeItem nodeId="100"label="Report1" className='text-success'/>
      <TreeItem nodeId="101"label="Report2" className='text-success'/>
      <TreeItem nodeId="102"label="Report3" className='text-success'/>
      </TreeItem>
      <TreeItem nodeId="103"label="Employee Maint.">
      <TreeItem nodeId="104"label="Reports">
      <TreeItem nodeId="105" label="Report1" className='text-success'/>
      <TreeItem nodeId="106" label="Report2" className='text-success'/>
      <TreeItem nodeId="107" label="Report3" className='text-success'/>
      </TreeItem>
      <TreeItem nodeId="108" label="Employee Maint." className='text-warning'/>
      <TreeItem nodeId="109" label="Reports">
      <TreeItem nodeId="110" label="Report1" className='text-success'/>
      <TreeItem nodeId="111" label="Report2" className='text-success'/>
      <TreeItem nodeId="112" label="Report3" className='text-success'/>
      </TreeItem>
      <TreeItem nodeId="113" label="Employee Maint." className='text-warning'/>
      </TreeItem>
      </TreeItem>
      <TreeItem nodeId="114" label="Human Resources" className='text-warning' />
      </TreeItem>
    </TreeView>
                </Col>
                <Col className=" mt-4 mt-lg-0" lg={6} xl={4}>
                   <Col lg={12} className="mt-2 mt-lg-0 collapsabletreeview">
                  <Box sx={{ flexGrow: 1, overflowY: 'auto' }}>

       <TreeView
       aria-label="file system navigator"
       defaultCollapseIcon={<i className="fe fe-chevron-right fs-16"></i>}
       defaultExpandIcon={<i className="fe fe-chevron-down fs-16"></i>}
    >
      <TreeItem nodeId="1"   label="Treeview1">
      <TreeItem nodeId="2"   label="Company Maintenance" className='text-warning'/>
      <TreeItem nodeId="3"   label="Employees"className='text-pink'>
      <TreeItem nodeId="4"   label="Reports">
      <TreeItem nodeId="5"   label="Report1" className='text-success'/>
      <TreeItem nodeId="6"   label="Report2" className='text-success'/>
      <TreeItem nodeId="7"   label="Report3" className='text-success'/>
      </TreeItem>
      <TreeItem nodeId="8"   label="Employee Maint.">
      <TreeItem nodeId="9"   label="Reports">
      <TreeItem nodeId="10"  label="Report1" className='text-success'/>
      <TreeItem nodeId="11"  label="Report2" className='text-success'/>
      <TreeItem nodeId="12"  label="Report3" className='text-success'/>
      </TreeItem>
      <TreeItem nodeId="13"  label="Employee Maint." className='text-warning'/>
      <TreeItem nodeId="14"  label="Reports">
      <TreeItem nodeId="15"  label="Report1" className='text-success'/>
      <TreeItem nodeId="16"  label="Report2" className='text-success'/>
      <TreeItem nodeId="17"  label="Report3" className='text-success'/>
      </TreeItem>
      <TreeItem nodeId="18"  label="Employee Maint." className='text-warning'/>
      </TreeItem>
      </TreeItem>
      <TreeItem nodeId="19"  label="Human Resources" className='text-warning' />
      </TreeItem>
      <TreeItem nodeId="20" label="Treeview1">
      <TreeItem nodeId="21" label="Company Maintenance" className='text-warning'/>
      <TreeItem nodeId="22" label="Employees"className='text-pink'>
      <TreeItem nodeId="23" label="Reports">
      <TreeItem nodeId="24" label="Report1" className='text-success'/>
      <TreeItem nodeId="25" label="Report2" className='text-success'/>
      <TreeItem nodeId="26" label="Report3" className='text-success'/>
      </TreeItem>
      <TreeItem nodeId="27" label="Employee Maint.">
      <TreeItem nodeId="28" label="Reports">
      <TreeItem nodeId="29"  label="Report1" className='text-success'/>
      <TreeItem nodeId="30"  label="Report2" className='text-success'/>
      <TreeItem nodeId="31"  label="Report3" className='text-success'/>
      </TreeItem>
      <TreeItem nodeId="32"  label="Employee Maint." className='text-warning'/>
      <TreeItem nodeId="33"  label="Reports">
      <TreeItem nodeId="34"  label="Report1" className='text-success'/>
      <TreeItem nodeId="35"  label="Report2" className='text-success'/>
      <TreeItem nodeId="36"  label="Report3" className='text-success'/>
      </TreeItem>
      <TreeItem nodeId="37"  label="Employee Maint." className='text-warning'/>
      </TreeItem>
      </TreeItem>
      <TreeItem nodeId="38"  label="Human Resources" className='text-warning' />
      </TreeItem>
      <TreeItem nodeId="39" label="Treeview1">
      <TreeItem nodeId="40" label="Company Maintenance" className='text-warning'/>
      <TreeItem nodeId="41" label="Employees"className='text-pink'>
      <TreeItem nodeId="42" label="Reports">
      <TreeItem nodeId="43" label="Report1" className='text-success'/>
      <TreeItem nodeId="44" label="Report2" className='text-success'/>
      <TreeItem nodeId="45" label="Report3" className='text-success'/>
      </TreeItem>
      <TreeItem nodeId="46" label="Employee Maint.">
      <TreeItem nodeId="47" label="Reports">
      <TreeItem nodeId="48"  label="Report1" className='text-success'/>
      <TreeItem nodeId="49"  label="Report2" className='text-success'/>
      <TreeItem nodeId="50"  label="Report3" className='text-success'/>
      </TreeItem>
      <TreeItem nodeId="51"  label="Employee Maint." className='text-warning'/>
      <TreeItem nodeId="52"  label="Reports">
      <TreeItem nodeId="53"  label="Report1" className='text-success'/>
      <TreeItem nodeId="54"  label="Report2" className='text-success'/>
      <TreeItem nodeId="55"  label="Report3" className='text-success'/>
      </TreeItem>
      <TreeItem nodeId="56"  label="Employee Maint." className='text-warning'/>
      </TreeItem>
      </TreeItem>
      <TreeItem nodeId="57"  label="Human Resources" className='text-warning' />
      </TreeItem>
      <TreeItem nodeId="58" label="Treeview1">
      <TreeItem nodeId="59" label="Company Maintenance" className='text-warning'/>
      <TreeItem nodeId="60" label="Employees"className='text-pink'>
      <TreeItem nodeId="61" label="Reports">
      <TreeItem nodeId="62" label="Report1" className='text-success'/>
      <TreeItem nodeId="63" label="Report2" className='text-success'/>
      <TreeItem nodeId="64" label="Report3" className='text-success'/>
      </TreeItem>
      <TreeItem nodeId="65" label="Employee Maint.">
      <TreeItem nodeId="66" label="Reports">
      <TreeItem nodeId="67"  label="Report1" className='text-success'/>
      <TreeItem nodeId="68"  label="Report2" className='text-success'/>
      <TreeItem nodeId="69"  label="Report3" className='text-success'/>
      </TreeItem>
      <TreeItem nodeId="70"  label="Employee Maint." className='text-warning'/>
      <TreeItem nodeId="71"  label="Reports">
      <TreeItem nodeId="72"  label="Report1" className='text-success'/>
      <TreeItem nodeId="73"  label="Report2" className='text-success'/>
      <TreeItem nodeId="74"  label="Report3" className='text-success'/>
      </TreeItem>
      <TreeItem nodeId="75"  label="Employee Maint." className='text-warning'/>
      </TreeItem>
      </TreeItem>
      <TreeItem nodeId="76"  label="Human Resources" className='text-warning' />
      </TreeItem>
      <TreeItem nodeId="77" label="Treeview1">
      <TreeItem nodeId="78" label="Company Maintenance" className='text-warning'/>
      <TreeItem nodeId="79" label="Employees"className='text-pink'>
      <TreeItem nodeId="80" label="Reports">
      <TreeItem nodeId="81" label="Report1" className='text-success'/>
      <TreeItem nodeId="82" label="Report2" className='text-success'/>
      <TreeItem nodeId="83" label="Report3" className='text-success'/>
      </TreeItem>
      <TreeItem nodeId="84" label="Employee Maint.">
      <TreeItem nodeId="85" label="Reports">
      <TreeItem nodeId="86"  label="Report1" className='text-success'/>
      <TreeItem nodeId="87"  label="Report2" className='text-success'/>
      <TreeItem nodeId="88"  label="Report3" className='text-success'/>
      </TreeItem>
      <TreeItem nodeId="89"  label="Employee Maint." className='text-warning'/>
      <TreeItem nodeId="90"  label="Reports">
      <TreeItem nodeId="91"  label="Report1" className='text-success'/>
      <TreeItem nodeId="92"  label="Report2" className='text-success'/>
      <TreeItem nodeId="93"  label="Report3" className='text-success'/>
      </TreeItem>
      <TreeItem nodeId="94"  label="Employee Maint." className='text-warning'/>
      </TreeItem>
      </TreeItem>
      <TreeItem nodeId="95"  label="Human Resources" className='text-warning' />
      </TreeItem>
      <TreeItem nodeId="96" label="Treeview1">
      <TreeItem nodeId="97" label="Company Maintenance" className='text-warning'/>
      <TreeItem nodeId="98" label="Employees"className='text-pink'>
      <TreeItem nodeId="99" label="Reports">
      <TreeItem nodeId="100"label="Report1" className='text-success'/>
      <TreeItem nodeId="101"label="Report2" className='text-success'/>
      <TreeItem nodeId="102"label="Report3" className='text-success'/>
      </TreeItem>
      <TreeItem nodeId="103"label="Employee Maint.">
      <TreeItem nodeId="104"label="Reports">
      <TreeItem nodeId="105" label="Report1" className='text-success'/>
      <TreeItem nodeId="106" label="Report2" className='text-success'/>
      <TreeItem nodeId="107" label="Report3" className='text-success'/>
      </TreeItem>
      <TreeItem nodeId="108" label="Employee Maint." className='text-warning'/>
      <TreeItem nodeId="109" label="Reports">
      <TreeItem nodeId="110" label="Report1" className='text-success'/>
      <TreeItem nodeId="111" label="Report2" className='text-success'/>
      <TreeItem nodeId="112" label="Report3" className='text-success'/>
      </TreeItem>
      <TreeItem nodeId="113" label="Employee Maint." className='text-warning'/>
      </TreeItem>
      </TreeItem>
      <TreeItem nodeId="114" label="Human Resources" className='text-warning' />
      </TreeItem>
    </TreeView>
    </Box>
                </Col>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
