import * as React from 'react';

export interface AuxProps  { 
    children: React.ReactNode
 }


const ChatbotLayout = (props: AuxProps) => props.children;

export default ChatbotLayout;