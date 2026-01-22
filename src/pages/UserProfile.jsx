export default function UserProfile({ user }) {
  return (
    <div className="max-w-4xl bg-white rounded-xl shadow p-8">
      {/* Header */}
      <div className="flex items-center gap-6 mb-8">
        <img
          src={user.profile_photo_url || "/avatar.png"}
          alt="Profile"
          className="w-24 h-24 rounded-full border"
        />
        <div>
          <h2 className="text-2xl font-bold">{user.name}</h2>
          <p className="text-gray-600">{user.skill || "—"}</p>
          <p className="text-sm text-gray-500">{user.email}</p>
        </div>
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
        <Info label="Phone" value={user.phone} />
        <Info label="Official Phone" value={user.official_phone} />
        <Info label="NID No" value={user.nid_no} />
        <Info label="Ward No" value={user.ward_no} />
        <Info label="Blood Group" value={user.blood_group} />
        <Info label="Employee ID" value={user.employee_id} />
        <Info label="Present Address" value={user.present_address} />
        <Info label="Permanent Address" value={user.permanent_address} />
        <Info label="Joining Date" value={user.joining_date} />
        <Info label="Date of Birth" value={user.date_of_birth} />
        <Info label="Status" value={user.status === 1 ? "Active" : "Inactive"} />
      </div>
    </div>
  );
}

function Info({ label, value }) {
  return (
    <div>
      <p className="text-gray-500 mb-1">{label}</p>
      <p className="font-medium">{value || "—"}</p>
    </div>
  );
}
