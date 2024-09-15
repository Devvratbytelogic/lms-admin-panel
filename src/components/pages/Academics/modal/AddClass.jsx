import React from 'react'
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { useFormik } from "formik";
import Select from "react-select";
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../../../redux/slice/allModalSlice';

export default function AddClass() {
    const { isOpen, data } = useSelector((state) => state.allCommonModal)
    const dispatch = useDispatch();
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
    console.log('data', data);

    return (
        <>
            <Modal show={isOpen} size='md'>
                <Modal.Header className=" mx-2">
                    <Modal.Title as="h4" className="fw-semibold lh-1 my-auto text-center"> Add Class </Modal.Title>
                </Modal.Header>
                <Button onClick={() => dispatch(closeModal())} className="btn-close position-absolute end-0 p-3" variant="" ><i className="fe fe-x fw-bolder"></i></Button>
                <Modal.Body className="p-4">

                    <Form onSubmit={handleSubmit} className="p-2">
                        {/* <Row className='customm_border_bottom mb-4'>
                            <h4 className='ps-1 mb-2'>Add Class</h4>
                        </Row> */}
                        <Row className="mb-md-2">
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
                        <Row className="mb-md-2">
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
                        <Row className="mb-md-4 mt-4 mt-md-0">
                            <h4 className='ps-1 fw-medium mb-4 poppins_font'>Select Subject</h4>
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
                        <Row className="mt-4">
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
                </Modal.Body>
            </Modal>
        </>
    )
}
