import { useState } from "react";

export default function FormDashboard({ setDrafts, type }) {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
    });

    const handleChange = (e) => {

        const updatedData = {
            ...formData,
            [e.target.name]: e.target.value,
        };

        setFormData(updatedData);

        const hasData = Object.values(updatedData).some(
            (value) => value.trim() !== ""
        );

        setDrafts(prev => ({
            ...prev,
            [type]: hasData
        }));
    };

    return (
        <div className="container">
            <form>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email address
                    </label>

                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-control"
                        id="email"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Name
                    </label>

                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-control"
                        id="name"
                    />
                </div>

            </form>
        </div>
    );
}