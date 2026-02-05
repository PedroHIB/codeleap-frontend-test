import { useState } from "react";
import { useAuth } from "../../contexts/useAuth";

export function SignUp() {
  const [value, setValue] = useState("");
  const { login } = useAuth();

  function handleSubmit() {
    if (!value.trim()) return;
    login(value.trim());
  }

  return (
    <div>
      <h2>Welcome to CodeLeap network!</h2>

      <input
        placeholder="Please enter your username"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <button disabled={!value.trim()} onClick={handleSubmit}>
        ENTER
      </button>
    </div>
  );
}
