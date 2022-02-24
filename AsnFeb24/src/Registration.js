import { useFormik } from "formik"

const Registration = () => {
    const formik = useFormik({
        initialValues: {
            email: "abc@gmail.com",
            password: "",
            age: "",
            fullname: ""
        },

        onSubmit(values) {
            if (localStorage.getItem("Info")) {
                let arr = JSON.parse(localStorage.getItem("Info"));
                arr.push(values);
                arr = JSON.stringify(arr);
                localStorage.setItem("Info", arr);
            }
            else {
                let arr=[];
                arr.push(values);
                arr = JSON.stringify(arr);
                localStorage.setItem("Info", arr);
            }
        },
        validate() {
            const errors = {};
            if (formik.values.email.length < 5) {
                errors.email = "Email must contain greater than 5 characters";
            }
            else if (formik.values.email.length > 30) {
                errors.email = "Email must contain less than 30 characters"
            }
            if (formik.values.password.length < 4) {
                errors.password = "Password must contain greater than 4 characters";
            }
            else if (formik.values.password.length > 20) {
                errors.password = "Password must contain less than 20 characters";
            }
            if (formik.values.age < 18) {
                errors.age = `Age must be greater than 18`;
            }
            else if (formik.values.age > 120) {
                errors.age = `Age must be less than 120`;
            }
            if (formik.values.fullname.length < 5) {
                errors.fullName = "Fullname must contain greater than 4 characters";
            }
            else if (formik.values.fullname.length > 20) {
                errors.fullName = "Fullname must contain less than 20 characters";
            }
            return errors;
        },
    })
    console.log(`Formiks:${formik}`);
    return (
        <div className="Registration">
            <h2>Registration Form</h2>
        <form onSubmit={formik.handleSubmit} noValidate>
            <input type="email" name="email" value={formik.values.email} onChange={formik.handleChange} />
            <div className="text-danger">
                {formik.errors.email ? formik.errors.email : null}
            </div>


            <input type="password" name="password" value={formik.values.password} onChange={formik.handleChange} />
            <div className="text-danger">
                {formik.errors.password ? formik.errors.password : null}
            </div>

            <input type="age" name="age" value={formik.values.age} onChange={formik.handleChange} />
            <div className="text-danger">
                {formik.errors.age ? formik.errors.age : null}
            </div>

            <input type="text" name="fullname" value={formik.values.fullname} onChange={formik.handleChange} />
            <div className="text-danger">
                {formik.errors.fullname ? formik.errors.fullname : null}
            </div>
            <button  className="btn1">Submit</button>
        </form>
        </div>
    )
}
export default Registration;