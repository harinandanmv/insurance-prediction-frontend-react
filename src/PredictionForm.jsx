import { useState } from "react";
import { API_BASE_URL } from "./api";

const API_URL = API_BASE_URL; // Use the API base URL from api.js

function PredictionForm({ goBack }) {

  const [form, setForm] = useState({

    age: "",

    body_part: "",

    nature_of_injury: "",

    claim_type: "",

    medical_amount: ""

  });
 
  const [result, setResult] = useState("");
 
  const lettersOnly = /^[A-Za-z ]+$/;
 
  function handleChange(e) {

    const { name, value } = e.target;

    setForm(prev => ({ ...prev, [name]: value }));

  }
 
  async function handleSubmit(e) {

    e.preventDefault();
 
    // AGE

    if (form.age < 1 || form.age > 120) {

      alert("Enter a valid age (1–120)");

      return;

    }
 
    // BODY PART

    if (!lettersOnly.test(form.body_part)) {

      alert("Body part should contain only letters");

      return;

    }
 
    // NATURE OF INJURY

    if (!lettersOnly.test(form.nature_of_injury)) {

      alert("Nature of injury should contain only letters");

      return;

    }
 
    // CLAIM TYPE

    if (!lettersOnly.test(form.claim_type)) {

      alert("Claim type should contain only letters");

      return;

    }
 
    // MEDICAL AMOUNT

    if (!form.medical_amount || form.medical_amount <= 0) {

      alert("Enter valid medical amount");

      return;

    }
 
    try {

      const response = await fetch(`${API_URL}/predict`, {

        method: "POST",

        headers: { "Content-Type": "application/json" },

        body: JSON.stringify({

          age: Number(form.age),

          body_part: form.body_part,

          nature_of_injury: form.nature_of_injury,

          claim_type: form.claim_type,

          medical_amount: Number(form.medical_amount)

        })

      });
 
      const data = await response.json();

      setResult(data.estimated_insurance_amount);

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
 
          <label>Age</label>
<input

            type="number"

            name="age"

            value={form.age}

            onChange={handleChange}

            style={styles.input}

          />
 
          <label>Body Part</label>
<input

            type="text"

            name="body_part"

            placeholder="Eg: Arm, Leg, Back"

            value={form.body_part}

            onChange={handleChange}

            style={styles.input}

          />
 
          <label>Nature of Injury</label>
<input

            type="text"

            name="nature_of_injury"

            placeholder="Eg: Fracture, Burn"

            value={form.nature_of_injury}

            onChange={handleChange}

            style={styles.input}

          />
 
          <label>Claim Type</label>
<input

            type="text"

            name="claim_type"

            placeholder="Eg: Accident, Surgery"

            value={form.claim_type}

            onChange={handleChange}

            style={styles.input}

          />
 
          <label>Medical Amount</label>
<input

            type="number"

            name="medical_amount"

            placeholder="Enter medical expense"

            value={form.medical_amount}

            onChange={handleChange}

            style={styles.input}

          />
 
          <button type="submit" style={styles.button}>

            Predict
</button>
 
          {result && (
<p style={styles.result}>

              Estimated Insurance Amount: ₹{result}
</p>

          )}
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

 