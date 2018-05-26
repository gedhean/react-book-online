import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
import  file from '../test.pdf';

const Book = (props) => {
    return (
        <div>
            <Document fille={'../test.pdf'}> 
                <Page pagaNumber={23} />
            </Document>
        </div>
    );
}

export default Book;