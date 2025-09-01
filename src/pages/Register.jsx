import { useState } from "react";

export default function Register({ onRegister }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (name.trim() && email.trim()) onRegister({ name, email });
    };

    return (
        <div className="register">
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <input value={name} onChange={e => setName(e.target.value)} placeholder="Full Name" />
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
                <button type="submit">Sign in</button>
            </form>
        </div>
    );
}
