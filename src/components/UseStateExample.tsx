import { ChangeEvent, useState } from "react";

const UseStateExample = () => {
    const [user, setUser] = useState({ name: "", email: "" });

    const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(user);
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const inputName = e.target.name;
        const value = e.target.value;

        // setUser({ ...user, name: e.target.value });
        // setUser({ ...user, name: e.target.value });

        // now dynamic
        setUser({ ...user, [inputName]: value });
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={handleInputChange}
                    type="text"
                    name="name"
                    id="name"
                />
                <input
                    onChange={handleInputChange}
                    type="text"
                    name="email"
                    id="email"
                />
                <button type="submit">submit</button>
            </form>
        </div>
    );
};

export default UseStateExample;
