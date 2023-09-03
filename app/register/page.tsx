"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

function RegisterPage() {
  const router = useRouter();

  const [newUser, setNewUser] = useState({ name: "", email: "", password: "" });

  const handleForm = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      const userInfo = await res.json();

      //check if user has already been registered in DB
      if (res.status === 400) {
        alert("user already registered, please try again");
        setNewUser({ name: "", email: "", password: "" });
        return router.push("/register");
      }

      //if it´s ok go to login
      router.push("/login");
    } catch (error) {
      console.log("error: ", error);
    }
  };

  return (
    <div className="text-center mx-auto">
      Register New User
      <form onSubmit={handleForm} className="flex flex-col">
        <div className="flex">
          <label htmlFor="name">Name</label>
          <input
            name="name"
            type="text"
            value={newUser.name}
            onChange={(e) => {
              setNewUser({ ...newUser, name: e.target.value });
            }}
          />
        </div>

        <div className="flex">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="email"
            value={newUser.email}
            onChange={(e) => {
              setNewUser({ ...newUser, email: e.target.value });
            }}
          />
        </div>

        <div className="flex">
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            value={newUser.password}
            onChange={(e) => {
              setNewUser({ ...newUser, password: e.target.value });
            }}
          />
        </div>
        <button>send</button>
      </form>
    </div>
  );
}

export default RegisterPage;
