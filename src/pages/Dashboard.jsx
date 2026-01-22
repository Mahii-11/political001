/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState, forwardRef, useImperativeHandle } from "react";
import { useNavigate } from "react-router-dom";
import { Home, Building2, CreditCard } from "lucide-react";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import IDCard from "./IdCard";
import UserProfile from "./UserProfile";
import Survey from "./Survey";
import { ChevronDown, User, Lock, LogOut } from "lucide-react";

const sidebarItems = [
  { key: "dashboard", label: "Dashboard", icon: Home },
  { key: "idcard", label: "ID Card", icon: CreditCard },
  {
    key: "survey",
    label: "Survey",
    icon: Building2,
    children: [
      { key: "survey-pending", label: "Pending Survey", status: "pending" },
      { key: "survey-completed", label: "Completed Survey", status: "completed" },
    ],
  },
];

export default function Dashboard() {
  const navigate = useNavigate();
  const idCardRef = useRef();
  const [openSurveyMenu, setOpenSurveyMenu] = useState(false);
  const [user, setUser] = useState(null);
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef(null);
  const [activeSection, setActiveSection] = useState("dashboard");
  const [totalAssigned, setTotalAssigned] = useState(0);
  const [title, setTitle] = useState("Dashboard");

  /* ------------------ AUTH ------------------ */
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      navigate("/login");
    } else {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setUser(JSON.parse(storedUser));
    }
  }, [navigate]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!user) return <p className="text-center">লোড হচ্ছে...</p>;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex flex-1 bg-slate-50">

        {/* Sidebar */}
        <aside className="w-64 bg-gray-800 text-white p-5 space-y-3">
          {/* <h2 className="text-xl font-bold mb-4">
            <span className="text-green-600">সবার আগে</span>{" "}
            <span className="text-red-600">বাংলাদেশ</span>
          </h2> */}

          {sidebarItems.map((item) => (
            <div key={item.key}>
              {/* Parent Button */}
              <button
                onClick={() => {
                  if (item.children) {
                    setActiveSection(item.key);
                    setOpenSurveyMenu(!openSurveyMenu);
                    setTitle(item.label);
                  } else {
                    setActiveSection(item.key);
                    setTitle(item.label);
                  }
                }}
                className={`flex items-center justify-between gap-3 w-full px-4 py-3 rounded-lg
        ${activeSection === item.key
                    ? "bg-white text-blue-600"
                    : "hover:bg-gray-700"
                  }`}
              >
                <div className="flex items-center gap-3">
                  <item.icon size={18} />
                  {item.label}
                </div>

                {item.children && (
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${openSurveyMenu ? "rotate-180" : ""
                      }`}
                  />
                )}
              </button>

              {/* Submenu */}
              {item.children && openSurveyMenu && (
                <div className="ml-8 mt-1 space-y-1">
                  {item.children.map((child) => (
                    <button
                      key={child.key}
                      onClick={() => setActiveSection(child.key)}
                      className={`block w-full text-left px-4 py-2 rounded-md text-sm
              ${activeSection === child.key
                          ? "bg-blue-600 text-white"
                          : "text-gray-300 hover:bg-gray-700"
                        }`}
                    >
                      {child.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">

          {/* Header */}
          <div className="relative flex items-center mb-6">
            <h1 className="absolute left-1/2 -translate-x-1/2 text-2xl font-bold">{title}</h1>

            {/* Profile Menu */}
            <div ref={profileRef} className="ml-auto relative">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center gap-2 bg-white px-3 py-2 rounded-full shadow hover:bg-slate-100"
              >
                <img
                  src={
                    user.image
                      ? `https://election-backend.dotzpos.com/public/volunteer/${user.image}`
                      : "/avatar.png"
                  }
                  alt="Profile"
                  className="w-9 h-9 rounded-full object-cover border"
                />
                <ChevronDown size={16} />
              </button>

              {/* Dropdown */}
              {profileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border z-50">
                  <button
                    onClick={() => {
                      setProfileOpen(false);
                      setActiveSection("profile");
                      setTitle("User Profile")
                    }}
                    className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 w-full"
                  >
                    <User size={16} explain />
                    Profile
                  </button>

                  <button
                    onClick={() => {
                      setProfileOpen(false);
                      navigate("/change-password");
                      setTitle("Change Password")
                    }}
                    className="flex items-center gap-2 w-full px-4 py-3 text-sm hover:bg-slate-100"
                  >
                    <Lock size={16} /> Change Password
                  </button>

                  <hr />

                  <button
                    onClick={() => {
                      localStorage.clear();
                      navigate("/login");
                    }}
                    className="flex items-center gap-2 w-full px-4 py-3 text-sm text-red-600 hover:bg-red-50"
                  >
                    <LogOut size={16} /> Logout
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* ---------------- DASHBOARD ---------------- */}
          {activeSection === "dashboard" && (
            <>
              <div className="bg-yellow-100 rounded-xl p-6 mb-8">
                <h2 className="text-xl font-bold text-gray-800">
                  স্বাগতম, {user.name}!
                </h2>
                <p className="text-gray-600 mt-1">
                  আপনার অংশগ্রহণ আমাদের টিমকে আরও শক্তিশালী করে তুলছে।
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <StatCard title="Total Voter Assigned" value={totalAssigned} />
                <StatCard title="Pending Survey" value="4" />
                <StatCard title="Completed Survey" value="25" />
                <StatCard title="Imcomplete Survey" value="25" />
              </div>
            </>
          )}

          {/* ---------------- ID CARD ---------------- */}
          {activeSection === "idcard" && (
            <div>
              <IDCard ref={idCardRef} user={user} />

              <button
                onClick={() => idCardRef.current?.downloadPDF()}
                className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold"
              >
                ID Card ডাউনলোড করুন
              </button>
            </div>
          )}

          {/* PROFILE SECTION */}
          {activeSection === "profile" && (
            <UserProfile user={user} />
          )}
          {/* ---------------- SURVEY ---------------- */}
          {activeSection === "survey" && (
            <Survey user={user} />
          )}


        </main>
      </div>

      <Footer />
    </div>
  );
}

/* Stat Card */
function StatCard({ title, value }) {
  return (
    <div className="bg-slate-100 text-slate-800 rounded-xl p-6 shadow-md">
      <h3 className="text-sm opacity-90">{title}</h3>
      <p className="text-3xl font-bold mt-2">{value}</p>
    </div>
  );
}
