import { Phone, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactInfoCard({ title, phones = [], whatsapp = [], email }) {
  return (
    <div className="bg-white rounded-xl border shadow-sm p-6">
      <h3 className="text-lg font-semibold text-green-800 mb-4">
        {title}
      </h3>

      <div className="space-y-3">
        {/* Phone Numbers */}
        {phones.map((phone, index) => (
          <div
            key={`phone-${index}`}
            className="flex items-center gap-3 text-gray-700"
          >
            <Phone className="w-5 h-5 text-green-700" />
            <span className="text-sm">{phone}</span>
          </div>
        ))}

        {/* WhatsApp Numbers */}
        {whatsapp.map((wa, index) => (
          <div
            key={`wa-${index}`}
            className="flex items-center gap-3 text-gray-700"
          >
            <FaWhatsapp className="w-5 h-5 text-green-700" />
            <span className="text-sm">{wa}</span>
          </div>
        ))}

        {/* Email */}
        {email && (
          <div className="flex items-center gap-3 text-gray-700">
            <Mail className="w-5 h-5 text-green-700" />
            <span className="text-sm">{email}</span>
          </div>
        )}
      </div>
    </div>
  );
}
