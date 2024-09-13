import React from 'react'
import { Button, Form, Row, Col, Card } from "react-bootstrap";
import { useFormik } from "formik";
import Select from "react-select";

export default function Academics() {
    const initialValues = {
        title: "",
        banner_image: "",
        status: true,
        slug: "",
        tags: [],
        excerpt: "",
        category: null,
        content: "",
        meta_title: "",
        meta_description: "",
        meta_keywords: "",
        og_tag: "",
        schema_markup: "",
    };

    const { values, errors, handleBlur, touched, handleChange, handleSubmit, resetForm, setFieldValue, setFieldTouched, validateForm } = useFormik({
        initialValues: initialValues,
        validationSchema: '',
        onSubmit: async (values) => {
            const formData = new FormData();
            Object.entries(values).forEach(([key, value]) => {
                if (key === 'tags') {
                    value.forEach(tag => {
                        formData.append('tags', tag.label);
                    })
                } else if (key === 'category') {
                    value.forEach(cate => {
                        formData.append('category', cate.value);
                    })
                }
                else {
                    formData.append(key, value);
                }
            });
            try {
                const response = await addNewBlog(formData);
                if (response?.data?.http_status_code === 200) {
                    toast.success(response.data.message)
                    refetch()
                    navigate(`${getBlogsPage()}`)
                }
            } catch (error) {
                console.error(error);
            }
        },
    });
    const options = [
        { label: 'Section1', value: 'section1' },
        { label: 'Section2', value: 'section2' },
        { label: 'Section3', value: 'section3' },
        { label: 'Section4', value: 'section4' },
    ]
    return (
        <>
            <Row>
                <Col md={12}>
                    <Card>
                        <Card.Header className="card-header border-bottom-0">
                            <Row className='w-100'>
                                <Col md={6}>
                                    <h3 className="card-title">Classess List</h3>
                                </Col>
                                <Col md={6} className='text-end'>
                                    <div className='add_class_btn'>
                                        <i className='fa fa-plus'></i>
                                        <button>Add Class</button>
                                    </div>
                                </Col>
                            </Row>

                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col lg={3} md={6}>
                                    <Row className='class_list_wrapper '>
                                        <Col><h3 className='h4'>Class 1</h3></Col>
                                        <Col className='text-end h4 icon_color'><i className="fa fa-edit"></i></Col>
                                        <div className='d-flex flex-wrap px-0 gap-2 mt-4'>
                                            <p className='subject'>Math</p>
                                            <p className='subject'>Hindi</p>
                                            <p className='subject'>English</p>
                                            <p className='subject'>Music</p>
                                            <p className='subject'>Sports</p>
                                            <p className='subject'>Social Studies</p>
                                        </div>
                                    </Row>
                                    <Row className='class_list_wrapper '>
                                        <Col><h3 className='h4'>Class 5</h3></Col>
                                        <Col className='text-end h4 icon_color'><i className="fa fa-edit"></i></Col>
                                        <div className='d-flex flex-wrap px-0 gap-2 mt-4'>
                                            <p className='subject'>Math</p>
                                            <p className='subject'>Hindi</p>
                                            <p className='subject'>English</p>
                                            <p className='subject'>Music</p>
                                            <p className='subject'>Sports</p>
                                            <p className='subject'>Social Studies</p>
                                        </div>
                                    </Row>
                                    <Row className='class_list_wrapper '>
                                        <Col><h3 className='h4'>Class 9</h3></Col>
                                        <Col className='text-end h4 icon_color'><i className="fa fa-edit"></i></Col>
                                        <div className='d-flex flex-wrap px-0 gap-2 mt-4'>
                                            <p className='subject'>Math</p>
                                            <p className='subject'>Hindi</p>
                                            <p className='subject'>English</p>
                                            <p className='subject'>Music</p>
                                            <p className='subject'>Sports</p>
                                            <p className='subject'>Social Studies</p>
                                        </div>
                                    </Row>
                                </Col>
                                <Col lg={6} md={6}>
                                    <Card>
                                        <Card.Body className=''>
                                            <Form onSubmit={handleSubmit} className="p-2">
                                                <Row className='customm_border_bottom mb-4'>
                                                    <h4 className='ps-1 mb-2'>Add Class</h4>
                                                </Row>
                                                <Row className="mb-2">
                                                    <Form.Group as={Col} md="6" className='custom_col'>
                                                        <Form.Control title="text" name="title" onChange={handleChange} onBlur={handleBlur} value={values.title} placeholder='Class Name' />
                                                        {errors.title && touched.title ? (
                                                            <p className={`error`}>{errors.title}</p>
                                                        ) : null}
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="6" className='custom_col'>
                                                        <Select
                                                            options={options}
                                                            name="category"
                                                            value={values.category}
                                                            onChange={(selectedOptions) =>
                                                                setFieldValue("category", selectedOptions)
                                                            }
                                                            onBlur={handleBlur}
                                                            // isMulti
                                                            className="select_box"
                                                            isSearchable
                                                        />
                                                        {errors.banner_image && touched.banner_image ? (
                                                            <p className={`error`}>{errors.banner_image}</p>
                                                        ) : null}
                                                    </Form.Group>
                                                </Row>
                                                <Row className="mb-2">
                                                    <Form.Group as={Col} md="6" className='custom_col'>
                                                        <Form.Control
                                                            title="text"
                                                            name="title"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.title}
                                                            placeholder='Room Number'
                                                        />
                                                        {errors.title && touched.title ? (
                                                            <p className={`error`}>{errors.title}</p>
                                                        ) : null}
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="6" className='custom_col'>
                                                        <Button type="submit" className="btn-primary mx-auto w-100">Create Class</Button>
                                                    </Form.Group>
                                                </Row>
                                                <Row className="mt-5">
                                                    <h4 className='ps-1 mb-4'>Select Subject</h4>
                                                    <Form.Group as={Col} md="4" lg="6" className='custom_col mb-2'>
                                                        <Select
                                                            options={options}
                                                            name="category"
                                                            value={values.category}
                                                            onChange={(selectedOptions) =>
                                                                setFieldValue("category", selectedOptions)
                                                            }
                                                            onBlur={handleBlur}
                                                            placeholder="Select Class"
                                                            className="select_box"
                                                            isSearchable
                                                        />
                                                        {errors.banner_image && touched.banner_image ? (
                                                            <p className={`error`}>{errors.banner_image}</p>
                                                        ) : null}
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="4" lg="6" className='custom_col mb-2'>
                                                        <Select
                                                            options={options}
                                                            name="category"
                                                            value={values.category}
                                                            onChange={(selectedOptions) =>
                                                                setFieldValue("category", selectedOptions)
                                                            }
                                                            onBlur={handleBlur}
                                                            placeholder="Select Subject"
                                                            className="select_box"
                                                            isSearchable
                                                        />
                                                        {errors.banner_image && touched.banner_image ? (
                                                            <p className={`error`}>{errors.banner_image}</p>
                                                        ) : null}
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="4" lg="6" className='custom_col mb-2'>
                                                        <Select
                                                            options={options}
                                                            name="category"
                                                            value={values.category}
                                                            onChange={(selectedOptions) =>
                                                                setFieldValue("category", selectedOptions)
                                                            }
                                                            onBlur={handleBlur}
                                                            placeholder="Select Teacher"
                                                            className="select_box"
                                                            isSearchable
                                                        />
                                                        {errors.banner_image && touched.banner_image ? (
                                                            <p className={`error`}>{errors.banner_image}</p>
                                                        ) : null}
                                                    </Form.Group>
                                                </Row>
                                                <Row className="mt-5">
                                                    <div className='class_table px-0'>
                                                        <div className='class_head'>
                                                            <p>Class</p>
                                                            <p>Subject Class</p>
                                                            <p>Teacher's name</p>
                                                        </div>
                                                        <div className='class_table_row'></div>
                                                        <div className='class_table_row'></div>
                                                        <div className='class_table_row'></div>
                                                        <div className='class_table_row'></div>
                                                        <div className='class_table_row'></div>
                                                        <Form.Group as={Col} md="12" className='custom_col mt-4 text-end'>
                                                            <Button type="submit" className="btn-primary ms-auto px-6">Save</Button>
                                                        </Form.Group>
                                                    </div>
                                                </Row>

                                            </Form>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col lg={3} md={6}>
                                    <Row className='class_list_wrapper '>
                                        <Col><h3 className='h4'>Class 1</h3></Col>
                                        <Col className='text-end h4 icon_color'><i className="fa fa-edit"></i></Col>
                                        <div className='d-flex flex-wrap px-0 gap-2 mt-4'>
                                            <p className='subject'>Math</p>
                                            <p className='subject'>Hindi</p>
                                            <p className='subject'>English</p>
                                            <p className='subject'>Music</p>
                                            <p className='subject'>Sports</p>
                                            <p className='subject'>Social Studies</p>
                                        </div>
                                    </Row>
                                    <Row className='class_list_wrapper '>
                                        <Col><h3 className='h4'>Class 5</h3></Col>
                                        <Col className='text-end h4 icon_color'><i className="fa fa-edit"></i></Col>
                                        <div className='d-flex flex-wrap px-0 gap-2 mt-4'>
                                            <p className='subject'>Math</p>
                                            <p className='subject'>Hindi</p>
                                            <p className='subject'>English</p>
                                            <p className='subject'>Music</p>
                                            <p className='subject'>Sports</p>
                                            <p className='subject'>Social Studies</p>
                                        </div>
                                    </Row>
                                    <Row className='class_list_wrapper '>
                                        <Col><h3 className='h4'>Class 9</h3></Col>
                                        <Col className='text-end h4 icon_color'><i className="fa fa-edit"></i></Col>
                                        <div className='d-flex flex-wrap px-0 gap-2 mt-4'>
                                            <p className='subject'>Math</p>
                                            <p className='subject'>Hindi</p>
                                            <p className='subject'>English</p>
                                            <p className='subject'>Music</p>
                                            <p className='subject'>Sports</p>
                                            <p className='subject'>Social Studies</p>
                                        </div>
                                    </Row>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}
