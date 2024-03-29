// RegistrationForm.js
import { useForm } from "react-hook-form";

function RegistrationForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    // Handle form submission (e.g., send data to server)
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Full Name"
        {...register("fullName", { required: true })}
      />
      <input
        type="email"
        placeholder="Email Address"
        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
      />
      <input
        type="password"
        placeholder="Password"
        {...register("password", { required: true })}
      />
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default RegistrationForm;
