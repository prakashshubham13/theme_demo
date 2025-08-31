import { useState } from "react";

type LoginProps = {
    kcContext: any;
};

const Login = ({ kcContext }: LoginProps) => {
    const { url } = kcContext;

    const [otp, setOtp] = useState("");

    return (
        <form method="post" action={url.loginAction} className="space-y-4">
            <h1>Ninjaaaaaaaaaaa</h1>
            <div>
                <label className="block mb-1 text-sm font-medium">OTP</label>
                <input
                    type="text"
                    name="otp"
                    value={otp}
                    onChange={e => setOtp(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                Log In
            </button>
        </form>
    );
};

export default Login;
