import React from "react";

// Component Imports
import { Header } from "client/components/layout";
import AppLoader from "client/components/loader/loader";

// Style Imports
import { LayoutWrapper } from "styles/layout";
import Head from "next/head";

function Layout({ children }) {
  return (
    <AppLoader>
      <LayoutWrapper>
        <Header />
        {children}
      </LayoutWrapper>
    </AppLoader>
  );
}

export default Layout;
