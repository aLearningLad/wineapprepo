"use client";

import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

interface DeleteBtnProps {
  id: number;
  name: string;
}

const DeleteBtn: React.FC<DeleteBtnProps> = ({ id, name }) => {
  const router = useRouter();

  const handleDelete = async () => {
    try {
      const res = await fetch(`/api/delete/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) {
        toast.error("Please try again");
      } else {
        toast(`Deleting ${name}...`);
        router.refresh();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="flex justify-center w-1/2 py-2 bg-red-600 text-white rounded-lg"
    >
      Delete Wine
    </button>
  );
};

export default DeleteBtn;
