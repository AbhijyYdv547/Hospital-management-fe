const PatientList = ({ patients }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h3 className="text-2xl font-semibold text-blue-600 text-center">Patients</h3>
      <ul className="mt-4 space-y-4">
        {patients.map((patient) => (
          <li key={patient.patientId._id} className="border p-4 rounded-md">
            <p><strong>Name:</strong> {patient.patientId.name}</p>
            <p><strong>Details:</strong> {patient.details}</p>
            {patient.reportHash && (
              <a
                href={`https://gateway.pinata.cloud/ipfs/${patient.reportHash}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                View Report
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientList;
