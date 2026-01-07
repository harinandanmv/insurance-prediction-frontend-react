function Home({ goToForm }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",

        backgroundImage: "url('/insurance.avif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <h1>Welcome</h1>

      <button
        style={{ padding: "10px 18px", borderRadius: "10px" }}
        onClick={goToForm}
      >
        Go to Prediction Form
      </button>
    </div>
  );
}

export default Home;
