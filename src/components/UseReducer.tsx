import { ChangeEvent, useReducer } from "react";

type TAction = {
    type: string;
    payload: string;
};
const initialState = {
    name: "",
    email: "",
};

const reducer = (currentState: typeof initialState, action: TAction) => {
    switch (action.type) {
        // case "increment":
        //     return {
        //         count: currentState.count + 1,
        //     };
        // case "decrement":
        //     return {
        //         count: currentState.count - 1,
        //     };
        // case "reset":
        //     return {
        //         count: currentState.count * 0,
        //     };
        // case "incrementByAmount":
        //     return {
        //         count: currentState.count + action.payload,
        //     };
        case "addName":
            return {
                ...currentState,
                name: action.payload,
            };
        case "addEmail":
            return {
                ...currentState,
                email: action.payload,
            };
        default:
            return currentState;
    }
};
const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(state);
    };
    return (
        <div>
            <h1>try use reducer</h1>
            {/* <button
                onClick={() =>
                    dispatch({ type: "incrementByAmount", payload: 3 })
                }>
                Increment by three
            </button>
            <button onClick={() => dispatch({ type: "decrement" })}>
                Decremnt
            </button>
            <button onClick={() => dispatch({ type: "reset" })}>Reset</button> */}

            <form onSubmit={handleSubmit}>
                <input
                    onChange={(e) =>
                        dispatch({ type: "addName", payload: e.target.value })
                    }
                    type="text"
                    name="name"
                    id="name"
                />
                <input
                    onChange={(e) =>
                        dispatch({ type: "addEmail", payload: e.target.value })
                    }
                    type="text"
                    name="email"
                    id="email"
                />
                <button type="submit">submit</button>
            </form>
        </div>
    );
};

export default UseReducer;
