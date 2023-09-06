"use client";
import { useSession} from 'next-auth/react'
import { useState } from "react";
import Modal from "@/app/components/Modal";

const UpdateName = () => {

  const {data: session, update} = useSession();
  //update method is the way to refresh when changing username, it goes with "trigger" on authorization
  const userId = session?.user.name

  const [modalOpen, setModalOpen] = useState(false);
  const [newName, setNewName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(newName)
    const res=  fetch("/api/user/edit",{
      method:"PATCH",
      headers: {
        "content-type": "application/json"
      },
      body:JSON.stringify({newName, userId})
    })
    setNewName("")
    setModalOpen(false)

  };
 


  return (
    <div>
      <button
        className="rounded border-2 px-2 py-1 bg-blue-300"
        onClick={() => setModalOpen(true)}
      >
        change
      </button>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form className="w-full" onSubmit={ handleSubmit}>
          Change name:
          <input
            placeholder="new name"
            name="newName"
            className="w-full p-2"
            value={newName}
            onChange={(e)=>setNewName(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-700 text-white px-5 py-1 mt-4"
          >
            submit
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default UpdateName;
