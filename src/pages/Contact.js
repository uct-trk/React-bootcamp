import React from "react";
import { Formik, Form, Field } from "formik";
import Input from "../components/form/input";
import File from "../components/form/file";
import Checkbox from "../components/form/checkbox";
import Textarea from "../components/form/textarea";
import Select from "../components/form/select";
import Radio from "../components/form/radio";

function Contact() {
  return (
    <div>
      <h3>İletişim</h3>

      <Formik
        initialValues={{
          name: "",
          about: "",
          accept: false,
          skils: ["php", "css"],
          gender: 2,
          level: "sr",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ values }) => (
          <Form className="p-6 m-4 shadow-lg grid gap-y-4 border rounded">
            <Input label="Ad-Soyad" name="name" /> <br />
            <Textarea label="Hakkında" rows={6} name="about" /> <br />
            <Checkbox label="Kuralları Kabul Ediyorum" name="accept" />
            <Select
              label="Cinsiyet"
              name="gender"
              original={true}
              options={[
                { key: 1, value: "Kadın" },
                { key: 2, value: "Erkek" },
              ]}
            />{" "}
            <br />
            <Field component="select" name="skills" multiple={true}>
              <option value="php">PHP</option>
              <option value="css">CSS</option>
              <option value="js">Javascript</option>
              <option value="html">HTML</option>
            </Field>
            <File label="Avatar" name="avatar" /> <br />
            <Radio
              name="level"
              label="Seviyenizi Seçiniz"
              options={[
                { key: "jr", value: "Jr. Developer" },
                { key: "sr", value: "Sr. Developer" },
                { key: "ninja", value: "Ninja" },
              ]}
            />
            <button
              className="h-10 rounded bg-black text-sm text-white"
              disabled={!values.accept}
              type="submit"
            >
              Gönder
            </button>
            <pre>{JSON.stringify(values, null, 2)}</pre>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Contact;
