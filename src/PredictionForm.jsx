import { useState } from "react";

function PredictionForm({ goBack }) {
  const [form, setForm] = useState({
    name: "",
    age: "",
    disease: "",
    model: ""
  });

  const [result, setResult] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
  e.preventDefault();

  if (!/^[A-Za-z ]+$/.test(form.name)) {
    alert("Name should contain only letters");
    return;
  }

  if (form.age < 1 || form.age > 120) {
    alert("Enter a valid age (1–120)");
    return;
  }

  if (!form.disease.trim()) {
    alert("Please enter disease name");
    return;
  }

  if (!form.model) {
    alert("Please select a model");
    return;
  }

  try {
    const response = await fetch("http://127.0.0.1:8000/predict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await response.json();
    setResult(data.prediction);
  } catch (err) {
    console.error(err);
    alert("Cannot connect to backend. Is it running?");
  }
}


  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <button onClick={goBack} style={styles.backBtn}>⬅ Back</button>

        <h2 style={styles.title}>Prediction Form</h2>

        <form onSubmit={handleSubmit} style={styles.form}>

          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={form.name}
            onChange={handleChange}
            style={styles.input}
          />

          <label>Age</label>
          <input
            type="number"
            name="age"
            placeholder="Enter Age"
            value={form.age}
            onChange={handleChange}
            style={styles.input}
          />

          <label>Disease</label>
          <input
            type="text"
            name="disease"
            placeholder="Enter Disease"
            value={form.disease}
            onChange={handleChange}
            style={styles.input}
          />

          <label>Model Category</label>
          <select
            name="model"
            value={form.model}
            onChange={handleChange}
            style={styles.input}
          >
            <option value="">-- Select Model --</option>
            <option value="name1">name1</option>
            <option value="name2">name2</option>
            <option value="name3">name3</option>
          </select>

          <button type="submit" style={styles.button}>
            Predict
          </button>

          {result && <p style={styles.result}>{result}</p>}
        </form>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f5f7fb",
  },
  card: {
    width: "430px",
    padding: "28px",
    borderRadius: "18px",
    background: "#fff",
    boxShadow: "0 18px 30px rgba(0,0,0,0.12)",
  },
  backBtn: {
    border: "none",
    background: "transparent",
    cursor: "pointer",
    marginBottom: "5px",
    fontSize: "14px"
  },
  title: {
    textAlign: "center",
    marginBottom: "18px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  input: {
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #d0d0d0",
  },
  button: {
    marginTop: "15px",
    padding: "10px",
    borderRadius: "10px",
    border: "1px solid black",
    background: "#6ad14b",
    fontWeight: "bold",
    cursor: "pointer",
  },
  result: {
    marginTop: "12px",
    color: "green",
    fontWeight: "bold"
  }
};

export default PredictionForm;
