import React from "react";

type TemplateProps = {
  kcContext: any;
  children: React.ReactNode;
};

const Template = ({ kcContext, children }: TemplateProps) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">
          {kcContext.pageId === "login.ftl" ? "Login" : "Keycloak Page"}
        </h1>
        {children}
      </div>
    </div>
  );
};

export default Template;
