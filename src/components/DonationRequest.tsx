import React, { ChangeEvent, FormEvent, useState } from 'react';

interface FormData {
  organizationName: string;
  description: string;
  amountNeeded: number;
  contactEmail: string;
}

const DonationPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    organizationName: '',
    description: '',
    amountNeeded: 0,
    contactEmail: '',
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Form submitted with data:', formData);
    setFormData({
      organizationName: '',
      description: '',
      amountNeeded: 0,
      contactEmail: '',
    });
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <h2>Request for Donations</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="organizationName">Organization Name:</label>
          <input
            type="text"
            id="organizationName"
            name="organizationName"
            value={formData.organizationName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="amountNeeded">Amount Needed:</label>
          <input
            type="number"
            id="amountNeeded"
            name="amountNeeded"
            value={formData.amountNeeded}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="contactEmail">Contact Email:</label>
          <input
            type="email"
            id="contactEmail"
            name="contactEmail"
            value={formData.contactEmail}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit Request</button>
      </form>
    </div>
  );
};

export default DonationPage;
