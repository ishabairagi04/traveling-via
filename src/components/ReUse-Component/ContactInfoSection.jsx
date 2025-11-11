import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope ,FaGlobe} from 'react-icons/fa';



const ContactInfoSection = ({
  title = "Contact Information",
    items=[
      { icon: FaMapMarkerAlt, title: 'Address', value: '456 Beach Road, Calangute, Goa 403516' },
      { icon: FaPhone, title: 'Phone', value: '+91 98123 45678' },
      { icon: FaEnvelope, title: 'Email', value: 'contact@goatours.com' },
      { icon: FaGlobe, title: 'Website', value: 'www.goatours.com' }
    ],
  iconColor = "text-[#d8a34d]" // your theme color
}) => {
  return (
    <div className="mb-20">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map(({ icon: Icon, title, value }, i) => (
          <div
            key={i}
            className="flex items-start gap-4 bg-gray-100 p-4 rounded-lg shadow-sm"
          >
            <Icon className={`text-xl ${iconColor}`} />
            <div>
              <h4 className="font-semibold mb-1">{title}</h4>
              <p className="text-gray-600 text-sm">{value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactInfoSection;
