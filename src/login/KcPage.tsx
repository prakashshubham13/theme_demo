import Template from "./Template";
import Login from "./pages/Login";

const KcPage = ({ kcContext }: any) => {
  switch (kcContext.pageId) {
    case "login.ftl":
      return (
        <Template kcContext={kcContext}>
          <Login kcContext={kcContext} />
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
