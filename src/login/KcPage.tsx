import Template from "./Template";
import Login from "./pages/login/Login";
import Otp from "./pages/login/Otp";

const KcPage = ({ kcContext }: any) => {
    switch (kcContext.pageId) {
        case "login-username.ftl":
            return (
                <Template kcContext={kcContext}>
                    <Login kcContext={kcContext} />
                </Template>
            );
        case "login-otp.ftl":
            return (
                <Template kcContext={kcContext}>
                    <Otp kcContext={kcContext} />
                </Template>
            );
        default:
            return (
                <Template kcContext={kcContext}>
                    <div>Unknown page: {kcContext.pageId}</div>
                </Template>
            );
    }
};

export default KcPage;
