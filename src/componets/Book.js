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
            //customTextRenderer={({ str, itemIndex }) => {
            //return <mark>{str + ' |$'}</mark>;
            //}}
            scale={1.6}
            loading={null}
          />
          {/* <Page pageNumber={124} scale={1.5} />
          <Page pageNumber={125} width={900} />
          <Page pageNumber={126} />
          <Page pageNumber={127} />
          <Page pageNumber={128} /> */}
          {/* <Outline
            onItemClick={o => console.log(o)}
            onParseSuccess={o => console.info(o)}
          /> */}
        </Document>
      </div>
    );
  }
}

export default Book;
