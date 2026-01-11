/* eslint-disable react-refresh/only-export-components */
import { useLoaderData } from "react-router-dom";
import { getVolunteer } from "../services/api";

function banglaNumbers(number) {
  const eng = "0123456789";
  const bang = "০১২৩৪৫৬৭৮৯";
  return String(number)
    .split("")
    .map((d) => (eng.includes(d) ? bang[eng.indexOf(d)] : d))
    .join("");
}

export default function VolunteerDetail() {
  const volunteer = useLoaderData();

  if (!volunteer) {
    return (
      <p className="text-center text-red-500 mt-10">Volunteer not found!</p>
    );
  }

  const { id, name, ward, phone, email, skill, address, message, status } =
    volunteer;

  const statusMap = {
    Active: "bg-green-100 text-green-700",
    Pending: "bg-yellow-100 text-yellow-700",
    Rejected: "bg-red-100 text-red-700",
  };

  const statusLabel = {
    Active: "অনুমোদিত",
    Pending: "অপেক্ষমাণ",
    Rejected: "বাতিল",
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow mt-10">
      <h2 className="text-2xl font-bold mb-4">আবেদনের অবস্থা</h2>

      <p>
        <b>ID:</b> {banglaNumbers(id)}
      </p>
      <p>
        <b>নাম:</b> {name}
      </p>
      <p>
        <b>ওয়ার্ড:</b> {ward ? banglaNumbers(ward) : "N/A"}
      </p>
      <p>
        <b>ফোন:</b> {phone}
      </p>
      <p>
        <b>ইমেইল:</b> {email}
      </p>
      <p>
        <b>আগ্রহ:</b> {skill}
      </p>
      <p>
        <b>ঠিকানা:</b> {address}
      </p>
      <p>
        <b>বার্তা:</b> {message || "N/A"}
      </p>

      <p className="mt-4">
        <b>Status:</b>{" "}
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            statusMap[status] || "bg-gray-100 text-gray-600"
          }`}
        >
          {statusLabel[status] || status}
        </span>
      </p>
    </div>
  );
}

export async function loader({ params }) {
  try {
    const volunteer = await getVolunteer(params.volunteerId);
    return volunteer;
  } catch (error) {
    console.error(error);
    return null;
  }
}
