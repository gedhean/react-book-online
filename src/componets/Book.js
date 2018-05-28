import React, { Component } from 'react';
import { Page } from 'react-pdf';
import { Document, Outline } from 'react-pdf/dist/entry.webpack'; // Using pdf.js workers for performance
import file from '../assets/test.pdf';

class Book extends Component {
  state = {
    page: 1
  };

  render() {
    return (
      <div>
        <button onClick={() => this.setState(ps => ({ page: ps.page > 2 ? ps.page - 1 : 0 }))}>
          prev page
        </button>

        <button onClick={() => this.setState(ps => ({ page: ps.page + 1 }))}>
          next page
        </button>
        <Document file={file} loading={'Please, wait sir!'}>
          <Page
            pageNumber={this.state.page}
            scale={1.3}
            loading={null}
          />
        </Document>
      </div>
    );
  }
}

export default Book;
