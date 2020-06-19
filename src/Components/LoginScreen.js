import React from "react"
import {Formik} from "formik"
import Client from "../Client/Client"


const client = new Client();
class LoginScreen extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state =
        {
          
        }
    }

    render()
    {
    
      const {handleLogin} = this.props

        return(
            <div>
            <Formik
              initialValues={{ email: '', password: '' }}
              validate={values => {
                const errors = {};
                if (!values.email) {
                  errors.email = 'Required';
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = 'Invalid email address';
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => 
              {
                setTimeout(() => 
                {
                    client.chackEmailAndPassword(values.email,values.password)
                    .then(result => result.json())
                    .then(data =>
                        {
                            console.log(data);
                            if(data.code === 200)
                            {
                                //console.log(data.loginUser)
                                handleLogin(data.loginUser.userId,data.loginUser.firstName)
                            }
                        });
                }, 400);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
              }) => (
                <form onSubmit={handleSubmit}>
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  {errors.email && touched.email && errors.email}
                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                  {errors.password && touched.password && errors.password}
                  <button type="submit">
                    Submit
                  </button>
                </form>
              )}
            </Formik>
          </div>
        )

    }
}

export default LoginScreen  