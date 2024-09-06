import * as React from "react";
import ChatbotLayout from './ChatbotLayout';
import Header from './Header';
import Main from './Chatbot';

export interface LayoutProps  { 
    children: React.ReactNode
 }
 
const Layout = () => {
    <ChatbotLayout>
        <div className="layoutChatbot w-dvw bg-blue" style={{position: "fixed", width: 300, height: 600, right:0, bottom: 0}}>
            <Header />
            <Main />
        </div>
    </ChatbotLayout>
}

export default Layout;