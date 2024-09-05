import * as React from "react";
import ChatbotLayout from './ChatbotLayout';
import Header from './Header';
import Main from './Chatbot';
export interface LayoutProps  { 
    children: React.ReactNode
 }
 
const Layout = (props: LayoutProps) => {
    <ChatbotLayout>
        <Header />
        <Main />
    </ChatbotLayout>
}

export default Layout;