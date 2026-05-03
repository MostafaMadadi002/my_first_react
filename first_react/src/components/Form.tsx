import React from "react";

function Form() {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    function handlesubmet(e: { preventDefault: () => void; }){
        e.preventDefault();
        alert(`Name: ${name}, Email: ${email}`);
    }

  return (
    <form onSubmit={handlesubmet}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
        <br />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <button type="submit">Submit</button>
    </form>
  );
}   

export default Form;