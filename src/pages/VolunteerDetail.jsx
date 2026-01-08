/* eslint-disable react-refresh/only-export-components */
import { getVolunteer } from "../services/api";
import { useLoaderData } from "react-router";

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

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-md mt-10">
      <h2 className="text-2xl font-bold mb-4">Volunteer Details</h2>

      <div className="space-y-2 text-gray-700">
        <p>
          <b>ID:</b> {id}
        </p>
        <p>
          <b>নাম:</b> {name}
        </p>
        <p>
          <b>ওয়ার্ড:</b> {banglaNumbers(ward)}
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
          <b>অতিরিক্ত বার্তা:</b> {message || "N/A"}
        </p>
        <p>
          <b>Status:</b>{" "}
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${
              status === "Active"
                ? "bg-green-100 text-green-700"
                : "bg-yellow-100 text-yellow-700"
            }`}
          >
            {status}
          </span>
        </p>
      </div>
    </div>
  );
}

export async function loader({ params }) {
  try {
    const volunteer = await getVolunteer(params.volunteerId);
    return volunteer || null;
  } catch (error) {
    console.error("Failed to load Volunteer information:", error);
    return null;
  }
}
