import { FaUserMd, FaHeartbeat, FaHospitalAlt, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Hero Section */}
            <header className="bg-blue-600 text-white text-center py-16">
                <h1 className="text-4xl font-bold">Welcome to MedCare Hospital</h1>
                <p className="text-lg mt-2">Providing Quality Healthcare for You and Your Family</p>
                <div className="flex justify-center items-center gap-4">
                    <button className="mt-6 px-6 py-2 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-200">
                        <Link to="/login">Login</Link>
                    </button>
                    <button className="mt-6 px-6 py-2 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-200">
                        <Link to="/signup">Signup</Link>
                    </button>
                </div>
            </header>

            {/* Services Section */}
            <section className="py-16 px-6 text-center">
                <h2 className="text-3xl font-semibold text-blue-600">Our Services</h2>
                <div className="grid md:grid-cols-3 gap-8 mt-8">
                    <ServiceCard icon={<FaUserMd />} title="Qualified Doctors" description="Our doctors are experts in their fields, ensuring the best care for you." />
                    <ServiceCard icon={<FaHeartbeat />} title="Emergency Care" description="24/7 emergency services for immediate medical attention." />
                    <ServiceCard icon={<FaHospitalAlt />} title="Modern Facilities" description="State-of-the-art equipment and advanced medical technology." />
                </div>
            </section>

            {/* About Us Section */}
            <section className="bg-white py-16 px-6 text-center">
                <h2 className="text-3xl font-semibold text-blue-600">About Us</h2>
                <p className="mt-4 text-lg max-w-3xl mx-auto">
                    MedCare Hospital has been a trusted healthcare provider for over 20 years. Our mission is to provide high-quality, compassionate medical services to our patients.
                </p>
            </section>

            {/* Contact Section */}
            <section className="bg-blue-600 text-white py-12 text-center">
                <h2 className="text-3xl font-semibold">Contact Us</h2>
                <p className="mt-4 text-lg flex justify-center items-center gap-2">
                    <FaPhone /> +123 456 7890
                </p>
            </section>
        </div>
    );
}

const ServiceCard = ({ icon, title, description }:any) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="text-5xl text-blue-600 mb-4 flex justify-center">{icon}</div>
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="mt-2 text-gray-600">{description}</p>
        </div>
    );
};

