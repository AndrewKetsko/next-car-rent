"use client";

import { useState } from "react";
import { Button } from "../Button/Button";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/users/register", {
      method: "POST",
      body: JSON.stringify(formData),
      "content-type": "application/json",
    });
    if (!res.ok) {
      throw new Error("Failed to create user");
    }
    router.refresh();
    router.push("/api/auth/signin");
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div>
      <form className="flex flex-col p-10 gap-2" onSubmit={handleSubmit}>
        <label className="">Name</label>
        <input
          className=""
          type="text"
          name="name"
          id="name"
          required
          onChange={handleChange}
          value={formData.name}
        />
        <label className="">Email</label>
        <input
          className=""
          type="email"
          name="email"
          id="email"
          required
          onChange={handleChange}
          value={formData.email}
        />
        <label className="">Password</label>
        <input
          className=""
          type="password"
          name="password"
          id="password"
          required
          onChange={handleChange}
          value={formData.password}
        />
        <Button text="Register" type="submit" />
      </form>
    </div>
  );
};

export default RegisterForm;
