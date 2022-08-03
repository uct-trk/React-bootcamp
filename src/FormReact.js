import React, { useEffect, useState } from "react";

function FormReact() {
  const categoryList = [
    { key: 1, value: "PHP" },
    { key: 2, value: "JS" },
    { key: 3, value: "CSS" },
    { key: 4, value: "HTML" },
  ];
  const [name, setName] = useState("Ugucan");
  const [description, setDescription] = useState("");
  const [gender, setGender] = useState("1");
  const [categories, setCategories] = useState([2, 4]);
  const [rule, setRule] = useState(true);
  const [level, setLevel] = useState("jr_dev");
  const [avatar, setAvatar] = useState(false);
  const [image, setImage] = useState(false);

  useEffect(() => {
    if (avatar) {
      const fileReader = new FileReader();
      fileReader.addEventListener("load", function () {
        setImage(this.result);
      });
      fileReader.readAsDataURL(avatar);
    }
  }, [avatar]);

  const [rules, setRules] = useState([
    { key: 1, value: "1. kuralı kabul ediyorum", checked: false },
    { key: 2, value: "2. kuralı kabul ediyorum", checked: false },
    { key: 3, value: "3. kuralı kabul ediyorum", checked: true },
  ]);
  const levels = [
    { key: "beginner", value: "Baslangıç" },
    { key: "jr_dev", value: "Jr. Developer" },
    { key: "sn_dev", value: "Senior. Developer" },
  ];
  const genders = ["Erkek", "Kadın"];
  const selectedCategories =
    categories && categoryList.filter((c) => categories.includes(c.key));
  const selectedGender = genders[gender];
  const selectedLevel = levels.find((g) => g.key === level);
  const enabled = rules.every((rule) => rule.checked);

  const checkedRule = (key, checked) => {
    setRules((rules) =>
      rules.map((rule) => {
        if (key === rule.key) {
          rule.checked = checked;
        }
        return rule;
      })
    );
  };
  return (
    <>
      <button className="btn bg-purple-600" onClick={() => setName("Ahmet")}>
        Değiştir
      </button>
      <br />
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <br />
      {name}
      <br />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <br />
      {description}
      <br />
      <select value={gender} onChange={(e) => setGender(e.target.value)}>
        <option value="">Seçiniz</option>
        {genders.map((gender, index) => (
          <option value={index} key={index}>
            {gender}
          </option>
        ))}
      </select>
      <br />
      {selectedGender}
      <br />

      <button onClick={() => setCategories([2, 3, 4])}>Seç</button>
      <select
        multiple={true}
        value={categories}
        onChange={(e) =>
          setCategories(
            [...e.target.selectedOptions].map((option) => +option.value)
          )
        }
      >
        {categoryList.map((category) => (
          <option value={category.key} key={category.key}>
            {category.value}
          </option>
        ))}
      </select>

      <pre>{JSON.stringify(selectedCategories, null, 2)}</pre>
      {console.log(selectedCategories)}

      <br />

      <label>
        <input
          type="checkbox"
          checked={rule}
          onChange={(e) => setRule(e.target.checked)}
        />
        Kuralları kabul et
      </label>
      <br />

      <button disabled={!rule}>Devam Et</button>
      <br />
      {rule ? "True active button" : "False disabled button"}

      <br />

      {rules.map((rule) => (
        <label key={rule.key}>
          <input
            type="checkbox"
            checked={rule.checked}
            onChange={(e) => checkedRule(rule.key, e.target.checked)}
          />
          {rule.value}
        </label>
      ))}
      <br />
      <button disabled={!enabled}>Grup olarak devam et</button>
      <br />
      {enabled
        ? "Butun checkboxlar işaretlenmiştir aktif buton"
        : "checkbox işaretlenmemiş disabled buton"}
      <pre>{JSON.stringify(rules, null, 2)}</pre>

      <br />

      {levels.map((l, index) => (
        <label key={index}>
          <input
            onChange={(e) => setLevel(e.target.value)}
            type="radio"
            value={l.key}
            checked={l.key === level}
          />
          {l.value}
        </label>
      ))}
      <br />
      {JSON.stringify(selectedLevel)}

      <br />

      <label htmlFor="">
        <input type="file" onChange={(e) => setAvatar(e.target.files[0])} />
      </label>
      <br />
      {avatar && (
        <>
          <h3>{avatar.name}</h3>
          {image && <img src={image} alt={avatar.name} />}
        </>
      )}
    </>
  );
}

export default FormReact;
