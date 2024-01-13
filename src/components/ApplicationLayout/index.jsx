import React from 'react';
import Header from 'components/ApplicationLayout/Header';
import Content from 'components/ApplicationLayout/Content';
import Sidebar from 'components/ApplicationLayout/Sidebar';
import Footer from 'components/ApplicationLayout/Footer';
import { LayoutWrapper } from 'components/ApplicationLayout/styled';

const ApplicationLayout = ({ children }) => {
    return (
        <LayoutWrapper>
            <Sidebar />
            <div className="container">
                <Header />
                <Content>{children}</Content>
                <Footer />
            </div>
        </LayoutWrapper>
    );
};

export default ApplicationLayout;
