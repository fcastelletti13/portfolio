import React from 'react';
import { Formik, Field, Form } from "formik";

const Footer = () => {
    return (
        <footer>

            <div className='footer'>
                <div>
                    <h3>Redes Sociales</h3>
                    <ul>
                        <li>Instagram</li>
                        <li>Telefono</li>
                        <li>Linkedin</li>
                        <li>github</li>
                    </ul>
                </div>
                <div>
                    <h1>Contactame</h1>
                    <Formik
                        initialValues={{ name: "", email: "" }}
                        onSubmit={async (values) => {
                            await new Promise((resolve) => setTimeout(resolve, 500));
                            alert(JSON.stringify(values, null, 2));
                        }}
                    >
                        <Form>
                            <Field name="name" type="text" />
                            <Field name="email" type="email" />
                            <button type="submit">Submit</button>
                        </Form>
                    </Formik>
                </div>
            </div>
        </footer>
    )
}

export default Footer