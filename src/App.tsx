import ListGroup from "./components/ListGroup";
import { successNotification } from "./notification";
import React, { useRef } from "react";
import { useFormik } from "formik";
import { ListBox } from "primereact/listbox";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";
//core
import "primereact/resources/primereact.min.css";
//icons
import "primeicons/primeicons.css";
function App() {
  const toast = useRef(null);
  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" }
  ];

  const show = () => {
    toast.current.show({
      severity: "info",
      summary: formik.values.item.name,
      detail: formik.values.item.code
    });
  };

  const formik = useFormik({
    initialValues: {
      item: ""
    },
    validate: data => {
      let errors = {};

      if (!data.item) {
        errors.item = "City is required.";
      }

      return errors;
    },
    onSubmit: data => {
      data.item && show(data);
      formik.resetForm();
    }
  });

  const isFormFieldInvalid = name =>
    !!(formik.touched[name] && formik.errors[name]);

  const getFormErrorMessage = name => {
    return isFormFieldInvalid(name) ? (
      <small className="p-error">{formik.errors[name]}</small>
    ) : (
      <small className="p-error">&nbsp;</small>
    );
  };
  return (
    <>
      <div className="card flex flex-column align-items-center justify-content-center">
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-column align-items-center gap-2"
        >
          <Toast ref={toast} />
          <ListBox
            id="item"
            name="item"
            value={formik.values.item}
            options={cities}
            optionLabel="name"
            placeholder="Select a City"
            onChange={e => {
              formik.setFieldValue("item", e.value);
            }}
            style={{ width: "15rem" }}
          />
          {getFormErrorMessage("item")}
          <Button type="submit" label="Submit" className="mt-2" />
        </form>
      </div>
    </>
  );
}

export default App;
